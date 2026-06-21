import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { profile } from "../data/portfolioData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

export default function Hero({ onOpenWork }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 text-center"
    >
      {/* Subtle radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(59,91,252,0.10) 0%, transparent 70%)",
        }}
      />


      {/* Full name — large blue */}
      <motion.div {...fadeUp(0.22)}>
        <span
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight"
          style={{
            background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.34)}
        className="mt-4 text-gray-400 text-base sm:text-lg font-medium"
      >
        {profile.title}
      </motion.p>

      {/* Bio paragraph */}
      <motion.p
        {...fadeUp(0.46)}
        className="mt-5 max-w-md text-gray-300 text-base sm:text-lg leading-relaxed"
      >
        {profile.tagline}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        {...fadeUp(0.58)}
        className="mt-10 w-full max-w-sm flex flex-col gap-4"
      >
        {/* View My Work */}
        <button
          id="hero-view-work"
          onClick={onOpenWork}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer"
          style={{ background: "linear-gradient(135deg, #2a3fc7 0%, #4530b0 100%)" }}
        >
          View My Work
          <HiArrowRight className="text-lg" />
        </button>

        {/* Download Resume */}
        <a
          id="hero-download-resume"
          href="/Nour Mohey Mostafa.pdf"
          download="Nour Mohey Mostafa.pdf"
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-gray-200 font-semibold text-base transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <HiDownload className="text-lg" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
