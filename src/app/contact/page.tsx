import {
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Get in Touch with Maruti Electricals</h1>
          <p>
            For HT, LT, DG, solar, streetlight, panel, testing, commissioning,
            CCTV, fire safety and AMC related work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Enquiry"
              title="Send Your Requirement"
              description="Share your electrical project requirement and our team will connect with you."
            />

            <form
              className="contact-form"
              action={`mailto:${company.emails[0]}`}
              method="post"
              encType="text/plain"
            >
              <input name="name" placeholder="Your Name" required />
              <input name="phone" placeholder="Phone Number" required />
              <input name="email" placeholder="Email Address" type="email" />
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>HT Electrical Work</option>
                <option>LT Electrical Work</option>
                <option>DG Installation</option>
                <option>Solar Solutions</option>
                <option>DGVCL Liaisoning</option>
                <option>Testing & Commissioning</option>
                <option>Annual Maintenance Contract</option>
              </select>
              <textarea
                name="message"
                placeholder="Write your requirement"
                rows={6}
              />
              <button className="btn btn-primary" type="submit">
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="contact-panel">
            <h3>Maruti Electricals</h3>
            <p>{company.tagline}</p>

            <div className="contact-item">
              <MapPin />
              <span>{company.address}</span>
            </div>

            <div className="contact-item">
              <PhoneCall />
              <span>{company.phones.join(" / ")}</span>
            </div>

            <div className="contact-item">
              <Mail />
              <span>{company.emails.join(" / ")}</span>
            </div>

            <div className="contact-item">
              <Zap />
              <span>{company.website}</span>
            </div>

            <div className="approval-box">
              <ShieldCheck />
              Government Approved Electrical Contractor
            </div>
          </div>
        </div>
      </section>
    </>
  );
}