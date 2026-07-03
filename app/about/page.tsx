import Image from "next/image";
import { CTA, PageHero, SectionHeader } from "../components";
import { processSteps, services } from "../content";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Internix"
        title="A bridge between ambitious talent and growing companies."
        description="Internix is a recruitment and internship consultancy focused on making hiring simpler and career movement clearer. We connect prepared candidates with companies that need dependable technology talent."
        image="/talent-opportunity-hero.svg"
        imageAlt="Connected technology city representing opportunity networks"
        primaryHref="/contact"
        primaryLabel="Contact Internix"
        secondaryHref="/client"
        secondaryLabel="For companies"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Who we are"
            title="Recruitment support with candidate readiness at the center."
            description="The Internix approach is built around one practical idea: companies should meet candidates who are prepared, and candidates should meet opportunities that fit their skills and goals."
          />
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We work across AI, Blockchain, Web3, software development, internships, and early-career technology roles. Our role is to simplify conversations, strengthen profiles, and keep both sides moving toward selection.
          </p>
        </div>
        <div className="relative aspect-[1.2] overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm">
          <Image src="/ai-network-vector.svg" alt="AI talent network illustration" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Our work"
            title="Connecting talent, simplifying hiring."
            description="Internix supports both sides of the hiring equation with clear communication and structured follow-through."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-md border border-slate-200 bg-[#f7fafc] p-7">
                <h2 className="text-2xl font-black text-[#0c1d33]">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="How we operate"
          title="A practical process from requirement to selection."
          description="Every engagement is handled with role clarity, profile preparation, coordinated interviews, and consistent follow-up."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f58220]">{item.step}</p>
              <h2 className="mt-3 text-xl font-black text-[#0c1d33]">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
