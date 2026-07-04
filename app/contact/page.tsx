import { PageHero, SectionHeader } from "../components";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Internix"
        title="Let us help you connect."
        description="Tell us whether you want to hire talent or explore opportunities. We will get back to you with the right next step."
        image="/talent-opportunity-hero.svg"
        imageAlt="Connected opportunity network"
        primaryHref="#contact-form"
        primaryLabel="Fill the form"
        secondaryHref="mailto:hello@internixconsultancy.com"
        secondaryLabel="Email us"
      />

      <section id="contact-form" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeader
              eyebrow="Contact form"
              title="Start here."
              description="Short form. Clear next step."
            />
            <div className="mt-8 space-y-4 text-[#5f6368]">
              <p>
                <span className="font-semibold text-[#202124]">Email:</span> hello@internixconsultancy.com
              </p>
              
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
