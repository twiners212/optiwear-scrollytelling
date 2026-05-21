# 🔍 Audit Report — Pre-GitHub Push
**Project:** Optiwear Scrollytelling Glasses  
**Tanggal:** 21 Mei 2026  
**Status:** ⚠️ Perlu Beberapa Perbaikan Sebelum Push

---

## 1. Build & Lint Status

### ✅ ESLint
```
✔ No ESLint warnings or errors
```

### ✅ Production Build (`npm run build`)
Build **berhasil** tanpa error. Satu **warning** minor:

```
warn - The class `ease-[cubic-bezier(0.16,1,0.3,1)]` is ambiguous and matches multiple utilities.
```

> [!NOTE]
> Warning ini **tidak memblokir build** dan bersifat kosmetik. Bisa diperbaiki dengan mengganti kelas tersebut menjadi versi yang di-escape atau menggunakan style inline `transition-timing-function`.

### Build Output Routes:
| Route | Size | First Load JS |
|-------|------|---------------|
| `/` | 13.8 kB | 159 kB |
| `/heritage` | 3.69 kB | 149 kB |
| `/shop` | 3.44 kB | 99.4 kB |
| `/shop/[id]` | 4.47 kB | 91.7 kB |

---

## 2. Keamanan & Data Sensitif

### ✅ Tidak Ditemukan Kredensial
Pencarian menyeluruh untuk pola berikut di seluruh source code **tidak menemukan hasil**:
- `api_key`, `apiKey`, `API_KEY`
- `secret`, `SECRET_KEY`, `private_key`
- `auth_token`, `bearer`, `firebase`
- `aws_access`, `password`, `credential`

### ✅ Tidak Ada File `.env`
Tidak ditemukan file `.env`, `.env.local`, atau file environment lainnya di project.

### ✅ `.gitignore` Sudah Mencakup `.env*.local`
Pattern `.env*.local` sudah ada di `.gitignore` (baris 29).

---

## 3. File yang TIDAK PERLU Di-Push

> [!IMPORTANT]
> File-file berikut adalah artefak development/referensi yang **tidak seharusnya** masuk ke repository GitHub.

### File Referensi HTML (Root) — Harus Dihapus atau Di-gitignore
| File | Size | Alasan |
|------|------|--------|
| [optiwear.html](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/optiwear.html) | 12 KB | File referensi desain Stitch — bukan bagian dari aplikasi |
| [stitch_html.html](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/stitch_html.html) | 19.8 KB | File referensi desain Stitch — bukan bagian dari aplikasi |
| [test.html](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/test.html) | 44.8 KB | File testing — bukan bagian dari aplikasi |

### File CSS Output — Harus Dihapus atau Di-gitignore
| File | Size | Alasan |
|------|------|--------|
| [out.css](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/out.css) | 31.3 KB | File CSS hasil generate — bukan source code |

### File Log — Harus Dihapus atau Di-gitignore
| File | Size | Alasan |
|------|------|--------|
| [build-error.log](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/build-error.log) | 16 KB | Log error build lama — tidak relevan untuk repository |

### File PRD/Dokumentasi Internal — Pertimbangkan untuk Dihapus
| File | Size | Alasan |
|------|------|--------|
| [prd.md](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/prd.md) | 4.2 KB | Dokumen internal development |
| [prd2.md](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/prd2.md) | 3.7 KB | Dokumen internal development |
| [prd-heritage.md](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/prd-heritage.md) | 4.6 KB | Dokumen internal development |
| [PROGRESS.md](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/PROGRESS.md) | 2.8 KB | Catatan progress development |

> [!TIP]
> Jika ingin menyimpan PRD sebagai dokumentasi, pindahkan ke folder `docs/` yang terpisah. Namun untuk repository produksi, lebih baik dihapus.

---

## 4. Aset Besar — Pertimbangan Ukuran Repo

### 📦 Frame Sequence: `public/images/` (120 file, ~4.3 MB total)
File `ezgif-frame-001.jpg` s/d `ezgif-frame-120.jpg` digunakan untuk efek scrollytelling. 

| Metrik | Nilai |
|--------|-------|
| Jumlah file | 120 |
| Total ukuran | **~4.3 MB** |
| Ukuran per frame | 29 KB – 98 KB |

> [!WARNING]
> 120 file gambar sebesar 4.3 MB akan membuat **clone repository menjadi lambat** bagi kontributor baru dan menambah ukuran git history secara permanen. Pertimbangkan:
> - Menggunakan **Git LFS** (Large File Storage) untuk folder `public/images/`
> - Atau meng-host frame sequence di CDN dan memuat secara dinamis

### Heritage Images: `public/assets/images/heritage/` (6 file, ~1.5 MB)
| File | Size |
|------|------|
| `hero_manifesto.png` | 330 KB |
| `hand_polishing.png` | 311 KB |
| `raw_materials.png` | 288 KB |
| `timeline_aviator.png` | 257 KB |
| `timeline_square.png` | 247 KB |
| `timeline_circle.png` | 96 KB |

> [!NOTE]
> Ukuran heritage images masih wajar (~1.5 MB total). Tidak ada tindakan yang diperlukan.

### Total ukuran `public/` folder: **~5.8 MB**

---

## 5. Struktur Folder

### ✅ Hal yang Sudah Baik
- Pemisahan `src/app/` (App Router routes) dan `src/pages/` (komponen Heritage) jelas
- Komponen UI terorganisir: `src/components/`, `src/components/shop/`, `src/components/ui/`
- Context terpisah di `src/context/`
- Utility dan mock data di `src/lib/`
- Font lokal di `src/app/fonts/`

### ⚠️ Hal yang Perlu Diperhatikan

#### Duplikasi Route Heritage (Pages Router vs App Router)
```
src/app/heritage/page.tsx        ← App Router (aktif)
src/pages/Heritage/index.tsx     ← Pages Router (juga aktif!)
src/pages/Heritage/CraftsmanshipSection.tsx
src/pages/Heritage/EvolutionTimeline.tsx
src/pages/Heritage/HeroManifesto.tsx
src/pages/Heritage/ScrollReveal.tsx
```

> [!WARNING]
> Next.js menghasilkan **dua set routes** untuk Heritage — satu melalui App Router (`/heritage`) dan satu melalui Pages Router (`/Heritage`, `/Heritage/CraftsmanshipSection`, dll). Build output menunjukkan:
> ```
> Route (app):   /heritage           3.69 kB → 149 kB
> Route (pages): /Heritage           5.49 kB → 131 kB  ← DUPLIKAT
>                /Heritage/CraftsmanshipSection   ← TIDAK PERLU
>                /Heritage/EvolutionTimeline      ← TIDAK PERLU
>                /Heritage/HeroManifesto          ← TIDAK PERLU
>                /Heritage/ScrollReveal           ← TIDAK PERLU
> ```
> 
> Komponen di `src/pages/Heritage/` secara tidak sengaja **menjadi halaman tersendiri** yang dapat diakses user (misalnya `/Heritage/ScrollReveal`). 
>
> **Rekomendasi:** Pindahkan komponen Heritage dari `src/pages/Heritage/` ke `src/components/heritage/` agar tidak ter-expose sebagai route Pages Router.

---

## 6. Temuan Kode

### ⚠️ `console.warn` di Production Code
```
src/components/ScrollytellingSection.tsx:32
  console.warn(`Failed to load image: ${img.src}`);
```
> Bisa diterima sebagai fallback warning, tapi pertimbangkan untuk menghapusnya di production.

### ⚠️ Placeholder Links `href="#"`
Ditemukan **4 instance** di [Footer.tsx](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/src/components/Footer.tsx) (baris 20, 26, 34, 40):
- Privacy → `href="#"`
- Terms → `href="#"`
- Technical Support → `href="#"`
- Global Atelier → `href="#"`

> [!NOTE]
> Ini tidak masalah untuk MVP/demo, tapi sebaiknya didokumentasikan sebagai hal yang perlu diisi nanti.

### ⚠️ `package.json` — Nama Project Generic
```json
"name": "temp_app"
```
> Sebaiknya diubah menjadi `"optiwear"` atau `"scrollytelling-glasses"` sebelum push.

### ⚠️ `README.md` — Default Template
File [README.md](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/README.md) masih berisi teks default `create-next-app`. Sebaiknya ditulis ulang dengan deskripsi project Optiwear.

### ⚠️ Gambar Produk External (Google Stitch CDN)
File [mockProducts.ts](file:///c:/Users/radit/.gemini/antigravity/scratch/scrollytelling-glasses/src/lib/mockProducts.ts) mereferensikan **3 URL gambar** dari `lh3.googleusercontent.com`. 

> [!NOTE]
> URL ini adalah CDN publik Google Stitch yang **bisa berubah atau dihapus** kapan saja. Untuk produksi, unduh dan simpan gambar secara lokal di `public/`.

---

## 7. `.gitignore` — Kelengkapan

### ✅ Sudah Di-cover
- `/node_modules`
- `/.next/`
- `/out/`
- `/build`
- `.env*.local`
- `*.pem`
- `next-env.d.ts`
- Debug logs (`npm-debug.log*`, `yarn-debug.log*`)

### ❌ Perlu Ditambahkan
```gitignore
# Reference/design files
*.html
out.css
build-error.log

# Internal docs (opsional)
prd*.md
PROGRESS.md
```

---

## 8. Ringkasan Audit

### ✅ AMAN
| Item | Status |
|------|--------|
| ESLint | ✅ Bersih, tanpa error/warning |
| Production build | ✅ Sukses (1 warning minor) |
| Kredensial/API key | ✅ Tidak ditemukan |
| File `.env` | ✅ Tidak ada |
| `.gitignore` dasar | ✅ Sudah ada |
| Heritage images lokal | ✅ Tersimpan dengan benar |
| TypeScript types | ✅ Valid (build lulus) |

### ⚠️ PERLU DIPERBAIKI SEBELUM PUSH

| Prioritas | Item | Tindakan |
|-----------|------|----------|
| 🔴 Tinggi | Komponen Heritage di `src/pages/` ter-expose sebagai route | Pindahkan ke `src/components/heritage/` |
| 🔴 Tinggi | File sampah di root (`*.html`, `out.css`, `build-error.log`) | Hapus atau tambahkan ke `.gitignore` |
| 🟡 Sedang | `package.json` nama `"temp_app"` | Ubah ke nama project yang sesuai |
| 🟡 Sedang | `README.md` masih default template | Tulis ulang dengan deskripsi Optiwear |
| 🟡 Sedang | `.gitignore` kurang lengkap | Tambahkan entry untuk file referensi |
| 🟡 Sedang | PRD/Progress docs di root | Hapus atau pindahkan ke `docs/` |
| 🟢 Rendah | `console.warn` di ScrollytellingSection | Pertimbangkan untuk dihapus |
| 🟢 Rendah | Placeholder `href="#"` di Footer | Dokumentasikan sebagai TODO |
| 🟢 Rendah | Frame sequence 4.3 MB | Pertimbangkan Git LFS |
| 🟢 Rendah | Gambar produk masih referensi URL external | Unduh ke lokal untuk produksi |
| 🟢 Rendah | Tailwind ambiguous class warning | Fix escape atau gunakan style inline |

---

## 9. Rekomendasi `.gitignore` Update

Berikut penambahan yang disarankan untuk `.gitignore`:

```gitignore
# Reference/design HTML files
optiwear.html
stitch_html.html
test.html

# Generated CSS
out.css

# Build logs
build-error.log

# Internal docs (opsional — hapus baris ini jika ingin menyimpan)
# prd*.md
# PROGRESS.md
```

---

> [!IMPORTANT]
> **Belum ada Git repository yang diinisialisasi** di project ini (`git init` belum dijalankan). Pastikan untuk menjalankan `git init` sebelum membuat commit pertama.
