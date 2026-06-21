import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown } from "react-icons/fi";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="glass rounded-2xl p-6 border border-white/5 bg-white/[0.02] glass-hover"
    >
      <div className="flex flex-col">

        {/* content */}
        <div>
          <h3 className="font-display text-xl text-ink font-semibold">{project.title}</h3>
          <p className="text-muted text-sm mt-2.5 leading-relaxed">{project.summary}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-cyan-400 transition-colors"
              >
                <FiGithub /> Code
              </a>
            )}
            <button
              onClick={() => setOpen((o) => !o)}
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-cyan-400 transition-colors"
            >
              {open ? "Hide details" : "View case study"}
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <FiChevronDown />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-line grid sm:grid-cols-2 gap-5 text-sm">
                  {project.problem && <Detail label="Problem solved" text={project.problem} />}
                  {project.solution && <Detail label="Solution" text={project.solution} className="sm:col-span-2" />}
                  {project.architecture && <Detail label="Architecture" text={project.architecture} />}
                  {project.patterns && <Detail label="Design patterns" text={project.patterns} />}
                  {project.challenges && <Detail label="Challenges" text={project.challenges} />}
                  {project.responsibilities && <DetailList label="Key responsibilities" items={project.responsibilities} />}
                  {project.features && <DetailList label="Features implemented" items={project.features} />}
                  {project.contribution && <Detail label="My contribution" text={project.contribution} className="sm:col-span-2" />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

function Detail({ label, text, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow mb-1.5">{label}</p>
      <p className="text-muted leading-relaxed">{text}</p>
    </div>
  );
}

function DetailList({ label, items }) {
  if (!items || !Array.isArray(items)) return null;
  return (
    <div>
      <p className="eyebrow mb-1.5">{label}</p>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-muted leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
