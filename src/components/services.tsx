"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";

const services = [
  {
    title: "Landing page",
    text: "Продающая страница для продукта, услуги или события. Чёткая структура, сильный первый экран и понятный следующий шаг.",
    details: [
      "Проработка структуры под конкретную цель (лиды, продажи, запись на консультацию)",
      "Адаптивная вёрстка: мобильный → десктоп без потерь качества",
      "Интеграция форм, CRM, аналитики (GA4, Яндекс.Метрика, пиксели)",
      "Скорость загрузки: оптимизация изображений, ленивая загрузка, кэширование",
      "SEO-база: семантическая разметка, meta-теги, sitemap, robots.txt",
    ],
    icon: "↗",
  },
  {
    title: "Интернет-магазин",
    text: "Удобный каталог и путь к покупке, в котором клиент не теряет интерес и быстро понимает, что выбрать.",
    details: [
      "Каталог с фильтрами, поиском, категориями и вариациями товаров",
      "Корзина и оформление заказа за 2–3 шага (гостевой / авторизованный)",
      "Интеграция платежей: ЮKassa, Т-Банк, Stripe, крипта по запросу",
      "Синхронизация с 1С / МойСклад / Excel для остатков и заказов",
      "Личный кабинет: история заказов, отслеживание, избранное, бонусы",
    ],
    icon: "□",
  },
  {
    title: "Сайт-визитка",
    text: "Короткий сайт для специалиста, проекта или идеи. Всё важное — на виду, без лишнего шума.",
    details: [
      "Лаконичная структура: о себе / услуги / кейсы / контакты",
      "Блог / статьи / кейсы с удобным редактором (Markdown / блоки)",
      "Форма заявки с уведомлениями в Telegram / Email / CRM",
      "Мультиязычность (ru / en / kz) с переключением без перезагрузки",
      "Простая админка для правок текстов и фото без кода",
    ],
    icon: "◇",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={index * 100}>
      <article className="card-shell h-full bg-[#F4EFE7] p-[0.75rem] shadow-[inset_0_1px_1px_rgba(0,0,0,0.06)]">
        <div className="card-inner relative flex min-h-[310px] flex-col p-8">
          <div className="flex items-start justify-between">
            <span className="font-cormorant text-5xl text-[#C4A67A]">{service.icon}</span>
            <span className="rounded-full border border-[#E8E0D4] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#8A877E]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-auto font-cormorant text-3xl font-semibold text-[#1F1F1F]">{service.title}</h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#8A877E]">{service.text}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#8A877E] hover:text-[#C4A67A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] rounded"
            aria-expanded={expanded}
            aria-controls={`service-details-${index}`}
          >
            <span className="h-px w-8 bg-[#C4A67A]" />
            <span>{expanded ? "Свернуть" : "Подробнее"}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>

          <motion.div
            id={`service-details-${index}`}
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0, marginTop: expanded ? 16 : 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
            role="region"
            aria-label={`Детали услуги ${service.title}`}
          >
            <ul className="space-y-3 text-sm leading-6 text-[#8A877E]">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-[#C4A67A]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section className="bg-[#FAF9F7] px-5 py-28 sm:px-8 md:py-40 lg:px-12" id="services">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C4A67A]/30 bg-[#C4A67A]/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8A6A3F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4a67a]" />
              чем занимаемся
            </div>
            <h2 className="font-cormorant text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-[#1F1F1F] sm:text-6xl lg:text-[5.75rem]">
              Что умеем создавать
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#8A877E]">
            Подбираем формат под задачу. Не начинаем с красивых эффектов — начинаем с того, что должен
            понять и сделать клиент.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
