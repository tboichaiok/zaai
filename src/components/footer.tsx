import Link from "next/link";

const links = [
  { label: "Instagram", href: "https://www.instagram.com/zaai.kz?stkn=MWV2cGxpZDZ5eXdjZq==" },
  { label: "WhatsApp", href: "https://wa.me/77781010372" },
  { label: "Telegram", href: "https://t.me/kizyko" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#FAF9F7] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <Link href="#hero" className="font-cormorant text-2xl font-semibold text-[#1F1F1F]">
          ZAAI
        </Link>
        <nav aria-label="Социальные ссылки" className="flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.16em] text-[#8A877E]">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#c4a67a]">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-[#8A877E]">© {new Date().getFullYear()} ZAAI</p>
      </div>
    </footer>
  );
}
