import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-24 right-[8%] w-2 h-2 rounded-full bg-[#2952E3]/40 hidden md:block"></div>
      <div className="absolute bottom-32 left-[12%] w-3 h-3 rounded-full bg-[#2952E3]/20 hidden md:block"></div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            <div className="absolute -inset-3 bg-[#2952E3]/[0.06] blob-shape-alt"></div>
            <div className="absolute inset-0 overflow-hidden blob-shape shadow-[0_30px_60px_-15px_rgba(20,24,31,0.15)]">
              <Image
                src="/headshot.jpg"
                alt="Justin Restrepo"
                fill
                className="object-cover"
                style={{ objectPosition: "60% 80%" }}
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left order-1 md:order-2">
          <p className="eyebrow mb-5">Cloud Security &amp; AI Security</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#14181F] mb-6 tracking-tight leading-[1.05]">
            Justin
            <br />
            Restrepo
          </h1>
          <p className="text-lg text-[#5B6270] mb-10 max-w-md mx-auto md:mx-0">
            Security-minded engineer focused on cloud infrastructure and AI systems.
            Currently interning at Ally Financial.
          </p>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#14181F] text-white text-sm font-medium rounded-full hover:bg-[#2952E3] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#14181F]/15 text-[#14181F] text-sm font-medium rounded-full hover:border-[#14181F]/40 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
