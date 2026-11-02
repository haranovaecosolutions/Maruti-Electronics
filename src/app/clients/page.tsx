import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero clients-hero">
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

          <div className="clients-image-stack">
            <Image
              src="/client 01.png"
              alt="Collection of customer logos, first image"
              width={568}
              height={438}
              sizes="(max-width: 960px) 100vw, 900px"
            />
            <Image
              src="/client 02.png"
              alt="Collection of customer logos, second image"
              width={558}
              height={740}
              sizes="(max-width: 960px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}