import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/constants";
import PrivacyPolicyModal from "../common/PrivacyPolicyModal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Episodes", to: "/episodes" },
    { label: "Services", to: "/services" },
    { label: "Why Me", to: "/why-me" },
    { label: "Reviews", to: "/reviews" },
    { label: "FAQ", to: "/faq" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: SOCIAL_LINKS.youtube,
      label: "YouTube",
    },
    {
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_22%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="container-premium relative z-10 py-16 sm:py-20">
          {/* Top */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.04}
              className="max-w-md"
            >
              <Link to="/" className="group inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400 transition duration-300 group-hover:border-red-400/30 group-hover:bg-white/[0.07]">
                  <Mic className="h-5 w-5" />
                </div>

                <div>
                  <div className="font-display text-[1.55rem] font-semibold leading-none text-white">
                    Moments with Anastasia
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Podcast · Speaker · Media
                  </div>
                </div>
              </Link>

              <p className="mt-6 text-sm leading-8 text-white/72">
                Podcast host and speaker Anastasiia Solodovnyk creates space for
                entrepreneurs, creatives, and thought leaders to share stories
                with depth, clarity, and real emotional connection.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/78 transition duration-300 hover:border-red-400/30 hover:bg-white/[0.08] hover:text-red-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
            >
              <h3 className="mb-5 font-display text-[1.5rem] font-semibold text-white">
                Navigation
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-2 text-sm text-white/68 transition duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.16}
            >
              <h3 className="mb-5 font-display text-[1.5rem] font-semibold text-white">
                Contact
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/42">
                      Email
                    </div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 inline-block text-sm text-white/78 transition hover:text-white"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/42">
                      Phone
                    </div>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="mt-1 inline-block text-sm text-white/78 transition hover:text-white"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/42">
                      Location
                    </div>
                    <div className="mt-1 text-sm text-white/78">
                      {CONTACT_INFO.location}
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* CTA / Social */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.22}
            >
              <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <p className="eyebrow mb-3">Stay connected</p>

                <h3 className="font-display text-[1.75rem] font-semibold leading-tight text-white">
                  Follow the story beyond the podcast.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/72">
                  Keep up with new episodes, behind-the-scenes moments, and
                  updates from Anastasiia’s platform.
                </p>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-luxury mt-6 inline-flex items-center justify-center"
                >
                  {CONTACT_INFO.instagram}
                  <Instagram className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="premium-divider my-10" />

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/52">
              © 2025 {CONTACT_INFO.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/58">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="transition hover:text-white"
              >
                Privacy Policy
              </button>

              <Link to="/terms" className="transition hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isPrivacyOpen && (
          <PrivacyPolicyModal onClose={() => setIsPrivacyOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;