import Image from "next/image";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Placement", href: "#placement" },
  { label: "For Companies", href: "#companies" },
  { label: "Contact", href: "#contact" },
];

const heroSlides = ["AI Careers", "Blockchain Roles", "Offer Support"];

const experienceStats = [
  { value: "2", label: "Career Tracks" },
  { value: "6", label: "Placement Stages" },
  { value: "1:1", label: "Interview Support" },
  { value: "Offer", label: "Focused Follow-up" },
];

const services = [
  {
    title: "AI Development Training",
    description:
      "Practical preparation in Python, APIs, LLM workflows, automation, model integration, and AI project development.",
  },
  {
    title: "Blockchain Development Training",
    description:
      "Hands-on learning for smart contracts, Web3 apps, wallet integrations, token standards, and dApp architecture.",
  },
  {
    title: "Interview Preparation",
    description:
      "Resume improvement, GitHub review, portfolio presentation, mock interviews, and technical feedback.",
  },
  {
    title: "Placement Assistance",
    description:
      "Company matching, interview scheduling, recruiter communication, feedback tracking, and follow-up until offer letter.",
  },
];

const reasons = [
  {
    title: "Dedicated Career Team",
    description:
      "Candidates are guided by mentors and placement coordinators who understand development hiring needs.",
  },
  {
    title: "Skill-Based Matching",
    description:
      "Profiles are mapped to AI, blockchain, and Web3 roles based on practical capability and interview readiness.",
  },
  {
    title: "Company-Focused Process",
    description:
      "Hiring partners receive prepared candidates with clearer profiles, project work, and communication support.",
  },
  {
    title: "Consistent Follow-up",
    description:
      "Every interview stage is tracked so candidates keep moving toward selection and offer completion.",
  },
];

const methodology = [
  {
    step: "Prepare It",
    description:
      "Assess skills, train on real project tasks, polish profiles, and prepare candidates for technical conversations.",
  },
  {
    step: "Track It",
    description:
      "Monitor applications, interview rounds, company feedback, and improvement areas after each opportunity.",
  },
  {
    step: "Place It",
    description:
      "Coordinate interviews with multiple companies and support candidates through final offer-letter steps.",
  },
];

const placementSteps = [
  "Registration and career consultation",
  "AI or blockchain skill assessment",
  "Project-based technical preparation",
  "Resume, LinkedIn, and GitHub polish",
  "Company interviews and feedback",
  "Offer letter and joining support",
];

const roles = [
  "AI Developer",
  "LLM App Developer",
  "ML Engineer Trainee",
  "Blockchain Developer",
  "Smart Contract Developer",
  "Web3 Frontend Developer",
];

