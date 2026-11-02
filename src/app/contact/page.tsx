"use client";

import { FormEvent, useEffect, useState } from "react";
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("");
    setShowToast(false);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit enquiry");
      }

      setStatus("success");
      setMessage(result.message || "Your enquiry has been sent successfully.");
      setShowToast(true);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
      setShowToast(true);
    }
  }

  useEffect(() => {
    if (!showToast) return;

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <section className="page-hero contact-hero">
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" maxLength={120} required />
              <input name="phone" placeholder="Phone Number" maxLength={40} required />
              <input name="email" placeholder="Email Address" type="email" maxLength={254} required />
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
                maxLength={5000}
                required
              />
              <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Submit Enquiry"}
              </button>
              {message ? (
                <p className={`form-status ${status}`}>{message}</p>
              ) : null}
            </form>
            {showToast ? (
              <div className={`toast-message ${status}`}>
                {message}
              </div>
            ) : null}
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