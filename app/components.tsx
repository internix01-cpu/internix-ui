import Image from "next/image";
import Link from "next/link";
import { footerGroups, navLinks } from "./content";
import { MobileMenu } from "./mobile-menu";

const wordColors = ["#1a73e8", "#202124", "#137333", "#fbbc04"];

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function ColorTitle({ text, className }: { text: string; className: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} style={{ color: wordColors[index % wordColors.length] }}>
          {word}{" "}
        </span>
      ))}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8eaed] bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Internix home">
          {/* <span className="text-2xl font-bold tracking-normal">
            <span className="text-[#1a73e8]">Inter</span>
            <span className="text-[#202124]">nix</span>
            <span className="text-[#137333]">.</span>
          </span> */}
          <Image src="/internix-2.jpg" alt="Internix Logo" width={150} height={50} className="object-contain" />
        </Link>

        <nav className="hidden items-center gap-x-6 text-sm font-medium text-[#5f6368] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#1a73e8]">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="btn-secondary min-h-11 px-5">
            Login
          </Link>
          <Link href="/register" className="btn-primary min-h-11 px-5">
            Register
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e8eaed] bg-[#f8fafd] text-[#202124]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="Internix home">
            <Image src="/internix-2.jpg" alt="Internix Logo" width={150} height={50} className="object-contain" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#5f6368]">
            Connecting talent with opportunity across AI, Blockchain, Web3, internships, and technology hiring.
          </p>
          <div className="mt-6 text-sm leading-7 text-[#5f6368]">
            <p>Email: hello@internixconsultancy.com</p>
            <p>Website: www.internixconsultancy.com</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-[#202124]">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#5f6368]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-[#1a73e8]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e8eaed]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-[#5f6368] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Internix. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/client" className="transition hover:text-[#1a73e8]">
              Hire Talent
            </Link>
            <Link href="/candidate" className="transition hover:text-[#1a73e8]">
              Apply as Candidate
            </Link>
            <Link href="/register" className="transition hover:text-[#1a73e8]">
              Register Candidate
            </Link>
            <Link href="/contact" className="transition hover:text-[#1a73e8]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/contact",
  primaryLabel = "Start a conversation",
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[0.96fr_1.04fr] lg:py-16">
        <div>
          <p className="text-sm font-medium text-[#5f6368]">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl leading-tight">
            <ColorTitle text={title} className="text-4xl font-semibold tracking-normal sm:text-6xl" />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[1.32] overflow-hidden rounded-[28px] bg-[#f1f3f4]">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-medium text-[#5f6368]">{eyebrow}</p>
      <h2 className="mt-4 leading-tight">
        <ColorTitle text={title} className="text-3xl font-semibold tracking-normal sm:text-5xl" />
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-[#5f6368]">{description}</p> : null}
    </div>
  );
}

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-[24px] border border-[#e8eaed] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(60,64,67,0.12)]">
      <h3 className="text-xl font-semibold text-[#202124]">{title}</h3>
      <p className="mt-3 leading-7 text-[#5f6368]">{description}</p>
    </article>
  );
}

export function CTA() {
  return (
    <section className="border-y border-[#e8eaed] bg-[#f8fafd] px-5 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-[#5f6368]">Work with Internix</p>
          <h2 className="mt-3 max-w-3xl leading-tight">
            <ColorTitle text="Connect talent with opportunity" className="text-3xl font-semibold sm:text-4xl" />
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/client" className="btn-light">
            Hire talent
          </Link>
          <Link href="/candidate" className="btn-outline-light">
            Apply as candidate
          </Link>
        </div>
      </div>
    </section>
  );
}
