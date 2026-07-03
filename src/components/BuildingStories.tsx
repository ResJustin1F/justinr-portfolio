"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type BuildingStory = {
  eyebrow: string;
  title: string;
  setting: string;
  story: string[];
  practiced: string[];
  tools: string[];
};

const stories: BuildingStory[] = [
  {
    eyebrow: "Cloud · AI · Security",
    title: "Adopting an attacker’s mindset",
    setting: "Ally Financial · Charlotte, NC",
    story: [
      "Working inside a bank changed the way I look at systems. Access is not just a login screen; it is a chain of decisions about who should reach what, from where, and under which conditions.",
      "As the company builds with cloud and AI, I analyze how those tools could be misused or fail and help identify and implement the safeguards that reduce that risk. My focus is to challenge assumptions early and defend environments with an engineer’s understanding of how the system was built.",
    ],
    practiced: ["Threat modeling", "Risk analysis", "Access control", "Cloud security"],
    tools: ["Cloud platforms", "Identity systems", "Security controls"],
  },
  {
    eyebrow: "AI · Backend · Collaboration",
    title: "Building NourishNote at a hackathon",
    setting: "Columbia University · Hackathon project",
    story: [
      "We wanted to make mindful eating feel reflective rather than clinical, so we built an AI assisted journaling experience during a Columbia University hackathon.",
      "I connected journal entries to a RAG chatbot that used Gemini and OpenAI to create personalized reflections. Building under a strict deadline required engineering a system where useful AI depends on robust context, clean data quality, thoughtful prompting, and swift team execution.",
    ],
    practiced: ["RAG workflows", "AI integration", "Rapid prototyping", "Team development"],
    tools: ["Next.js", "Supabase", "Gemini", "OpenAI"],
  },
  {
    eyebrow: "Product · Backend · Security",
    title: "Driving momentum for a major MindArch release",
    setting: "MindArch Health · New York",
    story: [
      "I joined while the health platform was still taking shape and helped move it toward a release that people could actually log into and rely on.",
      "I built the survey and results flows, connected AI-generated summaries, and engineered the authentication and permissions layer so each person only saw the private information meant for them. This project proved that a useful product and a secure product must always be designed together from the start.",
    ],
    practiced: ["Product development", "Access control", "API integration", "Data privacy"],
    tools: ["TypeScript", "React", "Node.js", "AWS Cognito"],
  },
];

