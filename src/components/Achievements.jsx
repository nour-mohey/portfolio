import { motion } from "framer-motion";
import { HiOutlineTrophy } from "react-icons/hi2";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const activeAchievements = achievements.filter(a => a && a.title);

  if (activeAchievements.length === 0) return null;

  return (
    <section id="achievements" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">
      <div className="grid sm:grid-cols-2 gap-5">
        {activeAchievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 flex gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-grad-violet/20 flex items-center justify-center text-violet-400 text-xl shrink-0">
              <HiOutlineTrophy />
            </div>
            <div>
              <p className="eyebrow mb-1">{a.year}</p>
              <h3 className="font-display text-ink font-medium">{a.title}</h3>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