const footerGroups = [
  {
    title: "Company",
    links: ["About Internix", "Programs", "Placement Process", "Contact"],
  },
  {
    title: "Candidates",
    links: ["AI Development", "Blockchain Development", "Interview Prep", "Apply Now"],
  },
  {
    title: "Employers",
    links: ["Hire Candidates", "Screened Profiles", "Interview Support", "Partnership"],
  },
  {
    title: "Resources",
    links: ["Career Guidance", "Portfolio Support", "Mock Interviews", "FAQs"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#152036]">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-[0_10px_30px_rgba(21,32,54,0.06)] backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-3" aria-label="Internix home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#0f4c9a] text-sm font-black text-white">
              IX
            </span>
            <span>
              <span className="block text-xl font-black tracking-tight text-[#0f2441]">Internix</span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#f58220]">
                Talent Placement
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#f58220]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-md bg-[#f58220] px-5 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(245,130,32,0.25)] transition hover:bg-[#df7118]"
          >
            Enquiry
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)]">
          <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-[#f58220]/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#0f4c9a]/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-7 flex gap-2">
                {heroSlides.map((item, index) => (
                  <span
                    key={item}
                    className={`h-2.5 rounded-full ${index === 0 ? "w-10 bg-[#f58220]" : "w-2.5 bg-slate-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">
                AI and Blockchain Career Partner
              </p>
              <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.04] tracking-tight text-[#0f2441] sm:text-6xl">
                Digital talent solutions for career growth.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Internix trains, prepares, and places candidates in AI development and blockchain development roles with continuous placement assistance until offer letter.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-md bg-[#f58220] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_15px_34px_rgba(245,130,32,0.28)] transition hover:bg-[#df7118]"
                >
                  Apply Now
                </a>
                <a
                  href="#programs"
                  className="rounded-md border border-[#0f4c9a]/20 bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0f4c9a] shadow-sm transition hover:border-[#0f4c9a] hover:bg-[#f8fbff]"
                >
                  Explore Programs
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-10 z-20 hidden rounded-md bg-white p-4 shadow-[0_15px_40px_rgba(21,32,54,0.12)] md:block">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Track</p>
                <p className="mt-1 text-lg font-black text-[#0f2441]">AI + Web3</p>
              </div>
              <div className="absolute -right-2 bottom-9 z-10 hidden rounded-md bg-[#0f4c9a] p-5 text-white shadow-[0_18px_44px_rgba(15,76,154,0.25)] md:block">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-100">Support</p>
                <p className="mt-1 text-lg font-black">Until Offer</p>
              </div>
              <div className="relative z-0 rounded-md border border-slate-200 bg-white p-3 shadow-[0_26px_70px_rgba(21,32,54,0.14)]">
                <div className="relative aspect-[1.18] overflow-hidden rounded-md bg-[#edf4fb]">
                  <Image
                    src="/internix-ai-blockchain-hero.png"
                    alt="Candidates preparing for AI and blockchain development placement"
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 lg:grid-cols-6">
            {["AI", "Blockchain", "Web3", "LLM Apps", "Smart Contracts", "Placement"].map((item) => (
              <div key={item} className="rounded-md border border-slate-100 bg-[#fbfcfe] px-4 py-4 text-center text-sm font-black text-slate-500">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">About Us</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#0f2441] sm:text-5xl">
              Who we are?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Internix is a career and placement partner for candidates who want to enter AI development and blockchain development. We combine practical technical preparation with structured placement coordination.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our team supports candidates through training, assessment, interview preparation, company matching, and follow-up until they receive an offer letter.
            </p>
            <a
              href="#placement"
              className="mt-8 inline-flex rounded-md bg-[#0f4c9a] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b3f80]"
            >
              View More
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experienceStats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-slate-200 bg-[#f8fbff] p-7 shadow-sm">
                <p className="text-5xl font-black text-[#f58220]">{stat.value}</p>
                <p className="mt-3 text-base font-bold text-[#0f2441]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="programs" className="bg-[#f5f8fc] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">Our Services</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0f2441] sm:text-5xl">
                The programs we are offering
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our service includes a complete career-development path from skill-building to interview scheduling and placement follow-up.
              </p>
            </div>

            <div className="mt-11 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <article key={service.title} className="group rounded-md border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(21,32,54,0.10)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-[#f58220]/10 text-lg font-black text-[#f58220] group-hover:bg-[#f58220] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-black text-[#0f2441]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">Why choose us</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0f2441] sm:text-5xl">
              How can Internix grow your career?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We provide a structured placement system that adapts to each candidate’s profile and the expectations of hiring companies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Why choose us", "How we work", "Our mission"].map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-md px-5 py-3 text-sm font-black ${index === 0 ? "bg-[#f58220] text-white" : "border border-slate-200 bg-white text-slate-600"}`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 h-10 w-10 rounded-md bg-[#0f4c9a]/10" />
                <h3 className="text-xl font-black text-[#0f2441]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="placement" className="bg-[#0f2441] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fbb36f]">How we work</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Internix follows a simple placement methodology.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We prepare candidates, track every interview step, and keep placement support active until the offer letter is received.
              </p>
              <div className="mt-8 grid gap-3">
                {methodology.map((item) => (
                  <div key={item.step} className="rounded-md border border-white/10 bg-white/7 p-5">
                    <h3 className="text-xl font-black text-[#fbb36f]">{item.step}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md bg-white p-6 text-[#152036] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">Placement Journey</p>
              <h3 className="mt-4 text-3xl font-black text-[#0f2441]">From registration to offer letter</h3>
              <div className="mt-7 grid gap-3">
                {placementSteps.map((step, index) => (
                  <div key={step} className="grid grid-cols-[42px_1fr] gap-4 rounded-md border border-slate-200 bg-[#f8fbff] p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-[#f58220] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="self-center text-sm font-bold text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="companies" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">We make connections</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0f2441] sm:text-5xl">
                Hire trained AI and blockchain candidates.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Companies can connect with Internix to access candidates who have completed technical preparation, project practice, and interview readiness support.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-md bg-[#f58220] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#df7118]"
              >
                Discuss Hiring
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((role) => (
                <div key={role} className="rounded-md border border-slate-200 bg-white p-5 text-base font-black text-[#0f2441] shadow-sm">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="rounded-md bg-white p-7 shadow-[0_20px_60px_rgba(21,32,54,0.08)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">Trusted placement support</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-[#0f2441]">
                  Start your AI or blockchain career path with managed placement support.
                </h2>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-md bg-[#0f4c9a] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b3f80] lg:mt-0"
              >
                Let&apos;s discuss
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-8 rounded-md border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f58220]">Contact</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0f2441] sm:text-5xl">
                Ready to move from skills to offer letter?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Apply as a candidate or connect as a hiring company. Internix will help coordinate the next step.
              </p>
            </div>
            <div className="grid content-center gap-4">
              <a
                href="mailto:hello@internix.com?subject=Candidate%20Application"
                className="rounded-md bg-[#f58220] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#df7118]"
              >
                Candidate Application
              </a>
              <a
                href="mailto:hello@internix.com?subject=Hiring%20Partnership"
                className="rounded-md border border-[#0f4c9a]/20 bg-[#f8fbff] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0f4c9a] transition hover:border-[#0f4c9a]"
              >
                Hiring Partnership
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07182d] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_1.95fr]">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Internix home">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#f58220] text-sm font-black text-white">
                IX
              </span>
              <span>
                <span className="block text-xl font-black tracking-tight">Internix</span>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#fbb36f]">
                  AI & Blockchain Placement
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Internix helps candidates prepare for AI and blockchain development careers and supports placement until offer letter.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>Email: hello@internix.com</p>
              <p>Enquiries: Candidates and hiring partners</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="transition hover:text-[#fbb36f]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Internix. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#contact" className="transition hover:text-[#fbb36f]">
                Privacy
              </a>
              <a href="#contact" className="transition hover:text-[#fbb36f]">
                Terms
              </a>
              <a href="#contact" className="transition hover:text-[#fbb36f]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
