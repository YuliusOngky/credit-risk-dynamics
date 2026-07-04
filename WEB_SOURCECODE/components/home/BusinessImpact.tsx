"use client";

import {
  Building2,
  ShieldCheck,
  FileStack,
  Clock3,
} from "lucide-react";

const impacts = [
  {
    icon: Building2,
    title: "Govern Every Decision",
    desc: "Every underwriting decision follows a structured governance framework instead of individual interpretation.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Consistency",
    desc: "Policies remain consistent across analysts, branches, and business units without depending on individual experience.",
  },
  {
    icon: FileStack,
    title: "Decision Memory",
    desc: "Every decision becomes searchable institutional knowledge complete with evidence, rationale, and supporting records.",
  },
  {
    icon: Clock3,
    title: "Operational Efficiency",
    desc: "Reduce repetitive review work while increasing transparency and accelerating turnaround time.",
  },
];

export default function BusinessImpact() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[72px] py-[130px]">
        <p className="uppercase tracking-[.38em] text-[13px] text-[#C79A36]">
          BUSINESS IMPACT
        </p>
        <h2
          className="mt-8 text-[#09131F]"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "56px",
            lineHeight: 1.2,
            fontWeight: 400,
          }}
        >
          Ready to strengthen
          <br />
          every credit decision?
        </h2>
        <div className="mt-24 grid grid-cols-4 gap-16">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#D8A63D]">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#D8A63D]"
                  />
                </div>
                <h3 className="text-[24px] font-medium text-[#09131F]">
                  {item.title}
                </h3>
                <p className="mt-6 leading-8 text-[16px] text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
