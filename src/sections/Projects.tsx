const projects = [
  {
    title: "Vidion",
    description: "Full-stack portfolio web app with secure authentication via NextAuth.js, Prisma + MySQL, and responsive UI built with DaisyUI, Radix UI, and Framer Motion.",
    tags: ["TypeScript", "Next.js", "Prisma", "MySQL"],
    status: "Live Beta",
  },
  {
    title: "NourishNote",
    description: "Website promoting mindful eating through AI-assisted journaling, with a RAG chatbot using Google Gemini and OpenAI for personalized reflections. Built at a Columbia University hackathon.",
    tags: ["TypeScript", "Next.js", "Supabase", "Gemini API"],
    status: "Hackathon Project",
  },
  {
    title: "Game of Life",
    description: "Simulation of Conway's Game of Life using data structures and rule-based logic to model system state changes over time.",
    tags: ["Python"],
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="eyebrow mb-5">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] tracking-tight">
          What I&apos;ve built
        </h2>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl p-8 border border-black/5 hover:border-[#2952E3]/30 hover:shadow-[0_12px_30px_-12px_rgba(41,82,227,0.15)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-[#14181F] group-hover:text-[#2952E3] transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-medium text-[#5B6270]/70">{project.status}</span>
            </div>
            <p className="text-[#5B6270] text-sm leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="text-xs px-3 py-1 bg-[#F2F1EC] text-[#5B6270] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
