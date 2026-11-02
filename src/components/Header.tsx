"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { company } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  const isActiveLink = (href: string) => {
    const normalizedHref = href.replace(/\/+$/, "") || "/";
    return normalizedPathname === normalizedHref;
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image
            src="/CARD_ME_.jpg.jpeg"
            alt="Maruti Electricals Logo"
            width={72}
            height={72}
            className="brand-logo"
          />
          <div>
            <span className="brand-name">Maruti Electricals</span>
            <span className="brand-subtitle">
              Government Approved Electrical Contractor
            </span>
          </div>
        </Link>

        <nav className="nav desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-call"
          href={`tel:${company.phones[0].replace(/\s/g, "")}`}
          aria-label={`Call ${company.phones[0]}`}
        >
          <Phone size={18} />
          {company.phones[0]}
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}