const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C++", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React.js", "React Native", "Tailwind CSS", "JavaFX"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MongoDB", "Supabase", "PostgreSQL", "AWS Cognito", "Firebase"],
  },
  {
    category: "AI / Machine Learning",
    skills: ["Gemini API", "OpenAI", "TensorFlow", "OpenCV", "YOLOv8", "MediaPipe"],
  },
  {
    category: "Cybersecurity & Cloud",
    skills: ["Risk Analysis", "Access Control", "Threat Modeling", "Cloud Platforms"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#F2F1EC]">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="eyebrow mb-5">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] tracking-tight">
          Technical toolkit
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-7">
        {skillCategories.map((cat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-xs font-semibold text-[#14181F]/60 uppercase tracking-wide mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-sm px-4 py-2 bg-white border border-black/5 text-[#14181F] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
