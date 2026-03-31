import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Ewanti Drinkwater"
                width={44}
                height={44}
                className="object-contain brightness-0 invert"
              />
              <div>
                <p className="font-heading text-lg font-semibold leading-tight">
                  Ewanti Drinkwater
                </p>
                <p className="text-xs text-white/60 tracking-wide">
                  Educational Psychologist
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A safe space where stories are heard, honoured, and gently
              unravelled. A place where you are truly seen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-blush">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: "/about", label: "About Me" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/resources", label: "Resources" },
                { href: "/workshops", label: "Workshops" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blush transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-blush">
              Registrations
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Educational Psychologist (HPCSA) — PS0165964</li>
              <li>BWRT Level 1 Practitioner</li>
              <li>Irlen Screener</li>
              <li>Board of Healthcare Funders (BHF) — PR1319612</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Ewanti Drinkwater. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