export default function BuildingStories() {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeStory === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStory(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeStory]);

  const activeIndex = activeStory ?? 0;
  const selectedStory = activeStory === null ? null : stories[activeStory];

  function closeStoryAndReturn() {
    setActiveStory(null);
    window.setTimeout(() => {
      document.getElementById("bringing-it-to-life")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  function goToNextStory() {
    if (activeIndex === stories.length - 1) {
      closeStoryAndReturn();
      return;
    }

    setActiveStory(activeIndex + 1);
  }

  return (
    <>
      <div className="grid gap-4 md:gap-5">
        {stories.map((story, index) => (
          <article
            key={story.title}
            className="group overflow-hidden rounded-[1.25rem] border border-black/[0.09] bg-white/35 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-all duration-300 hover:-translate-y-1 hover:border-[#2952E3]/25 hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(20,24,31,0.09)]"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={() => setActiveStory(index)}
              className="grid min-h-[7.25rem] w-full grid-cols-[3.75rem_minmax(0,1fr)_3.5rem] gap-x-5 text-left md:grid-cols-[5rem_minmax(0,1fr)_5rem] md:gap-x-8"
            >
              <span className="relative grid place-items-center self-stretch overflow-hidden border-r border-[#2952E3]/15 bg-[#2952E3] text-white">
                <span className="absolute inset-x-0 top-0 h-px bg-white/40" />
                <span className="font-mono text-sm font-semibold tracking-[-0.04em] md:text-base">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-2 h-5 w-px bg-white/35 transition-all duration-300 group-hover:h-8" />
              </span>

              <span className="flex min-w-0 flex-col justify-center py-6 pr-5 md:py-7 md:pr-8">
                <span className="mb-2 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#5B6270] md:text-[0.68rem]">
                  {story.eyebrow}
                </span>
                <span className="block text-lg font-semibold leading-tight tracking-[-0.03em] text-[#14181F] transition-colors group-hover:text-[#2952E3] md:text-2xl">
                  {story.title}
                </span>
                <span className="mt-1.5 block text-sm text-[#5B6270] md:text-[0.95rem]">
                  {story.setting}
                </span>
              </span>

              <span className="grid place-items-center border-l border-black/[0.06]">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#5B6270] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#2952E3] group-hover:bg-[#2952E3] group-hover:text-white md:h-11 md:w-11">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedStory &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:items-center md:p-8">
            <button
              type="button"
              aria-label="Close story"
              onClick={() => setActiveStory(null)}
              className="absolute inset-0 cursor-default bg-[#14181F]/45 backdrop-blur-sm"
            />

            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="building-story-title"
              className="story-modal relative z-10 flex max-h-[calc(100dvh-1rem)] w-full max-w-4xl flex-col overflow-hidden rounded-t-[2rem] border border-white/60 bg-[#F4F1EA] shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:max-h-[calc(100vh-4rem)] md:rounded-[2rem]"
            >
              <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#2952E3] via-[#7891ef] to-transparent" />

              <header
                className="story-modal-header relative flex items-start justify-between overflow-hidden border-b border-black/[0.09]"
                style={{ gap: "1.25rem", padding: "1rem clamp(1.5rem, 4vw, 2.5rem) 0.9rem" }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-10 font-mono text-[9rem] font-semibold leading-none tracking-[-0.1em] text-[#2952E3]/[0.055] md:right-20 md:text-[12rem]"
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="story-modal-heading relative" style={{ maxWidth: "none", paddingRight: "2rem" }}>
                  <p
                    className="story-modal-eyebrow flex items-center font-semibold uppercase tracking-[0.18em] text-[#2952E3]"
                    style={{ gap: "0.7rem", marginBottom: "0.7rem", fontSize: "0.72rem", lineHeight: 1.4 }}
                  >
                    <span className="h-px w-8 bg-[#2952E3]" />
                    {selectedStory.eyebrow}
                  </p>
                  <h3
                    id="building-story-title"
                    className="text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#14181F] md:text-4xl"
                  >
                    {selectedStory.title}
                  </h3>
                  <p
                    className="story-modal-setting text-[#5B6270]"
                    style={{ marginTop: "0.65rem", fontSize: "0.92rem", lineHeight: 1.4 }}
                  >
                    {selectedStory.setting}
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close story"
                  onClick={() => setActiveStory(null)}
                  className="relative z-20 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#2952E3]/30 bg-[#F4F1EA]/90 text-xl text-[#14181F] shadow-[0_8px_22px_rgba(20,24,31,0.08)] backdrop-blur transition-all hover:rotate-90 hover:border-[#2952E3]/30 hover:bg-white hover:text-[#2952E3] focus:outline-none focus:ring-2 focus:ring-[#2952E3]/40 md:h-11 md:w-11 md:border-black/10 md:shadow-none"
                >
                  ×
                </button>
              </header>

              <div
                className="story-modal-body flex-1 overflow-y-auto overscroll-contain"
                style={{ padding: "0.9rem clamp(1.5rem, 4vw, 2.5rem) 1.05rem" }}
              >
                <div className="story-modal-copy" style={{ display: "grid", gap: "0.9rem" }}>
                  {selectedStory.story.map((paragraph, index) => (
                    <div
                      key={paragraph}
                      className="story-modal-story"
                      style={{ display: "grid", gridTemplateColumns: "9rem minmax(0, 1fr)", gap: "1.5rem" }}
                    >
                      <p
                        className="story-modal-label font-semibold uppercase tracking-[0.17em] text-[#2952E3]"
                        style={{ paddingTop: "0.2rem", fontSize: "0.7rem", lineHeight: 1.45 }}
                      >
                        {index === 0 ? "The moment" : "What I built and executed"}
                      </p>
                      <p
                        className={`story-modal-paragraph max-w-2xl text-[#4D5563] ${
                          index === 0
                            ? "text-base font-medium leading-7 tracking-[-0.015em] text-[#28303C] md:text-lg md:leading-8"
                            : "story-modal-learned border-l-2 border-[#2952E3]/20 text-base leading-7 md:leading-8"
                        }`}
                        style={index === 1 ? { paddingLeft: "1.1rem" } : undefined}
                      >
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="story-modal-details grid md:grid-cols-2"
                  style={{ gap: "0.8rem", marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(20, 24, 31, 0.1)" }}
                >
                  <StoryDetails number="01" label="What I practiced" items={selectedStory.practiced} />
                  <StoryDetails number="02" label="Built with" items={selectedStory.tools} />
                </div>
              </div>

              <footer
                className="story-modal-footer flex items-center justify-between border-t border-black/[0.09] bg-white/25"
                style={{ padding: "0.65rem clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                <button
                  type="button"
                  onClick={() => setActiveStory((activeIndex - 1 + stories.length) % stories.length)}
                  className="story-modal-nav font-medium text-[#5B6270] transition-colors hover:text-[#2952E3]"
                  style={{ minWidth: "6.75rem", fontSize: "1rem", lineHeight: 1.4, textAlign: "left" }}
                >
                  ← Previous
                </button>
                <span
                  className="story-modal-count font-mono text-[#5B6270]"
                  style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.08em" }}
                >
                  {String(activeIndex + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={goToNextStory}
                  className="story-modal-nav font-medium text-[#5B6270] transition-colors hover:text-[#2952E3]"
                  style={{ minWidth: "6.75rem", fontSize: "1rem", lineHeight: 1.4, textAlign: "right" }}
                >
                  Next →
                </button>
              </footer>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}

function StoryDetails({
  number,
  label,
  items,
}: {
  number: string;
  label: string;
  items: string[];
}) {
  return (
    <div
      className="story-modal-detail-card rounded-2xl border border-black/[0.07] bg-white/45"
      style={{ padding: "1rem" }}
    >
      <div className="story-modal-detail-heading flex items-center justify-between" style={{ marginBottom: "0.7rem" }}>
        <p
          className="story-modal-detail-label font-semibold uppercase tracking-[0.16em] text-[#5B6270]"
          style={{ fontSize: "0.7rem", lineHeight: 1.4 }}
        >
          {label}
        </p>
        <span
          className="story-modal-detail-number font-mono text-[#2952E3]"
          style={{ fontSize: "0.7rem", lineHeight: 1.4 }}
        >
          {number}
        </span>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="story-modal-detail-item flex items-start gap-2 text-[#14181F]"
            style={{ fontSize: "0.88rem", lineHeight: 1.4 }}
          >
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#2952E3]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
