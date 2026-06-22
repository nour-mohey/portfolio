import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineDocumentDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const contactItems = [
    { icon: HiOutlineMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: HiOutlineLocationMarker, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad max-w-6xl mx-auto px-5 sm:px-8 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 sm:p-10 w-full max-w-lg text-center space-y-6"
      >
        {/* Heading */}
        <div>
          <h3 className="text-ink text-xl font-semibold">Get in Touch</h3>
          <p className="text-muted text-sm mt-1">Feel free to reach out anytime</p>
        </div>

        {/* Download CV Button */}
        <motion.a
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-medium text-sm text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #4f6ef7 0%, #7c5cfc 50%, #06b6d4 100%)",
          }}
        >
          {/* Shimmer overlay */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
          <HiOutlineDocumentDownload className="text-lg relative z-10" />
          <span className="relative z-10">Download CV</span>
        </motion.a>

        {/* Contact Items */}
        <div className="space-y-4">
          {contactItems.map((c, i) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-line/50 hover:border-cyan-400/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-grad-primary/15 flex items-center justify-center text-cyan-400 text-lg shrink-0">
                    <Icon />
                  </div>
                  <div className="text-left">
                    <p className="text-muted text-xs">{c.label}</p>
                    <p className="text-ink text-sm font-medium mt-0.5">{c.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-line/40" />

        {/* Social Icons */}
        <div className="flex justify-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-ink text-lg hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-ink text-lg hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
