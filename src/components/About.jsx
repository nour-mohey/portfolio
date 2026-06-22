import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineUserGroup } from "react-icons/hi";
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
            <HiOutlineAcademicCap className="text-lg shrink-0" />
            education
          </div>
          <p className="text-ink font-medium">{about.Education.degree}</p>
          {about.Education.majoredin && (
            <p className="text-muted text-sm mt-0.5">
              Majored in: <span className="text-ink/80">{about.Education.majoredin.trim()}</span>
            </p>
          )}
          <p className="text-muted text-sm mt-0.5">
            {about.Education.school} · {about.Education.period}
          </p>
        </motion.div>

        {about.Extracircullaractivities && about.Extracircullaractivities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-xl p-5 mt-6"
          >
            <div className="flex items-center gap-2 eyebrow mb-3 text-cyan-400">
              <HiOutlineUserGroup className="text-lg shrink-0" />
              extracurricular activities
            </div>
            <div className="flex flex-col gap-3">
              {about.Extracircullaractivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 mt-2 shrink-0" />
                  <p className="text-muted text-sm leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
