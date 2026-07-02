export default function CurrentFocus() {
  return (
    <section id="current-focus" className="py-28 px-6 bg-[#14181F] text-white relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#2952E3]/20 blob-shape-small"></div>
      <div className="max-w-2xl mx-auto text-center relative">
        <p className="eyebrow mb-5" style={{ color: "#7C97F0" }}>
          What I&apos;m Doing Now
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Currently interning at Ally Financial
        </h2>
        <p className="text-lg text-white/70 leading-relaxed">
          I&apos;m working as a Cloud Security and AI Security Intern in Charlotte, NC,
          focused on securing cloud infrastructure and AI systems in a financial
          services environment. This role has deepened my hands-on experience with
          risk analysis, access control, and emerging AI security practices.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-white/90">
            Available for opportunities — May 2026 to Present
          </span>
        </div>
      </div>
    </section>
  );
}
