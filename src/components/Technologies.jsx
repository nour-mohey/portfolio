import { motion } from "framer-motion";
import { technologies } from "../data/portfolioData";

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            className="glass glass-hover flex flex-col items-center justify-center text-center p-4 gap-2"
            style={{
              aspectRatio: "1 / 1",
              borderRadius: "12px",
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center text-2xl font-display font-bold"
              style={{ color: "#a5b4fc" }}
            >
              {t.glyph}
            </div>
            <p className="text-ink font-semibold text-xs leading-tight">{t.name}</p>
            <p className="text-muted text-[10px] leading-tight">{t.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
