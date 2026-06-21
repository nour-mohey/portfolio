import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up — replace with your form endpoint or API call.
    setStatus("sent");
  }

  const contactItems = [
    { icon: HiOutlineMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: HiOutlineLocationMarker, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad max-w-6xl mx-auto px-5 sm:px-8">

      <div className="grid md:grid-cols-[0.85fr,1.15fr] gap-8">
        <div className="space-y-4">
          {contactItems.map((c, i) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="glass glass-hover rounded-xl p-5 flex items-center gap-4 block"
                >
                  <div className="w-10 h-10 rounded-lg bg-grad-primary/15 flex items-center justify-center text-cyan-400 text-lg shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-muted text-xs">{c.label}</p>
                    <p className="text-ink text-sm font-medium mt-0.5">{c.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}

          <div className="flex gap-3 pt-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-ink text-lg"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost w-11 h-11 rounded-xl flex items-center justify-center text-ink text-lg"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-7 space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-xs text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full mt-1.5 bg-white/[0.03] border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-cyan-400/50 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@email.com"
              className="w-full mt-1.5 bg-white/[0.03] border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-cyan-400/50 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              className="w-full mt-1.5 bg-white/[0.03] border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-cyan-400/50 outline-none transition-colors resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3 rounded-lg text-sm">
            {status === "sent" ? "Message sent ✓" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-cyan-400 text-xs text-center">
              Thanks — I'll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
