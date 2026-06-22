import { motion } from "framer-motion";
import { skillCategories, coursework, softSkills } from "../data/portfolioData";
import * as SiIcons from "react-icons/si";
import { FaDatabase, FaCode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { 
  HiOutlineLightBulb, 
  HiOutlineUserGroup, 
  HiOutlineChatAlt2, 
  HiOutlineRefresh, 
  HiOutlineClock, 
  HiOutlineBookOpen, 
  HiOutlineCheckCircle 
} from "react-icons/hi";

// Map custom string to specific icon components if they don't match exactly
const customIconMap = {
  Sql: FaDatabase,
  Html: FaHtml5,
  Css: FaCss3Alt,
};

const softSkillIconMap = {
  problem: HiOutlineLightBulb,
  team: HiOutlineUserGroup,
  communication: HiOutlineChatAlt2,
  adaptability: HiOutlineRefresh,
  time: HiOutlineClock,
  learning: HiOutlineBookOpen,
};

const getSkillIcon = (iconName) => {
  if (customIconMap[iconName]) return customIconMap[iconName];
  const siName = "Si" + iconName;
  if (SiIcons[siName]) return SiIcons[siName];
  return FaCode;
};

// Colors mapping for skill icons based on brand colors
const iconColors = {
  Java: "#f89820",
  Python: "#3776ab",
  Javascript: "#f7df1e",
  Cplusplus: "#00599c",
  Csharp: "#239120",
  Php: "#777bb4",
  Sql: "#00758f",
  Html: "#e34f26",
  Css: "#1572b6",
  Html5: "#e34f26",
  Css3: "#1572b6",
  React: "#61dafb",
  Nodedotjs: "#339933",
  Laravel: "#ff2d20",
  Springboot: "#6db33f",
  Dotnet: "#512bd4",
  Bootstrap: "#7952b3",
  Mysql: "#4479a1",
  Mongodb: "#47a248",
  Git: "#f05032",
  Docker: "#2496ed",
  Figma: "#f24e1e",
  Visualstudiocode: "#007acc",
  Intellijidea: "#000000",
  Apachenetbeans: "#1b6ac6",
  Jira: "#0052CC",
};

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 space-y-20">
      
      {/* --- Technical Skills Section --- */}
      <section>
        <h2 className="text-2xl font-display font-bold text-ink mb-8 border-b border-white/5 pb-4">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5 bg-white/[0.02]"
            >
              <h3 className="font-display text-lg text-ink font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm">
                  {ci + 1}
                </span>
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((s, idx) => {
                  const Icon = getSkillIcon(s.icon);
                  const color = iconColors[s.icon] || "#a5b4fc";
                  return (
                    <motion.div
                      key={s.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10"
                    >
                      <div className="text-3xl mb-3 transition-transform group-hover:scale-110" style={{ color }}>
                        <Icon />
                      </div>
                      <span className="text-sm font-medium text-indigo-100/80 group-hover:text-white">
                        {s.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Relevant Coursework Section --- */}
      <section>
        <h2 className="text-2xl font-display font-bold text-ink mb-8 border-b border-white/5 pb-4">
          Relevant Coursework
        </h2>
        <div className="flex flex-wrap gap-3">
          {coursework.map((course, idx) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all cursor-default"
            >
              <HiOutlineCheckCircle className="text-indigo-400 text-lg shrink-0" />
              <span>{course}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Soft Skills Section --- */}
      <section>
        <h2 className="text-2xl font-display font-bold text-ink mb-8 border-b border-white/5 pb-4">
          Soft Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkills.map((skill, idx) => {
            const Icon = softSkillIconMap[skill.icon] || HiOutlineLightBulb;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{skill.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
