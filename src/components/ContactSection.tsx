"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

const socialLinks = [
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://linkedin.com/in/justin-restrepo",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    detail: "Explore the code",
    href: "https://github.com/ResJustin1F",
    icon: "github",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
      <div>
        <div className="mb-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2952E3]">
            Start a conversation
          </p>
          <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#14181F] md:text-3xl">
            Have a question, idea, or opportunity? Send me a note.
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B6270] md:text-base md:leading-7">
            Your message will go directly to my inbox. I’ll get back to you as soon as I can.
          </p>
        </div>

        {status === "sent" ? (
          <div
            role="status"
            className="border-l-2 border-[#2952E3] bg-white/30 px-6 py-7"
          >
            <p className="text-xl font-semibold tracking-[-0.025em] text-[#14181F]">
              Message sent.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5B6270]">
              Thanks for reaching out. Your note is on its way to my inbox.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 text-sm font-medium text-[#2952E3] underline decoration-[#2952E3]/30 underline-offset-4 hover:decoration-[#2952E3]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            name="portfolio-contact"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-5"
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Do not fill this out
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Your name" name="name" type="text" autoComplete="name" />
              <FormField label="Your email" name="email" type="email" autoComplete="email" />
            </div>

            <label className="group block">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#5B6270]">
                Your message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What would you like to talk about?"
                className="w-full resize-y rounded-2xl border border-black/10 bg-white/35 px-5 py-4 text-base leading-7 text-[#14181F] outline-none transition-all placeholder:text-[#5B6270]/55 focus:border-[#2952E3]/45 focus:bg-white/60 focus:ring-4 focus:ring-[#2952E3]/[0.06]"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex min-w-40 items-center justify-center gap-3 rounded-full bg-[#2952E3] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(41,82,227,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#2146c9] hover:shadow-[0_16px_36px_rgba(41,82,227,0.28)] disabled:cursor-wait disabled:opacity-65"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <SendIcon />}
              </button>

              <p aria-live="polite" className="text-sm text-[#5B6270]">
                {status === "error" && (
                  <>
                    Something went wrong. Try emailing me at{" "}
                    <a
                      href="mailto:codewithjustinr@gmail.com"
                      className="font-medium text-[#2952E3] underline underline-offset-4"
                    >
                      codewithjustinr@gmail.com
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </form>
        )}
      </div>

      <aside className="md:border-l md:border-black/10 md:pl-10">
        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#5B6270]">
          Find me elsewhere
        </p>

        <div className="border-y border-black/15">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 py-5 transition-colors hover:text-[#2952E3] ${
                index > 0 ? "border-t border-black/10" : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white/30 transition-all group-hover:border-[#2952E3]/30 group-hover:bg-white/70">
                <SocialIcon name={link.icon} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-[#14181F] transition-colors group-hover:text-[#2952E3]">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-xs text-[#5B6270]">{link.detail}</span>
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>

        <a
          href="mailto:codewithjustinr@gmail.com"
          className="group mt-7 block"
        >
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#5B6270]">
            Prefer email?
          </span>
          <span className="mt-2 block break-all text-sm font-medium text-[#14181F] underline decoration-black/15 underline-offset-4 transition-colors group-hover:text-[#2952E3] group-hover:decoration-[#2952E3]">
            codewithjustinr@gmail.com
          </span>
        </a>
      </aside>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#5B6270]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-black/10 bg-white/35 px-5 py-3.5 text-base text-[#14181F] outline-none transition-all focus:border-[#2952E3]/45 focus:bg-white/60 focus:ring-4 focus:ring-[#2952E3]/[0.06]"
      />
    </label>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
      <path d="m4 12 15-7-4 14-3.5-5.5L4 12Zm7.5 1.5L19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#5B6270] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2952E3]">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M6.5 8.3H3.3V19h3.2V8.3ZM4.9 3a1.9 1.9 0 1 0 0 3.8A1.9 1.9 0 0 0 4.9 3Zm14.8 9.9c0-3.2-1.7-4.9-4.1-4.9-1.9 0-2.8 1-3.2 1.8V8.3H9.2V19h3.2v-5.3c0-1.4.3-2.8 2.1-2.8 1.8 0 1.8 1.7 1.8 2.9V19h3.2l.2-6.1Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.6 8.5c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1A9.5 9.5 0 0 1 12 6.5a9.5 9.5 0 0 1 2.5.3c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" clipRule="evenodd" />
    </svg>
  );
}
