import Image from "next/image";
import Link from "next/link";
import { CTA, FeatureCard, PageHero, SectionHeader } from "./components";
import {
  candidateBenefits,
  careerTracks,
  clientBenefits,
  focusAreas,
  joinBenefits,
  processSteps,
  services,
  testimonials,
  whyInternix,
} from "./content";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Internix Consultancy"
        title="Connecting talent with opportunity."
        description="A positive career and hiring partner for candidates and companies across AI, Blockchain, Web3, software, internships, and placement support."
        image="/home-hero.jpg"
        imageAlt="Technology team collaborating around AI and blockchain systems"
        primaryHref="/client"
        primaryLabel="Hire talent"
        secondaryHref="/candidate"
        secondaryLabel="Find opportunity"
      />

      <section className="border-y border-[#e8eaed] bg-[#f8fafd] py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5">
          {focusAreas.map((item) => (
            <span key={item} className="rounded-full border border-[#dadce0] bg-white px-5 py-3 text-sm font-medium text-[#5f6368]">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="What we do"
            title="Simple hiring. Clear careers."
            description="We bridge the gap between prepared candidates and companies that need reliable technology talent."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="btn-secondary">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafd] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Why Internix"
              title="Built for better matches."
              description="Internix keeps the process human, structured, and practical so candidates feel confident and companies save time."
            />
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Start with Internix
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {whyInternix.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[1.28] overflow-hidden rounded-[28px] bg-[#f1f3f4]">
            <Image
              src="/consultation-vector.svg"
              alt="Consultation for hiring and career guidance"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Benefits to join"
              title="Support that moves you forward."
              description="For candidates, Internix is about clarity, confidence, and better preparation before meeting companies."
            />
            <div className="mt-8 grid gap-3">
              {joinBenefits.map((benefit) => (
                <div key={benefit} className="rounded-[18px] border border-[#e8eaed] bg-white px-5 py-4 font-medium text-[#3c4043]">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8eaed] bg-[#f8fafd] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="How it works"
            title="A calm process from first talk to final step."
            description="We keep candidates and companies aligned through each stage."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[24px] border border-[#e8eaed] bg-white p-6">
                <p className="text-sm font-semibold text-[#1a73e8]">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#202124]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5f6368]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="For candidates"
              title="Feel ready for opportunity."
              description="Career preparation, profile support, interview guidance, and role matching."
            />
            <div className="mt-8 grid gap-3">
              {candidateBenefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="rounded-[18px] bg-[#e8f0fe] px-5 py-4 font-medium text-[#174ea6]">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="For companies"
              title="Meet prepared talent."
              description="Shortlisted candidates, smoother interviews, and organized hiring support."
            />
            <div className="mt-8 grid gap-3">
              {clientBenefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="rounded-[18px] bg-[#e6f4ea] px-5 py-4 font-medium text-[#137333]">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafd] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Career paths"
            title="Grow into technology roles."
            description="Selected tracks where Internix supports preparation and placement conversations."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerTracks.map((track) => (
              <div key={track} className="rounded-[22px] border border-[#e8eaed] bg-white p-5 text-lg font-semibold text-[#202124]">
                {track}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Testimonials"
            title="What people value."
            description="Role-based feedback themes from client and candidate conversations, kept anonymous instead of using fake names."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-[28px] border border-[#e8eaed] bg-white p-7 shadow-[0_4px_18px_rgba(60,64,67,0.08)]">
                <p className="text-4xl font-semibold text-[#fbbc04]">“</p>
                <p className="mt-2 leading-8 text-[#3c4043]">{testimonial.quote}</p>
                <div className="mt-6 border-t border-[#e8eaed] pt-5">
                  <p className="font-semibold text-[#202124]">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-[#5f6368]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
