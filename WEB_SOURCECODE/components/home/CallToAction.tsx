"use client";

import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-[#07111B]">
      <div className="mx-auto max-w-[1440px] px-[72px] py-[140px]">
        <div className="max-w-[760px]">
          <p className="uppercase tracking-[.35em] text-[13px] text-[#D8A63D]">
            START YOUR JOURNEY
          </p>
          <h2
            className="mt-8 text-white"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "64px",
              lineHeight: 1.15,
              fontWeight: 400,
            }}
          >
            Ready to strengthen
            <br />
            every decision?
          </h2>
          <p className="mt-10 max-w-[620px] text-[20px] leading-9 text-white/70">
            See how Credit Assessment Portal helps financial institutions
            establish governance, preserve institutional knowledge, and create
            explainable underwriting decisions.
          </p>
          <div className="mt-14 flex gap-6">
            <button className="h-[58px] bg-[#D8A63D] px-10 font-semibold text-[#07111B]">
              Request Briefing
            </button>
            <button className="flex h-[58px] items-center gap-3 border border-[#D8A63D] px-10 text-[#D8A63D]">
              Live Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
