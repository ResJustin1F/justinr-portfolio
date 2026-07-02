"use client";

import { useEffect, useState } from "react";

export default function AccordionItem({
  title,
  highlighted = false,
  locked = false,
  children,
}: {
  title: string;
  highlighted?: boolean;
  locked?: boolean;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeSection = () => setOpen(false);

    window.addEventListener("portfolio:reset", closeSection);
    return () => window.removeEventListener("portfolio:reset", closeSection);
  }, []);

  return (
    <div className="accordion-row my-2">
      <button
        onClick={() => {
          if (!locked) setOpen(!open);
        }}
        aria-expanded={open}
        aria-disabled={locked}
        className={`group flex w-full items-center justify-between text-left ${
          open ? "pb-3 pt-10 md:pb-4 md:pt-12" : "py-10 md:py-12"
        } ${
          locked ? "cursor-default" : ""
        }`}
      >
        <span
          className={`text-2xl md:text-3xl font-semibold tracking-[-0.035em] leading-tight transition-opacity ${
            locked
              ? "text-[#14181F]/55"
              : `${highlighted ? "text-[#2952E3]" : "text-[#14181F]"} group-hover:opacity-70`
          }`}
        >
          {title}
        </span>
        {locked ? (
          <span className="ml-6 inline-flex shrink-0 items-center gap-3 text-[#5B6270]">
            <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.17em] sm:inline">
              Coming soon
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/25">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10M6 10h12v10H6V10Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="ml-6 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-transparent text-xl text-[#14181F]/65 transition-all duration-300 ease-out group-hover:border-black/10 group-hover:bg-white/55 group-hover:text-[#2952E3]"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        )}
      </button>
      {!locked && <div
        className="accordion-content grid"
        aria-hidden={!open}
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          transition: open
            ? "grid-template-rows 0.4s ease, opacity 0.3s ease, visibility 0s"
            : "grid-template-rows 0.4s ease, opacity 0.3s ease, visibility 0s 0.4s",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-12 pt-1">{children}</div>
        </div>
      </div>}
    </div>
  );
}
