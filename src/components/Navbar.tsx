"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/assessments", label: "Assessments" },
      { href: "/services/therapy", label: "Therapy" },
      { href: "/services/educational-services", label: "Educational Services" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blush/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Ewanti Drinkwater Educational Psychology"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-semibold text-charcoal leading-tight">
                Ewanti Drinkwater
              </p>
              <p className="text-xs text-charcoal-light tracking-wide">
                Educational Psychologist
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname.startsWith("/services")
                        ? "text-blush-dark"
                        : "text-charcoal hover:text-blush-dark"
                    }`}
                  >
                    {link.label}
                    <span className="ml-1 text-xs">▾</span>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-blush/30 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-blush-dark transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-blush-dark"
                      : "text-charcoal hover:text-blush-dark"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-blush text-white text-sm font-medium rounded-full hover:bg-blush-dark transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-blush/20 bg-white px-4 pb-4 pt-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center py-2 text-sm font-medium text-charcoal"
                >
                  {link.label}
                  <span className="text-xs">{servicesOpen ? "▴" : "▾"}</span>
                </button>
                {servicesOpen &&
                  link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block pl-4 py-2 text-sm text-charcoal-light hover:text-blush-dark"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  pathname === link.href ? "text-blush-dark" : "text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
