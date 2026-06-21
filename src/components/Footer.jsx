import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          <span className="text-cyan-400">{"<"}</span>
          {profile.name}
          <span className="text-cyan-400">{" />"}</span> — built with React, Tailwind & Framer Motion
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.social.email}
            className="text-muted hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <p className="text-muted text-xs">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
