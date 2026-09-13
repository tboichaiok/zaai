"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "Обо мне" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#services", label: "Услуги" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill */}
      <header
        className={`fixed left-1/2 top-6 z-50 w-[95%] max-w-5xl -translate-x-1/2 border border-black/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "bg-white/85 shadow-lg shadow-black/10" : "bg-white/60"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-3">
          <Link href="#hero" className="font-manrope text-sm tracking-wider font-medium">
            ZAAI
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 font-manrope text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/77781010372"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-95"
              >
                Написать
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-xs">→</span>
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-8 w-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <ul className="mt-28 flex flex-col items-center gap-8 font-cormorant text-4xl">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}