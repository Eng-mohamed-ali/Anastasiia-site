import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Sparkles,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

const reasons = [
  {
    icon: Shield,
    title: "A trusted voice in Dubai",
    description:
      "Anastasiia brings years of experience across digital strategy, branding, and storytelling, giving your message credibility, context, and a stronger professional frame.",
    accent: "Credibility",
  },
  {
    icon: Users,
    title: "Access to meaningful connections",
    description:
      "By joining Moments with Anastasiia, you are positioned alongside entrepreneurs, creatives, leaders, and public voices within a carefully curated network.",
    accent: "Visibility",
  },
  {
    icon: Sparkles,
    title: "Storytelling that elevates your brand",
    description:
      "The conversation is shaped to uncover the strongest parts of your story and present them with clarity, emotional depth, and lasting resonance.",
    accent: "Positioning",
  },
  {
    icon: Megaphone,
    title: "Marketing power behind every episode",
    description:
      "With a strong background in digital growth and audience strategy, each episode is designed not only to be recorded well, but to travel further and perform better.",
    accent: "Amplification",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhyMe = () => {
  return (
    <section
      id="why-me"
      className="section-shell premium-noise relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.05}
              className="max-w-xl"
            >
              <p className="eyebrow mb-4">Why work with this platform</p>
              <h2 className="heading-xl text-white">
                More than a podcast appearance. A premium brand opportunity.
              </h2>
              <p className="mt-5 text-body-lg text-white/78">
                Every episode is designed to create meaningful visibility,
                stronger authority, and a more human connection with your
                audience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.12}
              className="lg:ml-auto lg:max-w-2xl"
            >
              <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-7">
                <p className="text-base leading-8 text-white/76">
                  Great conversations do not just fill a feed. They shape
                  perception, build trust, and create a deeper brand presence.
                  The right platform helps your voice travel further with more
                  impact.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button
                    href="#book-slot"
                    variant="primary"
                    className="min-w-[220px]"
                  >
                    BOOK A PODCAST SLOT
                  </Button>

                  <a
                    href="#episodes"
                    className="btn-secondary-luxury inline-flex items-center justify-center"
                  >
                    Explore episodes
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const featured = index === 0 || index === 3;

              return (
                <motion.article
                  key={reason.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.16 + index * 0.06}
                  className={`group relative overflow-hidden rounded-[1.8rem] border p-7 transition-all duration-300 sm:p-8 ${
                    featured
                      ? "border-white/16 bg-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
                      : "border-white/12 bg-white/[0.05] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  } hover:-translate-y-1 hover:bg-white/[0.06]`}
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-red-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                          {reason.accent}
                        </span>
                        <span className="font-display text-2xl font-semibold text-red-300/85">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-4 font-display text-[1.9rem] font-semibold leading-tight text-white">
                      {reason.title}
                    </h3>

                    <p className="text-base leading-8 text-white/74">
                      {reason.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyMe;