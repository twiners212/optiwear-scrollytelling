import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
          <div className="font-headline-lg text-headline-lg text-primary dark:text-on-primary-fixed mb-4">
            OPTIWEAR
          </div>
          <p className="font-body-md text-body-md text-secondary">
            © 2026 OPTIWEAR. CALIBRATED LUXURY.


          </p>
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-8 md:gap-16 md:justify-end">
          <div className="flex flex-col space-y-4">
            {/* TODO: Replace href with actual privacy policy page */}
            <Link
              href="#"
              className="font-body-md text-body-md text-secondary hover:opacity-70 transition-opacity"
            >
              Privacy
            </Link>
            {/* TODO: Replace href with actual terms page */}
            <Link
              href="#"
              className="font-body-md text-body-md text-secondary hover:opacity-70 transition-opacity"
            >
              Terms
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            {/* TODO: Replace href with actual support page */}
            <Link
              href="#"
              className="font-body-md text-body-md text-secondary hover:opacity-70 transition-opacity"
            >
              Technical Support
            </Link>
            {/* TODO: Replace href with actual atelier page */}
            <Link
              href="#"
              className="font-body-md text-body-md text-secondary hover:opacity-70 transition-opacity"
            >
              Global Atelier
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
