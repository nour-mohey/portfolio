import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail, FiLayers, FiCpu, FiBookOpen } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const floatAnimation = (delay = 0, duration = 5, yRange = 10) => ({
  animate: {
    y: [0, -yRange, 0],
  },
  transition: {
    duration: duration,
    ease: "easeInOut",
    repeat: Infinity,
    delay: delay,
  },
});

export default function Hero({ onOpenWork, onOpenContact }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 py-20 text-center"
    >
      {/* Background blobs with organic flowing motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Blob 1: Soft Blue, floating top-left */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -100, 60, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-500/10 blur-[100px]"
        />
        
        {/* Blob 2: Soft Purple/Indigo, floating bottom-right */}
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 90, -70, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[#7c5cfc]/10 blur-[100px]"
        />

        {/* Blob 3: Soft Cyan, floating center/middle */}
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[30%] left-[25%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-cyan-500/5 blur-[120px]"
        />
      </div>

      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.6) 39px, rgba(255,255,255,0.6) 40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full gap-0">
        
        {/* "Hi, I'm" — Space Grotesk bold, clean */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hi, I'm
        </motion.p>

        {/* Name — purple gradient, heavier weight, Space Grotesk font */}
        <motion.h1
          {...fadeUp(0.22)}
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-10 mt-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
          }}
        >
          {profile.name}
        </motion.h1>

        {/* Actions row */}
        <motion.div
          {...fadeUp(0.46)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* Gradient Download CV button — matches Contact page style and inherits body font (Inter) */}
          <motion.a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative group flex items-center gap-2 px-7 py-3 rounded-xl font-medium text-sm text-white overflow-hidden transition-all duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 50%, #06b6d4 100%)",
            }}
          >
            {/* Shimmer on hover */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
            <HiOutlineDocumentDownload className="text-lg relative z-10" />
            <span className="relative z-10">Download CV</span>
          </motion.a>

          {/* Social icon buttons — rounded-xl dark style */}
          <div className="flex items-center gap-2">
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-300 bg-white/[0.05] border border-white/15 hover:border-indigo-400/60 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <FiLinkedin className="text-lg" />
            </motion.a>
            <motion.a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-300 bg-white/[0.05] border border-white/15 hover:border-indigo-400/60 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <FiGithub className="text-lg" />
            </motion.a>
            {/* Mail icon — opens Contact section modal */}
            <motion.button
              onClick={onOpenContact}
              aria-label="Contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-300 bg-white/[0.05] border border-white/15 hover:border-indigo-400/60 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-200 cursor-pointer"
            >
              <FiMail className="text-lg" />
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Cards — floating anti-gravity loop */}
        <motion.div
          {...fadeUp(0.58)}
          className="w-full max-w-3xl mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 px-4"
        >
          {/* Card 1 */}
          <motion.div {...floatAnimation(0.2, 5.4, 11)}>
            <div className="relative group p-5 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 text-left h-full flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FiLayers className="text-lg" />
              </div>
              <h3 className="text-white font-bold text-base">Full-Stack Dev</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Building secure, scalable, and responsive web applications with React, Node.js, Spring Boot & Laravel.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...floatAnimation(0.5, 4.8, 13)}>
            <div className="relative group p-5 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 text-left h-full flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FiCpu className="text-lg" />
              </div>
              <h3 className="text-white font-bold text-base">Problem Solving</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Applying optimized algorithms and data structures to resolve complex logic and ECPC challenges.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...floatAnimation(0.8, 5.6, 9)}>
            <div className="relative group p-5 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 text-left h-full flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FiBookOpen className="text-lg" />
              </div>
              <h3 className="text-white font-bold text-base">Continuous Learning</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Acquiring new technologies, testing practices, and industry standards (ISTQB & IBM certified).
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
