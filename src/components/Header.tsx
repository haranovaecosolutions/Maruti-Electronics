import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
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
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image
            src="/maruti/logo.png"
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

        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-call" href={`tel:${company.phones[0]}`}>
          <Phone size={18} />
          {company.phones[0]}
        </a>
      </div>
    </header>
  );
}