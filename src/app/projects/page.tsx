import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import { projects, process } from "@/data/site";

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Projects & Expertise</span>
          <h1>HT, LT, DG, Streetlight and Solar Project Execution</h1>
          <p>
            Maruti Electricals undertakes industrial, commercial and government
            sector electrical projects with a focus on safety, reliability and
            timely completion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Expertise. Your Trust."
            title="Project Capabilities"
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Work Process"
            title="From Site Survey to Maintenance Support"
          />

          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}