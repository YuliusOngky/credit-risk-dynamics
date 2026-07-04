"use client";

import {
  FileSearch,
  Scale,
  GitBranch,
  Clock3,
  Eye,
  ShieldCheck,
} from "lucide-react";

const problems = [
  {
    icon: FileSearch,
    title: "Manual Review",
    text: "Analysts spend valuable time gathering evidence across multiple systems, spreadsheets, and documents.",
  },
  {
    icon: Scale,
    title: "Analyst-Dependent",
    text: "Different reviewers often reach different conclusions using the same applicant information.",
  },
  {
    icon: GitBranch,
    title: "Inconsistent Decisions",
    text: "Credit policies are interpreted differently across branches, teams, and business units.",
  },
  {
    icon: Clock3,
    title: "Long Turnaround",
    text: "Repeated document verification and fragmented workflows increase approval time.",
  },
  {
    icon: Eye,
    title: "Limited Transparency",
    text: "Institutions struggle to explain why a particular decision was approved or rejected months later.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Governance",
    text: "Without structured decision records, governance and regulatory compliance become difficult.",
  },
];

export default function CreditDecisionProblem() {
  return (
    <section className="bg-[#07111B] border-t border-white/5">
      <div className="mx-auto max-w-[1440px] px-[72px] py-[120px]">
        <p className="text-[13px] uppercase tracking-[0.38em] text-[#D5A33B]">
          THE CREDIT DECISION PROBLEM
        </p>
        <h2
          className="mt-8 max-w-[760px] text-white leading-[1.18]"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "54px",
            fontWeight: 400,
          }}
        >
          The problem is not your people.
          <br />
          It is the fragmented process.
        </h2>
        <div className="mt-20 grid grid-cols-6 border-t border-white/10">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`px-8 py-12 ${
                  index !== 5 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="mb-8">
                  <Icon
                    size={34}
                    strokeWidth={1.4}
                    className="text-[#D5A33B]"
                  />
                </div>
                <h3 className="text-[18px] font-medium leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-6 text-[15px] leading-8 text-white/65">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
