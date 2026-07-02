const stats = [
  { number: "2+", label: "Years Coding" },
  { number: "4", label: "Internships & Roles" },
  { number: "5+", label: "Projects Built" },
  { number: "1", label: "Published Paper" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="eyebrow mb-5">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] tracking-tight">
          Engineer turned security specialist
        </h2>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 mb-16 text-left">
        <div>
          <p className="text-lg text-[#5B6270] leading-relaxed mb-6">
            I started as a software engineer building full-stack applications with
            Next.js, React, and Node.js. That foundation now drives how I approach
            security: I understand how systems are built, which means I understand
            how they break.
          </p>
          <p className="text-lg text-[#5B6270] leading-relaxed">
            Today I focus on cloud security and AI security, currently applying that
            lens at Ally Financial. I care about risk analysis, access control, threat
            modeling, and the emerging security challenges that come with deploying
            AI systems in production.
          </p>
        </div>
        <div className="space-y-6 bg-white rounded-2xl p-8 border border-black/5">
          <div>
            <h3 className="text-xs font-semibold text-[#14181F] uppercase tracking-wide mb-2">Languages</h3>
            <p className="text-[#5B6270] text-sm">TypeScript, JavaScript, Java, Python, C++, SQL</p>
          </div>
          <div className="pt-4 border-t border-black/5">
            <h3 className="text-xs font-semibold text-[#14181F] uppercase tracking-wide mb-2">Cloud & Security</h3>
            <p className="text-[#5B6270] text-sm">AWS Cognito, Risk Analysis, Access Control, Threat Modeling</p>
          </div>
          <div className="pt-4 border-t border-black/5">
            <h3 className="text-xs font-semibold text-[#14181F] uppercase tracking-wide mb-2">Frameworks</h3>
            <p className="text-[#5B6270] text-sm">Next.js, React, Node.js, Tailwind CSS</p>
          </div>
          <div className="pt-4 border-t border-black/5">
            <h3 className="text-xs font-semibold text-[#14181F] uppercase tracking-wide mb-2">AI / ML</h3>
            <p className="text-[#5B6270] text-sm">Gemini API, OpenAI, TensorFlow, OpenCV</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-black/5">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#14181F] mb-1 tracking-tight">{stat.number}</p>
            <p className="text-sm text-[#5B6270]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
