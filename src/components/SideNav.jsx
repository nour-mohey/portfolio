import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineTerminal,
  HiOutlineFolder,
  HiOutlineAcademicCap,
  HiOutlineMail,
} from "react-icons/hi";

const tabs = [
  { id: "home",           label: "Home",         Icon: HiOutlineHome },
  { id: "about",          label: "About Me",     Icon: HiOutlineUser },
  { id: "skills",         label: "Skills",       Icon: HiOutlineCode },
  { id: "projects",       label: "Projects",     Icon: HiOutlineFolder },
  { id: "certifications", label: "Certificates", Icon: HiOutlineAcademicCap },
  { id: "contact",        label: "Contact",      Icon: HiOutlineMail },
];

export default function SideNav({ onOpen, active }) {
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-2 pr-3"
      style={{ pointerEvents: "auto" }}
    >
      {tabs.map((tab, i) => {
        const isActive = (tab.id === "home" && !active) || tab.id === active;
        return (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: "easeOut" }}
            onClick={() => {
              if (tab.id === "home") {
                onOpen(null);
              } else {
                onOpen(tab.id);
              }
            }}
            aria-label={tab.label}
            className="group flex items-center gap-0 overflow-hidden transition-all duration-300 hover:gap-2"
            style={{
              height: "44px",
              maxWidth: "44px",
              borderRadius: "10px",
              padding: "0 10px",
              background: isActive ? "rgba(99,102,241,0.3)" : "rgba(15,15,30,0.85)",
              border: isActive ? "1px solid rgba(34,211,238,0.7)" : "1px solid rgba(99,102,241,0.25)",
              backdropFilter: "blur(12px)",
              color: isActive ? "#22d3ee" : "#a5b4fc",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            whileHover={{
              maxWidth: "140px",
              background: isActive ? "rgba(99,102,241,0.4)" : "rgba(79,110,247,0.18)",
              borderColor: isActive ? "rgba(34,211,238,0.9)" : "rgba(99,102,241,0.55)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.Icon className="shrink-0 text-lg" />
            <span
              className="text-xs font-semibold text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 pointer-events-none"
            >
              {tab.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

