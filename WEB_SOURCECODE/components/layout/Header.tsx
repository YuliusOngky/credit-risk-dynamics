"use client";
import Link from "next/link";
const menus = [
  "Platform",
  "Governance",
  "Decision Records",
  "Resources",
  "Company",
];
export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[82px] max-w-[1480px] items-center justify-between px-9">
        <Link href="/" className="flex items-center">
          <div className="mr-10 flex items-center">
            <div className="mr-10 h-[34px] w-[4px] bg-[#D5A33B]" />
            <div>
              <div className="text-[14px] font-semibold tracking-[0.18em] uppercase leading-none">
                CREDIT RISK
              </div>
              <div className="mt-[5px] text-[14px] font-semibold tracking-[0.18em] uppercase leading-none">
                DYNAMICS
              </div>
            </div>
          </div>
        </Link>
        <nav className="flex gap-11">
          {menus.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[11px] uppercase tracking-[0.18em] text-white/82 hover:text-[#D7A437]"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex gap-10">
          <button className="h-[42px] border border-white/25 px-6 text-[11px] uppercase tracking-[0.18em] text-white hover:border-[#D7A437]">
            LIVE DEMO
          </button>
          <button className="h-[42px] bg-[#D7A437] px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#08111C] hover:bg-[#E2B34A]">
            REQUEST BRIEFING
          </button>
        </div>
      </div>
    </header>
  );
}
