import { Reveal } from "./reveal";

export function About() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F7] px-5 py-28 sm:px-8 md:py-40 lg:px-12" id="about">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C4A67A]/30 bg-[#C4A67A]/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8A6A3F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4a67a]" />
            польза и подход
          </div>
          <h2 className="font-cormorant text-5xl font-semibold leading-[0.92] tracking-[-0.02em] text-[#1F1F1F] sm:text-6xl lg:text-[5.75rem]">
            Сайт как инструмент для вашей задачи.
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-[#8A877E]">
            Помогаю превратить идею или продукт в понятный сайт: показать ценность, ответить на
            вопросы клиента и привести его к целевому действию — заявке, покупке или звонку.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#8A877E]">
            Работаем с лендингами, интернет-магазинами и сайтами-визитками. Начинаю с задачи и логики,
            затем собираю структуру, дизайн и адаптивную разработку — результат удобно использовать
            на любом устройстве.
          </p>
        </Reveal>

        <Reveal className="relative" delay={120}>
          <div className="card-shell bg-[#F4EFE7] p-[0.9rem] shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)]">
            <div className="card-inner relative overflow-hidden bg-[#FFFFFF]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(196,166,122,0.10),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(196,166,122,0.04),transparent_42%)]" />
              <div className="relative flex h-full min-h-[410px] flex-col justify-between p-8 sm:p-10">
                <div className="flex items-center justify-between text-[#C4A67A]">
                  <span className="text-xs tracking-[0.22em] uppercase">ZAAI / 2026</span>
                  <span className="h-2 w-2 rounded-full bg-[#C4A67A]" />
                </div>
                <div>
                  <p className="font-cormorant text-5xl leading-none text-[#1F1F1F]">
                    Идея →
                    <br />
                    <span className="italic text-[#C4A67A]">решение</span>
                  </p>
                  <p className="mt-6 max-w-xs text-sm leading-6 text-[#8A877E]">
                    Работаем внимательно: сначала понимаю задачу, потом выбираем форму, которая делает её ясной.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#E8E0D4] pt-5 text-xs uppercase tracking-[0.18em] text-[#8A877E]">
                  <span>web development</span>
                  <span>front / back</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
