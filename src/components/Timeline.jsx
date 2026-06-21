import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section id="journey" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">
      <SectionHeading
        index={6}
        slug="journey"
        title="My journey"
        description="The path from first CS course to shipping production code, roughly in commit order."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-1 bottom-1 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-8 sm:-left-10 top-1 w-3.5 h-3.5 rounded-full bg-grad-primary shadow-glow ring-4 ring-base" />
              <div className="glass glass-hover rounded-xl p-5">
                <p className="eyebrow mb-1">{item.year}</p>
                <h3 className="font-display text-ink font-medium">{item.title}</h3>
                <p className="text-violet-400 text-xs mt-0.5">{item.org}</p>
                <p className="text-muted text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
