"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./reveal";

type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
  span: string;
};

const projects: Project[] = [
  {
    title: "Лендинг",
    category: "лендинг / сообщество",
    image: "/1.jpg",
    alt: "Тёмный лендинг игрового комьюнити",
    span: "lg:col-span-7",
  },
  {
    title: "Игровое комьюнити",
    category: "лендинг студии",
    image: "/2.jpg",
    alt: "Светлый лендинг веб-студии",
    span: "lg:col-span-5",
  },
  {
    title: "Кафе и еда",
    category: "страница продукта",
    image: "/3.jpg",
    alt: "Страница fashion-продукта",
    span: "lg:col-span-5",
  },
  {
    title: "О проекте",
    category: "раздел о компании",
    image: "/4.jpg",
    alt: "Раздел о компании и дизайне",
    span: "lg:col-span-7",
  },
  {
    title: "Fashion campaign",
    category: "кампания",
    image: "/5.jpeg",
    alt: "Модная рекламная кампания",
    span: "lg:col-span-7",
  },
  {
    title: "Магазин Одежды",
    category: "лендинг кафе",
    image: "/6.jpeg",
    alt: "Лендинг кафе и еды",
    span: "lg:col-span-5",
  },
];

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-8" role="dialog" aria-modal="true" aria-label={`Просмотр: ${project.title}`}>
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="relative w-full max-w-5xl overflow-hidden rounded-t-[1.5rem] bg-white sm:rounded-[2rem]"
      >
        <div className="grid md:grid-cols-[1.25fr_0.75fr]">
          <div className="relative h-[300px] bg-[#E8E0D4] md:h-[650px]">
            <Image src={project.image} alt={project.alt} fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4A67A]">{project.category}</p>
              <h3 className="mt-4 font-cormorant text-4xl font-semibold leading-tight text-[#1F1F1F]">{project.title}</h3>
              <p className="mt-5 max-w-xs text-sm leading-6 text-[#8A877E]">
                Пример направления. Детали проекта обсуждаются отдельно под вашу задачу.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-8 w-full rounded-full border border-black/15 px-6 py-3 text-sm text-[#1F1F1F] transition-colors hover:bg-black/5 hover:text-black"
            >
              Закрыть
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Закрыть просмотр"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/10 text-[#1F1F1F] transition-transform hover:scale-105"
        >
          ×
        </button>
      </motion.div>
    </div>,
    document.body
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="bg-[#FAF9F7] px-5 py-28 sm:px-8 md:py-40 lg:px-12" id="portfolio">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C4A67A]/30 bg-[#C4A67A]/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#C4A67A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4a67a]" />
              избранные направления
            </div>
            <h2 className="font-cormorant text-5xl font-semibold leading-[0.92] tracking-[-0.02em] text-[#1F1F1F] sm:text-6xl lg:text-[5.75rem]">
              Работы, которые говорят за стиль
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#8A877E]">
            Смотреть можно как галерею: откройте любой пример, чтобы увидеть композицию крупнее.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 60} className={project.span}>
              <button
                onClick={() => setSelected(project)}
                className="card-shell group relative block h-full overflow-hidden text-left"
                aria-label={`Открыть ${project.title}`}
              >
                <div className="card-inner relative overflow-hidden bg-[#F4EFE7]">
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#f0e6d7]">{project.category}</p>
                        <h3 className="mt-2 font-cormorant text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-xl text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>{selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
