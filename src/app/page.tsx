import Link from "next/link";
import Navbar from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#FAF9F7] text-[#1F1F1F]">
      <Navbar />

      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-5 py-32 sm:px-8 md:px-12 lg:px-16 xl:px-24" id="hero">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-ambient a" />
          <div className="hero-ambient b" />
          <div className="hero-ambient c" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C4A67A]/30 bg-[#C4A67A]/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8A6A3F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C4A67A]" />
              ZAAI / веб-разработка
            </div>
            <h1 className="font-cormorant text-6xl font-semibold leading-[0.92] tracking-[-0.03em] text-[#1F1F1F] sm:text-7xl lg:text-[7rem]">
              Сайты, которые
              <br />
              хочется
              <span className="italic text-[#C4A67A]">открыть.</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-[#8A877E]">
              Проектирую и собираю лендинги, интернет-магазины и сайты-визитки — от первой идеи до
              готового сайта, который понятно рассказывает о проекте.
            </p>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contacts"
                className="magnetic inline-flex min-h-[54px] items-center justify-between rounded-full bg-[#C4A67A] px-7 text-sm font-medium text-[#FAF9F7] transition-transform active:scale-[0.98]"
              >
                <span>Обсудить проект</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#C4A67A] text-base">↗</span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex min-h-[54px] items-center justify-between rounded-full border border-[#1F1F1F]/15 px-7 text-sm font-medium text-[#1F1F1F] transition-colors hover:border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FAF9F7]"
              >
                <span>Смотреть работы</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#1F1F1F]/30 text-base">↗</span>
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-[#8A877E]">
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> лендинги</span>
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> магазины</span>
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> сайты-визитки</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8A877E]">
          <span className="block h-8 w-px bg-[#8A877E]/40" />
        </div>
      </section>

      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}