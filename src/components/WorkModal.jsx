import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import Skills from "./Skills";
import Languages from "./Languages";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

export default function WorkModal({ open, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="work-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ background: "rgba(5,5,15,0.98)", backdropFilter: "blur(12px)" }}
        >
          {/* Slide-in panel */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-screen"
          >
            {/* Sticky header bar */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 py-4 border-b"
              style={{
                background: "rgba(5,5,15,0.92)",
                backdropFilter: "blur(16px)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="font-display font-bold text-lg"
                style={{
                  background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                My Work
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <HiX className="text-xl" />
              </button>
            </div>

            {/* All sections */}
            <div className="pb-24">
              <Skills />
              <Languages />
              <Technologies />
              <Projects />
              <Certifications />
              <Achievements />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
