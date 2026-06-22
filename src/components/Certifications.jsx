import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineExternalLink, HiOutlineDocument } from "react-icons/hi";
import { certifications, about } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">
      {/* Certificates Section */}
      <h2 className="text-2xl font-display text-ink mb-6">Certificates</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.Link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="glass glass-hover rounded-2xl p-5 flex flex-col group"
          >
            <div className="flex items-start justify-between">
              <HiOutlineBadgeCheck className="text-2xl text-cyan-400" />
              <HiOutlineExternalLink className="text-muted group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="font-display text-ink font-medium mt-3 text-[15px] leading-snug">
              {c.name}
            </h3>
            <p className="text-muted text-xs mt-1.5">
              {c.provider} · {c.date}
            </p>
            <div className="flex gap-4 mt-4 items-center justify-between">
              <HiOutlineDocument className="text-cyan-400 text-lg hover:text-cyan-300 transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
      {/* Extracurricular Activities Section */}
      <h2 className="text-2xl font-display text-ink mb-6">Extracurricular Activities</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {about.Extracircullaractivities && about.Extracircullaractivities.map((act, idx) => (
          <motion.div
            key={idx}
            className="glass glass-hover rounded-2xl p-5 flex flex-col group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
          >
            <div className="flex items-start justify-between">
              <HiOutlineBadgeCheck className="text-2xl text-cyan-400" />
            </div>
            <h3 className="font-display text-ink font-medium mt-3 text-[15px] leading-snug">{act}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
