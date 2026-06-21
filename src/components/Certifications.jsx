import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.link}
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
            <div className="flex flex-wrap gap-1.5 mt-4">
              {c.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
