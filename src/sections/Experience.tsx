const experiences = [
  {
    role: "Cloud Security & AI Security Intern",
    company: "Ally Financial",
    location: "Charlotte, NC",
    period: "May 2026 - Present",
    current: true,
    points: [
      "Working on cloud infrastructure security and AI system security in a financial services environment",
      "Applying risk analysis, access control, and threat modeling practices in production systems",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "MindArch Health",
    location: "Remote",
    period: "June 2025 - Jan 2026",
    current: false,
    points: [
      "Released version 1.0.2 of a full-stack platform using Next.js, MongoDB, and AWS Cognito with secure role-based authentication",
      "Built 15+ scalable modules for surveys, analytics, and AI-driven reporting for Inspire Health Group",
      "Integrated Gemini API to generate personalized well-being summaries from survey data",
    ],
  },
  {
    role: "IT Support Intern",
    company: "National Grid",
    location: "Melville, NY",
    period: "July 2023 - Aug 2023",
    current: false,
    points: [
      "Conducted ticket tracking for infrastructure operations, improving SaaS usage monitoring",
      "Shadowed 10 engineers to observe cloud systems and access management practices",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#F2F1EC]">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="eyebrow mb-5">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] tracking-tight">
          Where I&apos;ve worked
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-black/10 hidden md:block"></div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative md:pl-10">
              <span
                className={`absolute left-0 top-3 w-3.5 h-3.5 rounded-full hidden md:block ${
                  exp.current ? "bg-[#2952E3]" : "bg-[#14181F]/20"
                }`}
              ></span>
              <div className="bg-white rounded-xl p-8 border border-black/5 shadow-[0_8px_30px_-12px_rgba(20,24,31,0.08)]">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-1">
                  <div>
                    <h3 className="text-xl font-semibold text-[#14181F]">{exp.role}</h3>
                    <p className="text-[#5B6270]">{exp.company} · {exp.location}</p>
                  </div>
                  <p className="text-sm text-[#5B6270]/70 whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-[#5B6270] text-sm leading-relaxed flex gap-2">
                      <span className="text-[#2952E3] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
