import Link from "next/link";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { company, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Zap />
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
            <MapPin size={18} /> {company.address}
          </p>
          <p className="footer-contact">
            <Phone size={18} /> {company.phones.join(" / ")}
          </p>
          <p className="footer-contact">
            <Mail size={18} /> {company.emails[0]}
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