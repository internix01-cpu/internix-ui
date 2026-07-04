"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./content";

const wordColors = ["#1a73e8", "#202124", "#137333", "#fbbc04"];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <details className="group relative md:hidden" open={isOpen} onToggle={(event) => setIsOpen(event.currentTarget.open)}>
      <summary
        className="mobile-menu-summary flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#dadce0] bg-white transition hover:bg-[#f8fafd]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="grid gap-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-[#3c4043] transition group-open:translate-y-2 group-open:rotate-45" />
          <span className="block h-0.5 w-5 rounded-full bg-[#3c4043] transition group-open:opacity-0" />
          <span className="block h-0.5 w-5 rounded-full bg-[#3c4043] transition group-open:-translate-y-2 group-open:-rotate-45" />
        </span>
      </summary>

      <div className="absolute right-0 top-14 w-[min(88vw,340px)] overflow-hidden rounded-[24px] border border-[#e8eaed] bg-white p-3 shadow-[0_18px_48px_rgba(60,64,67,0.18)]">
        <nav className="grid gap-1 text-base font-medium text-[#3c4043]">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 transition hover:bg-[#f8fafd] hover:text-[#1a73e8]"
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: wordColors[index % wordColors.length] }}
              />
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary mt-3 w-full" onClick={closeMenu}>
          Contact us
        </Link>
        <Link href="/login" className="btn-secondary mt-2 w-full" onClick={closeMenu}>
          Login
        </Link>
        <Link href="/register" className="btn-secondary mt-2 w-full" onClick={closeMenu}>
          Register
        </Link>
      </div>
    </details>
  );
}
