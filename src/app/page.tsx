import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import {
  clients,
  company,
  highlights,
  process,
  services,
  whyChooseUs,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">
              <ShieldCheck size={18} />
              Government Approved Electrical Contractor
            </span>

            <h1>
              Complete Electrical Solutions for{" "}
              <span>HT, LT, DG, Streetlight & Solar</span>
            </h1>

            <p>
              Founded in {company.established}, {company.name} provides safe,
              reliable and efficient electrical solutions for industrial,
              commercial and government sector projects.
            </p>

            <div className="hero-actions">
              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>{company.established}</strong>
                <span>Established</span>
              </div>
              <div>
                <strong>HT / LT</strong>
                <span>Electrical Work</span>
              </div>
              <div>
                <strong>Solar</strong>
                <span>On-Grid Solutions</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/maruti/hero-ht-lt.svg"
              alt="Maruti Electricals HT LT Electrical Work"
              width={760}
              height={900}
              priority
            />
            <div className="floating-card top">
              <Zap />
              <span>{company.tagline}</span>
            </div>
            <div className="floating-card bottom">
              <BadgeCheck />
              <span>Safe • Reliable • Efficient</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-strip">
        <div className="container highlight-grid">
          {highlights.map((item, index) => (
            <div key={item} className="highlight-item">
              {index === 0 && <ShieldCheck />}
              {index === 1 && <Zap />}
              {index === 2 && <Clock3 />}
              {index === 3 && <Target />}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="Premium Electrical Contracting Services"
            description="A complete service portfolio covering HT, LT, DG, solar, streetlight, safety systems, testing, commissioning and AMC."
          />

          <div className="service-grid">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="center">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Choose Us?"
              title="Built on Safety, Quality and Timely Execution"
              description="Maruti Electricals focuses on reliable execution, professional workmanship and complete customer satisfaction."
            />

            <div className="why-list">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="why-item">
                  <ShieldCheck />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="image-stack">
            <Image
              src="/maruti/hero-solar.svg"
              alt="Solar Installation"
              width={700}
              height={820}
            />
            <div className="image-note">
              <SunIcon />
              <strong>Powering Today, Sustaining Tomorrow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Work Process"
            title="Structured Execution from Survey to Support"
          />

          <div className="process-grid">
            {process.map((step, index) => (
              <div key={step} className="process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients-preview">
        <div className="container">
          <SectionHeader
            eyebrow="Valuable Customers"
            title="Trusted by Industrial, Commercial and Government Clients"
          />

          <div className="client-marquee">
            {clients.slice(0, 12).map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>

          <div className="center">
            <Link href="/clients" className="btn btn-secondary">
              View Client List
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function SunIcon() {
  return <Users size={24} />;
}