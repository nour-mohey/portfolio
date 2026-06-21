import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/portfolioData";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const firstName = profile.name.split(" ")[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Brand — blue gradient name */}
        <a
          href="#hero"
          className="font-display text-xl font-bold"
          style={{
            background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {firstName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #3b5bfc 0%, #6d28d9 100%)" }}
        >
          Let's talk
        </a>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-1 mb-2 rounded-2xl p-5 flex flex-col gap-4"
            style={{
              background: "rgba(10,10,20,0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-base font-medium hover:text-blue-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #3b5bfc 0%, #6d28d9 100%)" }}
            >
              Let's talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
