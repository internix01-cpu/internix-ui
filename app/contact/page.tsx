import { PageHero, SectionHeader } from "../components";

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
              <p>
                <span className="font-semibold text-[#202124]">Website:</span> www.internixconsultancy.com
              </p>
            </div>
          </div>

          <form
            action="mailto:hello@internixconsultancy.com"
            method="post"
            encType="text/plain"
            className="rounded-[28px] border border-[#e8eaed] bg-[#f8fafd] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="form-field">
                <span className="form-label">Full name</span>
                <input className="form-input" name="Full name" type="text" placeholder="Your name" required />
              </label>

              <label className="form-field">
                <span className="form-label">Email</span>
                <input className="form-input" name="Email" type="email" placeholder="you@example.com" required />
              </label>

              <label className="form-field">
                <span className="form-label">Phone</span>
                <input className="form-input" name="Phone" type="tel" placeholder="+91" />
              </label>

              <label className="form-field">
                <span className="form-label">I am a</span>
                <select className="form-input" name="Enquiry type" required defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Company hiring talent</option>
                  <option>Candidate looking for opportunity</option>
                  <option>Internship enquiry</option>
                  <option>General enquiry</option>
                </select>
              </label>
            </div>

            <label className="form-field mt-5">
              <span className="form-label">Message</span>
              <textarea
                className="form-input min-h-36 resize-y"
                name="Message"
                placeholder="Tell us what you need."
                required
              />
            </label>

            <button className="btn-primary mt-6" type="submit">
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
