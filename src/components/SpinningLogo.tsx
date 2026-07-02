export default function SpinningLogo() {
  return (
    <span className="brand-symbol relative grid h-20 w-20 shrink-0 place-items-center md:h-24 md:w-24">
      <span className="brand-corner brand-corner-top absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#2952E3]" />
      <span className="brand-corner brand-corner-bottom absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#2952E3]" />
      <span className="absolute right-0 top-0 h-1.5 w-1.5 bg-[#2952E3]" />

      <span
        className="brand-monogram pr-1 text-4xl tracking-[-0.09em] text-[#2952E3] md:text-5xl"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontWeight: 700,
          textShadow: "0 10px 28px rgba(41,82,227,0.16)",
        }}
      >
        JR
      </span>
    </span>
  );
}
