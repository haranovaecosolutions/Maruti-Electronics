import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import { clients } from "@/data/site";

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Valuable Customers</span>
          <h1>Trusted by Reputed Industrial, Commercial and Government Clients</h1>
          <p>
            Maruti Electricals has served a wide client base across industries,
            public bodies, government departments and commercial establishments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Client References"
            title="Our Valuable Customers"
          />

          <div className="clients-grid">
            {clients.map((client) => (
              <div key={client} className="client-card">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}