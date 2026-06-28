import Link from "next/link";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { company } from "@/data/site";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light">Contact Us</span>
          <h2>Need safe, reliable and efficient electrical solutions?</h2>
          <p>
            Connect with Maruti Electricals for HT, LT, DG, solar, streetlight,
            panel, testing, commissioning and AMC services.
          </p>
        </div>

        <div className="cta-actions">
          <a href={`tel:${company.phones[0]}`} className="btn btn-light">
            <PhoneCall size={18} />
            Call {company.phones[0]}
          </a>
          <Link href="/contact" className="btn btn-outline-light">
            <ShieldCheck size={18} />
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}