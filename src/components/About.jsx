import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi"; // Wait, in original it was react-icons/hi
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-pad max-w-3xl mx-auto px-5 sm:px-8">
      <div>
        {about.bio.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-muted leading-relaxed mb-4 text-[15px]"
          >
            {p}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-xl p-5 mt-6"
        >
          <div className="flex items-center gap-2 eyebrow mb-2 text-cyan-400">
             education
          </div>
          <p className="text-ink font-medium">{about.education.degree}</p>
          <p className="text-muted text-sm mt-0.5">
            {about.education.school} · {about.education.period}
          </p>
          <p className="text-muted text-sm mt-2 leading-relaxed">{about.education.detail}</p>
        </motion.div>
      </div>
    </section>
  );
}
