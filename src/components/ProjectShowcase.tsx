type Project = {
  number: string;
  position: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  role: string;
  tools: string[];
  link?: {
    label: string;
    href: string;
  };
};

const projects: Project[] = [
  {
    number: "01",
    position: "Most recent",
    eyebrow: "Portfolio · Design · Storytelling",
    title: "justinrestrepo.com",
    headline: "Turning my résumé into a story",
    description:
      "Architected and developed a responsive, custom web application designed to dynamically map out engineering experience through a narrative-driven dashboard layout. Focused heavily on minimalist UI/UX paradigms, optimized asset delivery, and interactive layout systems using Next.js and TypeScript.",
    role: "Designer and developer",
    tools: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    position: "Second most recent",
    eyebrow: "Desktop · Architecture · Leadership",
    title: "CodeBricks",
    headline: "Leading a team from prototype to release",
    description:
      "Spearheaded a five-person engineering team as Lead Developer and Scrum Master across multiple agile sprints to deliver a desktop data structures platform. Engineered the application’s core logic, integrated MongoDB Atlas backend pipelines, and implemented cryptographic hashing using BCrypt to secure user authentication.",
    role: "Lead developer and Scrum Master",
    tools: ["Java", "JavaFX", "MongoDB Atlas", "BCrypt", "Maven", "JUnit"],
    link: {
      label: "View CodeBricks",
      href: "https://github.com/ResJustin1F/CodeBricks",
    },
  },
  {
    number: "03",
    position: "Where it started",
    eyebrow: "AI · RAG · Wellbeing",
    title: "NourishNote",
    headline: "Making AI support feel personal",
    description:
      "Co-developed a full-stack, AI-driven contextual well-being application at a Columbia University hackathon using advanced Retrieval-Augmented Generation (RAG). Architected the secure data orchestration layer to safely ingest sensitive user journal inputs, manage token embeddings, and deliver real-time personalized insights via OpenAI and Gemini APIs.",
    role: "Full stack and AI development",
    tools: ["Next.js", "Gemini", "OpenAI", "LangChain", "Supabase", "Astra DB"],
    link: {
      label: "View NourishNote",
      href: "https://github.com/ResJustin1F/nourish-note",
    },
  },
];

export default function ProjectShowcase() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4 md:mb-10">
        <span className="h-px flex-1 bg-black/15" />
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2952E3]">
          Project index · Newest to oldest
        </p>
      </div>

      <div className="border-y border-black/15">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden transition-colors duration-300 hover:bg-white/40 ${
              index < projects.length - 1 ? "border-b border-black/10" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 w-0.5 origin-center scale-y-0 bg-[#2952E3] transition-transform duration-300 group-hover:scale-y-100" />

            <div className="grid md:grid-cols-[8.5rem_1fr]">
              <div className="flex items-center justify-between px-6 pb-0 pt-7 md:block md:px-8 md:py-9">
                <span className="block font-mono text-4xl font-semibold tracking-[-0.08em] text-black/[0.14] transition-colors duration-300 group-hover:text-[#2952E3]/45 md:text-6xl">
                  {project.number}
                </span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[#5B6270] md:mt-5 md:block md:max-w-24">
                  {project.position}
                </span>
              </div>

              <div className="px-6 pb-8 pt-5 md:border-l md:border-black/[0.07] md:px-10 md:py-9">
                <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <p className="mb-3 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#5B6270]">
                      {project.eyebrow}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#14181F] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-[#4D5563] md:text-lg">
                      {project.headline}
                    </p>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 border-b border-black/20 pb-1 text-sm font-medium text-[#14181F] transition-colors hover:border-[#2952E3] hover:text-[#2952E3]"
                    >
                      {project.link.label}
                      <ArrowIcon />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#5B6270]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2952E3]" />
                      You are here
                    </span>
                  )}
                </div>

                <p className="mt-6 max-w-3xl text-[0.95rem] leading-7 text-[#5B6270] md:text-base md:leading-8">
                  {project.description}
                </p>

                <div className="mt-7 grid gap-5 border-t border-black/[0.08] pt-5 md:grid-cols-[0.8fr_1.2fr]">
                  <ProjectDetail label="My role" value={project.role} />
                  <ProjectDetail label="Built with" value={project.tools.join(" / ")} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#5B6270]">
        {label}
      </p>
      <p className="text-sm leading-6 text-[#14181F]">{value}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
