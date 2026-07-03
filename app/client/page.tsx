import Link from "next/link";
import { CTA, PageHero, SectionHeader } from "../components";
import { clientBenefits, processSteps } from "../content";

export default function ClientPage() {
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title="Simplify hiring with prepared technology talent."
        description="Internix helps companies hire smarter by presenting screened candidates, managing communication, coordinating interviews, and supporting selection for AI, Blockchain, Web3, software, and internship roles."
        image="/client-shortlisting-vector.svg"
        imageAlt="Recruiter reviewing candidate profiles"
        primaryHref="/contact"
        primaryLabel="Submit hiring need"
        secondaryHref="/candidate"
        secondaryLabel="Candidate journey"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Hiring support"
            title="A cleaner route from requirement to shortlist."
            description="Instead of sorting through scattered profiles, companies get a focused hiring partner that understands the role and coordinates the candidate journey."
          />
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Plan hiring
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {clientBenefits.map((benefit) => (
            <div key={benefit} className="rounded-md border border-slate-200 bg-white p-5 font-bold leading-7 text-slate-700 shadow-sm">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Client process"
            title="Hiring coordination with visible next steps."
            description="Internix keeps the process structured so client teams can evaluate candidates without losing time in coordination gaps."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-md border border-slate-200 bg-[#f7fafc] p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f58220]">{item.step}</p>
                <h2 className="mt-3 text-xl font-black text-[#0c1d33]">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
