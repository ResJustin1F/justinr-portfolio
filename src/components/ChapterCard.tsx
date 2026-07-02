"use client";

import { CSSProperties, PointerEvent, useRef } from "react";

type ChapterStyle = CSSProperties & {
  "--spot-x": string;
  "--spot-y": string;
};

export default function ChapterCard() {
  const cardRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 2.2;
    const rotateX = ((y / rect.height) - 0.5) * -2.2;

    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  }

  function resetCard() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  const style: ChapterStyle = {
    "--spot-x": "50%",
    "--spot-y": "50%",
    marginTop: 0,
    width: "100%",
    maxWidth: "none",
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      style={style}
      className="chapter-card relative mt-4 w-full overflow-hidden rounded-[1.35rem] border border-black/[0.07] bg-white/35 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-[#2952E3]/20 hover:shadow-[0_18px_45px_rgba(20,24,31,0.09)] md:mt-5"
    >
      <div className="relative z-10">
        <div className="flex items-center" style={{ gap: "0.65rem" }}>
          <span className="chapter-live-dot h-2 w-2 rounded-full bg-[#2952E3]" />
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2952E3] md:text-xs">
            Right now
          </p>
        </div>

        <h3
          className="text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#14181F] md:text-3xl"
          style={{ marginTop: "0.85rem", maxWidth: "42rem" }}
        >
          Securing cloud infrastructure in financial services<span className="text-[#2952E3]">.</span>
        </h3>

        <div
          className="chapter-insights grid"
          style={{ gap: "0.8rem", marginTop: "1.1rem", padding: "1.05rem 0", borderTop: "1px solid rgba(20, 24, 31, 0.1)" }}
        >
          <ChapterInsight
            icon={<GrowthIcon />}
            title="Hardening enterprise security at scale."
            detail="Defending infrastructure and managing vulnerabilities inside a financial institution."
          />
          <ChapterInsight
            icon={<ShieldIcon />}
            title="Focused on cloud, identity, and risk."
            detail="Implementing security controls that protect critical systems and users."
          />
          <ChapterInsight
            icon={<PeopleIcon />}
            title="Scaling through complex engineering challenges."
            detail="Collaborating with senior engineers and mentors to deliver real-world production impact."
          />
        </div>

        <p
          className="text-sm font-medium leading-6 text-[#28303C] md:text-base"
          style={{ paddingTop: "1.05rem", borderTop: "1px solid rgba(20, 24, 31, 0.1)" }}
        >
          Building secure systems where <span className="font-semibold text-[#2952E3]">trust</span> isn’t optional.
        </p>
      </div>
    </article>
  );
}

function ChapterInsight({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="grid items-start" style={{ gridTemplateColumns: "3.1rem minmax(0, 1fr)", gap: "0.9rem" }}>
      <span className="grid h-11 w-11 place-items-center text-[#2952E3]">{icon}</span>
      <div>
        <p className="text-sm font-semibold leading-5 text-[#14181F] md:text-base">{title}</p>
        <p className="mt-0.5 text-sm leading-5 text-[#5B6270]">{detail}</p>
      </div>
    </div>
  );
}

function GrowthIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <path d="M7 32V23h6v9H7Zm10 0V17h6v15h-6Zm10 0V11h6v21h-6ZM8 17l8-7 6 4 10-9M25 5h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <path d="M20 4 32 9v9c0 8-5 14-12 18C13 32 8 26 8 18V9l12-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 14v12M15 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" className="h-10 w-10">
      <circle cx="15" cy="13" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="27" cy="15" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M5 33v-4c0-5 4-8 10-8s10 3 10 8v4H5Zm20-9c5 0 9 3 9 7v2h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
