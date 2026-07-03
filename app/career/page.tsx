import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero, SectionHeader } from "../components";
import { candidateBenefits, careerTracks } from "../content";

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career pathways"
        title="Build a technology career with stronger preparation."
        description="Internix helps candidates move from learning to opportunity through career consultation, profile improvement, interview preparation, and matched openings in AI, Blockchain, Web3, and software development."
        image="/blockchain-vector.svg"
        imageAlt="Blockchain network illustration"
        primaryHref="/candidate"
        primaryLabel="Apply as candidate"
        secondaryHref="/contact"
        secondaryLabel="Talk to us"
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Roles we support"
          title="Career tracks for emerging technology talent."
          description="These tracks reflect the documents' AI, Blockchain, and Web3 focus while expanding the website into a clearer candidate journey."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerTracks.map((track) => (
            <div key={track} className="rounded-md border border-slate-200 bg-white p-5 text-lg font-black text-[#0c1d33] shadow-sm">
              {track}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[1.28] overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm">
            <Image src="/ai-network-vector.svg" alt="AI career preparation network" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Candidate support"
              title="Preparation that makes your profile easier to trust."
              description="Internix focuses on the practical pieces candidates need before they meet companies."
            />
            <ul className="mt-8 grid gap-3">
              {candidateBenefits.map((benefit) => (
                <li key={benefit} className="rounded-md border border-slate-200 bg-[#f7fafc] px-5 py-4 font-bold text-slate-700">
                  {benefit}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Start career discussion
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
