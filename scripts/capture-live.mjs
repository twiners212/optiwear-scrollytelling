import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function capture() {
  console.log("Launching Chrome...");
  const chromeProcess = spawn(
    CHROME_PATH,
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--window-size=1440,900",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  try {
    // Wait for chrome to be ready
    let versionData = null;
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
        if (res.ok) {
          versionData = await res.json();
          break;
        }
      } catch (e) {
        await sleep(200);
      }
    }

    if (!versionData) {
      throw new Error("Failed to connect to Chrome remote debugging");
    }

    console.log("Connected to Chrome. Creating target page...");
    const newTargetRes = await fetch(`http://127.0.0.1:${PORT}/json/new?https://optiwear-scrollytelling.vercel.app/`, {
      method: "PUT",
    });
    const targetData = await newTargetRes.json();
    console.log("Target created:", targetData.webSocketDebuggerUrl);

    const ws = new WebSocket(targetData.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let messageId = 1;
    const pendingPromises = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pendingPromises.has(data.id)) {
        const { resolve, reject } = pendingPromises.get(data.id);
        pendingPromises.delete(data.id);
        if (data.error) {
          reject(data.error);
        } else {
          resolve(data.result);
        }
      }
    };

    function sendCommand(method, params = {}) {
      const id = messageId++;
      return new Promise((resolve, reject) => {
        pendingPromises.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await sendCommand("Page.enable");
    await sendCommand("Runtime.enable");

    // Set viewport
    await sendCommand("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });

    console.log("Navigating to live landing page...");
    await sendCommand("Page.navigate", { url: "https://optiwear-scrollytelling.vercel.app/" });

    // Wait until images and canvas are loaded
    console.log("Waiting for canvas and assets to load...");
    let loaded = false;
    for (let i = 0; i < 30; i++) {
      await sleep(1000);
      const evalRes = await sendCommand("Runtime.evaluate", {
        expression: `(() => {
          const loadingText = document.body.innerText.includes("Loading visual experience...");
          const canvas = document.querySelector("canvas");
          return { loadingText, hasCanvas: !!canvas };
        })()`,
        returnByValue: true,
      });

      console.log(`Poll ${i + 1}:`, evalRes.result?.value);
      if (evalRes.result?.value && !evalRes.result.value.loadingText) {
        loaded = true;
        break;
      }
    }

    // Extra sleep to let GSAP and canvas settle
    await sleep(2000);

    // Capture Landing Hero screenshot
    console.log("Capturing landing page hero screenshot...");
    const screenshotRes = await sendCommand("Page.captureScreenshot", {
      format: "png",
    });

    const buffer = Buffer.from(screenshotRes.data, "base64");
    const outDir = path.resolve("./public/assets/images");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const heroPath = path.join(outDir, "preview.png");
    fs.writeFileSync(heroPath, buffer);
    console.log("Saved preview to:", heroPath);

    // Also navigate and capture Shop page and Heritage page for rich documentation if desired
    console.log("Navigating to Heritage page...");
    await sendCommand("Page.navigate", { url: "https://optiwear-scrollytelling.vercel.app/heritage" });
    await sleep(3000);
    const heritageRes = await sendCommand("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(outDir, "preview-heritage.png"), Buffer.from(heritageRes.data, "base64"));
    console.log("Saved preview-heritage.png");

    console.log("Navigating to Shop page...");
    await sendCommand("Page.navigate", { url: "https://optiwear-scrollytelling.vercel.app/shop" });
    await sleep(3000);
    const shopRes = await sendCommand("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(outDir, "preview-shop.png"), Buffer.from(shopRes.data, "base64"));
    console.log("Saved preview-shop.png");

    ws.close();
  } finally {
    chromeProcess.kill();
    console.log("Chrome closed.");
  }
}

capture().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
