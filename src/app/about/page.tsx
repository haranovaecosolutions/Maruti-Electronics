import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import { company } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Maruti Electricals</span>
          <h1>Government Approved Electrical Contractor Since 1995</h1>
          <p>
            Maruti Electricals was founded in 1995 with the objective of becoming
            a leading electrical contractor firm in the industrial, commercial
            and government sector.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Company Introduction"
              title="Experienced, Reliable and Trusted Electrical Contractor"
              description={company.description}
            />

            <p className="lead">
              The firm provides high-quality and affordable electrical solutions,
              creates long-term relationships with clients, responds immediately
              to changing client needs and maintains a continuous focus on
              complete customer satisfaction.
            </p>
          </div>

          <div className="premium-card">
            <h3>Core Identity</h3>
            <ul className="clean-list">
              <li>Government Approved Electrical Contractor</li>
              <li>Founded in 1995</li>
              <li>Industrial, Commercial and Government Sector Work</li>
              <li>Complete Electrical Solutions</li>
              <li>HT, LT, DG, Streetlight and Solar Expertise</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <h3>Mission Statement</h3>
            <p>
              To provide high-quality, affordable electrical solutions, cultivate
              long-term relationships with clients, respond quickly to client
              needs, achieve complete customer satisfaction and continuously
              improve services.
            </p>
          </div>

          <div className="mission-card">
            <h3>Vision</h3>
            <p>
              To maintain a highly experienced and efficient team with customer
              service personnel ready to respond quickly to customer needs and
              concerns.
            </p>
          </div>

          <div className="mission-card">
            <h3>Values</h3>
            <p>
              Maruti Electricals values honesty, reliability, integrity,
              fortitude, temperance, faith and hope, enabling the team to provide
              high-quality services in a professional and efficient manner.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <Image
            src="/maruti/profile-brochure.svg"
            alt="Maruti Electricals Profile"
            width={760}
            height={760}
            className="rounded-image"
          />

          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Commitment"
              title="Safe, Reliable and Efficient Electrical Solutions"
            />

            <p className="lead">
              Maruti Electricals is committed to delivering safe, reliable and
              efficient electrical solutions that power growth and progress.
            </p>

            <div className="mini-grid">
              <span>Safety First</span>
              <span>Quality Work</span>
              <span>Timely Completion</span>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}