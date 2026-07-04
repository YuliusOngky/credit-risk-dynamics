"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[940px] overflow-hidden bg-[#07111B]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/home/hero-bg.jpg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06111B]/58" />
      {/* Left Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#07111B 0%,rgba(7,17,27,.95) 28%,rgba(7,17,27,.78) 48%,rgba(7,17,27,.22) 76%,rgba(7,17,27,0) 100%)",
        }}
      />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] px-[72px]">
        <div className="flex w-[620px] flex-col justify-center">
          <span className="mb-10 text-[13px] tracking-[0.42em] uppercase text-[#C99C3E]">
            GOVERNANCE-FIRST CREDIT PLATFORM
          </span>
          <h1
            className="font-serif leading-[1.04] text-white"
            style={{
              fontSize: "76px",
              fontWeight: 400,
            }}
          >
            Every institution
            <br />
            makes decisions.
            <br />
            <span className="text-[#D7A437]">Few remember how.</span>
          </h1>
          <p className="mt-12 w-[560px] text-[20px] leading-[38px] text-white/78">
            Credit Assessment Portal (CAP) enables financial institutions to
            standardize, govern, and preserve every underwriting decision
            without replacing existing credit processes.
          </p>
          <div className="mt-14 flex gap-5">
            <button className="group flex h-[58px] items-center gap-3 bg-[#D6A33A] px-9 text-[15px] font-semibold text-[#07111B] transition hover:brightness-110">
              Explore Platform
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
            <button className="flex h-[58px] items-center gap-3 border border-[#C99C3E] px-9 text-[#D6A33A] transition hover:bg-[#D6A33A] hover:text-[#07111B]">
              <Play size={15} fill="currentColor" />
              Watch Overview
            </button>
          </div>
          <div className="mt-24 flex items-center gap-5">
            <div className="h-[62px] w-px bg-[#C99C3E]" />
            <span className="text-[12px] tracking-[0.38em] uppercase text-white/60">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
