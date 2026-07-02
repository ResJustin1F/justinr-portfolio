import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import AccordionItem from "@/components/AccordionItem";
import BuildingStories from "@/components/BuildingStories";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import ChapterCard from "@/components/ChapterCard";

const experiences = [
  {
    chapter: "Right now",
    headline: "Where security became real",
    role: "Cloud & AI Security Engineer",
    company: "Ally Financial",
    location: "Charlotte, NC",
    duration: "3 months",
    story:
      "Hardening enterprise infrastructure by building, configuring, and maintaining secure AWS policies to ensure strict posture management. I translate high-level compliance demands into actionable engineering by operationalizing custom detection policies using RQL in Prisma Cloud and XQL within Cortex.",
  },
  {
    chapter: "Before that",
    headline: "Where building met responsibility",
    role: "Software Development Engineer",
    company: "Mindarch Health",
    location: "New York",
    duration: "8 months",
    story:
      "Engineered a secure user onboarding and data collection system that safely connected patient endpoints with client environments. Focused heavily on data privacy by implementing strict role-based privileges and multi-tenant isolation to securely pipeline automated, AI-driven insights.",
  },
  {
    chapter: "Where it began",
    headline: "Where curiosity became direction",
    role: "IT Intern",
    company: "National Grid",
    location: "Melville, NY",
    duration: "3 months",
    story:
      "Gained firsthand visibility into risk and compliance by shadowing systems engineers managing gas distribution networks across Long Island. Witnessing the real-time execution of automated industrial control systems proved how high-consequence safety metrics dictate technology architecture.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-6 md:pt-8 pb-24 flex flex-col items-center">
      <NavigationBar />
      <div className="w-full max-w-4xl mx-auto">
        <AccordionItem title="Momentum" highlighted>
          <div className="grid items-center gap-10 rounded-[2rem] border border-black/[0.06] bg-white/45 p-8 md:grid-cols-[10rem_1fr] md:gap-14 md:p-10">
            <div className="relative h-40 w-32 shrink-0 -rotate-2 justify-self-center overflow-hidden rounded-[2rem] border-[5px] border-[#F5F1E8] bg-[#111827] shadow-[10px_12px_0_rgba(41,82,227,0.10),0_20px_50px_rgba(20,24,31,0.16)] transition-all duration-500 ease-out hover:-translate-y-1 hover:rotate-0 md:h-48 md:w-36">
              <Image
                src="/headshot.jpg"
                alt="Justin Restrepo"
                width={176}
                height={224}
                className="block h-full w-full object-cover"
                style={{ objectPosition: "58% 72%" }}
              />
            </div>

            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#2952E3] md:text-sm">
                <span className="h-px w-5 bg-[#2952E3]" aria-hidden="true" />
                WELCOME
              </p>
              <h3 className="mt-5 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#14181F] md:text-6xl">
                My pace is not
                <br />
                a slow one.
              </h3>
              <span className="my-5 block h-0.5 w-20 bg-[#2952E3]" />
              <p className="max-w-2xl text-lg leading-8 tracking-[-0.025em] text-[#5B6270] md:text-2xl md:leading-10">
                This is a live record of my engineering experiences and raw proof of fresh ideas.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="The chapter I’m in">
          <ChapterCard />
        </AccordionItem>

        <AccordionItem title="Experience">
          <div>
            <div className="mb-9 grid gap-3 md:grid-cols-[9rem_1fr] md:gap-8">
              <p className="pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2952E3]">
                The throughline
              </p>
              <p className="max-w-2xl text-lg leading-8 tracking-[-0.015em] text-[#28303C] md:text-xl md:leading-9">
                Each role changed the way I think about what it means to build responsibly.
              </p>
            </div>

            <div className="border-y border-black/15">
            {experiences.map((exp, i) => (
              <article
                key={exp.company}
                className={`group grid transition-colors duration-300 hover:bg-white/35 md:grid-cols-[9rem_1fr] ${
                  i < experiences.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <div className="flex items-center justify-between px-1 pb-0 pt-7 md:block md:px-0 md:py-9 md:pr-8">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#2952E3]">
                    {exp.chapter}
                  </p>
                  <p className="text-xs text-[#5B6270] md:mt-3">{exp.duration}</p>
                </div>

                <div className="pb-8 pt-5 md:border-l md:border-black/[0.08] md:px-9 md:py-9">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#5B6270]">
                    {exp.company} · {exp.location}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#14181F] md:text-2xl">
                    {exp.headline}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#2952E3]">{exp.role}</p>
                  <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-[#5B6270] md:text-base md:leading-8">
                    {exp.story}
                  </p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Projects">
          <ProjectShowcase />
        </AccordionItem>

        <AccordionItem title="Bringing it to life">
          <div className="mb-8 grid gap-3 border-l-2 border-[#2952E3] pl-5 md:mb-10 md:grid-cols-[10rem_1fr] md:gap-8 md:pl-7">
            <p className="pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2952E3]">
              Selected stories · 01—03
            </p>
            <div>
              <p className="text-xl font-semibold tracking-[-0.025em] text-[#14181F] md:text-2xl">
                Three moments that shaped how I build.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#5B6270] md:text-base md:leading-7">
                Open a chapter to see the decisions, lessons, and tools behind the work.
              </p>
            </div>
          </div>
          <BuildingStories />
        </AccordionItem>

        <AccordionItem title="Certifications" locked />

        <AccordionItem title="Recommendations" locked />

        <AccordionItem title="Contact">
          <ContactSection />
        </AccordionItem>
      </div>
    </main>
  );
}
