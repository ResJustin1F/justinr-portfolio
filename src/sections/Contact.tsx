const links = [
  { label: "Email", value: "restrepojustin31@gmail.com", href: "mailto:restrepojustin31@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/justin-restrepo", href: "https://linkedin.com/in/justin-restrepo" },
  { label: "GitHub", value: "github.com/ResJustin1F", href: "https://github.com/ResJustin1F" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="eyebrow mb-5">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] mb-6 tracking-tight">
          Let&apos;s connect
        </h2>
        <p className="text-lg text-[#5B6270] mb-10">
          Open to opportunities in cloud security and AI security. Reach out through any of these.
        </p>
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-black/10 rounded-xl hover:border-[#2952E3]/30 hover:bg-[#2952E3]/[0.03] transition-colors text-left"
            >
              <span className="text-xs font-medium text-[#5B6270] block mb-1 uppercase tracking-wide">{link.label}</span>
              <span className="text-[#14181F] font-medium">{link.value}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-[#5B6270]/60 mt-14">
          © 2026 Justin Restrepo. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
