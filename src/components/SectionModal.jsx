import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function SectionModal({ open, activeSection, onChangeSection, onClose, children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeSection, open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="section-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50"
          style={{ background: "rgba(4,4,14,0.97)", backdropFilter: "blur(14px)" }}
        >
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            {/* Header */}
            <div
              className="relative flex items-center justify-center px-6 sm:px-10 py-4 shrink-0 border-b"
              style={{
                background: "rgba(4,4,14,0.92)",
                backdropFilter: "blur(16px)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="font-display font-bold text-lg text-center"
                style={{
                  background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {activeSection === "about" && "About Me"}
                {activeSection === "skills" && "Skills & Technologies"}
                {activeSection === "projects" && "Projects"}
                {activeSection === "certifications" && "Certificates & Achievements"}
                {activeSection === "contact" && "Contact"}
              </p>
            </div>

            {/* Scrollable content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto pb-24">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
