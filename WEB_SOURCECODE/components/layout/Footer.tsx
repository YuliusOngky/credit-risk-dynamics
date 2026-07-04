"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06111B] border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-[72px] py-20">
        <div className="grid grid-cols-6 gap-12">
          <div className="col-span-2">
            <h2 className="text-[28px] font-semibold tracking-wider">
              CREDIT RISK
            </h2>
            <p className="tracking-[.35em] text-white/55 text-xs mt-2">
              DYNAMICS
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-[#D8A63D]">Platform</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="#">Overview</Link>
              </li>
              <li>
                <Link href="#">Capabilities</Link>
              </li>
              <li>
                <Link href="#">Architecture</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[#D8A63D]">Governance</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="#">Policy</Link>
              </li>
              <li>
                <Link href="#">Replay</Link>
              </li>
              <li>
                <Link href="#">Audit</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[#D8A63D]">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-10 text-sm text-white/45">
          <span>© 2026 Credit Risk Dynamics</span>
          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
