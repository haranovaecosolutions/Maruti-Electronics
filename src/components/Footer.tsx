import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { company, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Image
              src="/CARD_ME_.jpg.jpeg"
              alt="Maruti Electricals Logo"
              width={48}
              height={48}
              className="brand-logo"
            />
            <span>{company.name}</span>
          </div>
          <p>{company.description}</p>
          <p className="footer-tagline">{company.tagline}</p>
        </div>

        <div>
          <h4>Core Services</h4>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>
                <Link href="/services">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer-contact">
            <MapPin size={18} />
            <a
              href="https://maps.app.goo.gl/SJxm2anuebZU42zF8"
              target="_blank"
              rel="noreferrer"
            >
              {company.address}
            </a>
          </p>
          <p className="footer-contact">
            <Phone size={18} />
            <span>
              <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
                {company.phones[0]}
              </a>
              {company.phones[1] ? ` / ` : ""}
              {company.phones[1] ? (
                <a href={`tel:${company.phones[1].replace(/\s/g, "")}`}>
                  {company.phones[1]}
                </a>
              ) : null}
            </span>
          </p>
          <p className="footer-contact">
            <Mail size={18} />
            <a href="mailto:marutielec@rediffmail.com">marutielec@rediffmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maruti Electricals.</span>
        <span>Safe Work • Quality Work • Timely Completion • Customer Satisfaction</span>
      </div>
    </footer>
  );
}