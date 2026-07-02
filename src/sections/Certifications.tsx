const certifications = [
  { name: "CompTIA Security+", status: "In Progress" },
  { name: "AWS Certified Cloud Practitioner", status: "In Progress" },
  { name: "AWS Certified Security - Specialty", status: "Planned" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-5">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14181F] mb-14 tracking-tight">
          Continuing to grow
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border border-black/5 rounded-xl p-7 text-center bg-white hover:border-[#2952E3]/30 transition-colors"
            >
              <h3 className="font-semibold text-[#14181F] mb-3">{cert.name}</h3>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  cert.status === "In Progress"
                    ? "bg-[#2952E3]/10 text-[#2952E3]"
                    : "bg-black/5 text-[#5B6270]"
                }`}
              >
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
