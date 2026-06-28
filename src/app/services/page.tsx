import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Complete Electrical Solutions Under One Roof</h1>
          <p>
            HT, LT, DG, panel work, solar systems, DGVCL liaisoning, testing,
            commissioning, CCTV, fire safety systems, earthing and AMC services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service Portfolio"
            title="Electrical Contracting Services"
            description="A detailed overview of the services provided by Maruti Electricals."
          />

          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}