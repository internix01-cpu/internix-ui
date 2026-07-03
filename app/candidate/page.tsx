import Link from "next/link";
import { CTA, PageHero, SectionHeader } from "../components";
import { candidateBenefits, careerTracks, processSteps } from "../content";

export default function CandidatePage() {
  return (
    <>
      <PageHero
        eyebrow="For candidates"
        title="Get ready for the opportunity you want."
        description="Internix supports candidates with career consultation, skill mapping, profile improvement, interview preparation, and company matching for AI, Blockchain, Web3, internships, and software roles."
        image="/consultation-vector.svg"
        imageAlt="Professional hiring consultation"
        primaryHref="/contact"
        primaryLabel="Apply now"
        secondaryHref="/career"
        secondaryLabel="Explore careers"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Candidate journey"
          title="From profile preparation to offer support."
          description="Internix helps you present your work clearly and move through interviews with better preparation."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {candidateBenefits.map((benefit) => (
            <div key={benefit} className="rounded-md border border-slate-200 bg-white p-6 font-bold leading-7 text-slate-700 shadow-sm">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Opportunities"
              title="Roles aligned to practical technology skills."
              description="We help candidates prepare for roles where AI, Blockchain, Web3, and software execution matter."
            />
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Send your profile
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {careerTracks.map((track) => (
              <div key={track} className="rounded-md border border-slate-200 bg-[#f7fafc] p-5 text-lg font-black text-[#0c1d33]">
                {track}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="How it works"
          title="A clear candidate process."
          description="You know what is happening at each stage: preparation, matching, interview coordination, and follow-up."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f58220]">{item.step}</p>
              <h2 className="mt-3 text-xl font-black text-[#0c1d33]">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
