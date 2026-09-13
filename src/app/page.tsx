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

      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-24 sm:py-28 md:px-12 lg:px-16 xl:px-24" id="hero">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-ambient a" />
          <div className="hero-ambient b" />
          <div className="hero-ambient c" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#C4A67A]/30 bg-[#C4A67A]/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A6A3F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C4A67A]" />
              ZAAI / веб-разработка
            </div>
            <h1 className="font-cormorant text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.03em] text-[#1F1F1F] sm:text-5xl lg:text-[7rem]">
              Сайты, которые хотят
              <span className="italic text-[#C4A67A]"> открыть.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#8A877E]">
              Проектирую и собираю лендинги, интернет-магазины и сайты-визитки — от первой идеи до
              готового сайта, который понятно рассказывает о проекте.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacts"
                className="magnetic inline-flex w-full min-h-[52px] items-center justify-between rounded-full bg-[#C4A67A] px-5 text-sm font-medium text-[#FAF9F7] transition-transform active:scale-[0.98]"
              >
                <span>Обсудить проект</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#C4A67A] text-base">↗</span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex w-full min-h-[52px] items-center justify-between rounded-full border border-[#1F1F1F]/15 px-5 text-sm font-medium text-[#1F1F1F] transition-colors hover:border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FAF9F7]"
              >
                <span>Смотреть работы</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#1F1F1F]/30 text-base">↗</span>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-[#8A877E]">
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> лендинги</span>
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> магазины</span>
              <span className="flex items-center gap-3"><span className="h-px w-8 bg-[#C4A67A]" /> сайты-визитки</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[#8A877E] sm:block">
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