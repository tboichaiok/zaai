"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/zaai.kz?stkn=MWV2cGxpZDZ5eXdjZq==",
    note: "@zaai.kz",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/77781010372",
    note: "+7 778 101 0372",
  },
  {
    label: "Telegram",
    href: "https://t.me/kizyko",
    note: "@kizyko",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const type = String(form.get("type") || "лендинг");
    const message = String(form.get("message") || "").trim();
    const text = encodeURIComponent(`Здравствуйте! Меня зовут ${name || "гость"}. Хочу обсудить ${type}.\n\n${message || "Опишите задачу, и я задам уточняющие вопросы."}`);
    window.open(`https://wa.me/77781010372?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 3500);
  }

  return (
    <section className="relative overflow-hidden bg-[#FAF9F7] px-5 py-28 text-[#1F1F1F] sm:px-8 md:py-40 lg:px-12" id="contacts">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[#c4a67a]/10 blur-[110px]" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#c4a67a]/12 blur-[70px]" />
      </div>
      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#c4a67a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4a67a]" />
            начать проект
          </div>
          <h2 className="font-cormorant text-5xl font-semibold leading-[0.98] text-[#1F1F1F] sm:text-6xl lg:text-[5.75rem]">
            Давайте сделаем
            <br />
            <span className="italic text-[#c4a67a]">ваш сайт.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#8A877E]">
            Напишите, что нужно создать. Я отвечу, уточню задачу и предложу первый вариант решения.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[110px] flex-col justify-between border border-white/12 bg-white/[0.04] p-5 transition-colors hover:border-[#c4a67a]/60 hover:bg-white/[0.08]"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-[#8A877E]">{link.label}</span>
                <span className="text-sm leading-5 text-[#1F1F1F]">{link.note}</span>
                <span className="text-[#c4a67a] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-black/10 bg-white/[0.04] p-[0.85rem]">
              <div className="rounded-[calc(2rem-0.85rem)] bg-white/[0.04] p-7 sm:p-9">
              <form onSubmit={submitForm} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#8A877E]">
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Как к вам обращаться?"
                    className="w-full rounded-full border border-black/30 bg-white/[0.04] px-5 py-2.5 text-sm text-[#1F1F1F] placeholder:text-[#77746e] outline-none transition-colors focus:border-[#c4a67a]/70 focus:bg-white/[0.08]"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#8A877E]">
                    Что нужно?
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue="лендинг"
                    className="w-full appearance-none rounded-full border border-black/30 bg-white/[0.04] px-5 py-2.5 text-sm text-[#1F1F1F] outline-none transition-colors focus:border-[#c4a67a]/70 focus:bg-white/[0.08]"
                  >
                    <option value="лендинг">лендинг</option>
                    <option value="интернет-магазин">интернет-магазин</option>
                    <option value="сайт-визитку">сайт-визитку</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#8A877E]">
                    Коротко о задаче
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Проект, сроки, примеры, которые нравятся…"
                    className="w-full resize-none rounded-full border border-white/5 bg-transparent px-5 py-2.5 text-sm text-[#1F1F1F] outline-none transition-colors focus:border-[#c4a67a]/70 focus:bg-white/[0.08]"
                  />
                </div>
                <button
                  type="submit"
                  className="magnetic flex w-full items-center justify-between rounded-full bg-[#c4a67a] px-6 py-4 text-sm font-medium text-[#1f1f1f] transition-transform active:scale-[0.98]"
                >
                  <span>Отправить в WhatsApp</span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1f1f1f]/10 text-base">↗</span>
                </button>
                <p aria-live="polite" className="text-xs leading-5 text-[#8A877E]">
                  {sent ? "Сообщение откроется в WhatsApp." : "Форма передаст данные в WhatsApp."}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
