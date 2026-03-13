import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import {
  JOURNEY_STORY,
  PODCAST_STORY,
  VISION_STORY,
  LEGACY_STORY,
} from "../../utils/constants";
import Container from "../common/Container";
import aboutImage from "../../assets/images/about.jpeg";

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

const About = () => {
  const [expandedSection, setExpandedSection] = useState("journey");

  const sections = [
    {
      id: "journey",
      title: JOURNEY_STORY.title,
      content: JOURNEY_STORY.paragraphs,
      icon: "✈️",
    },
    {
      id: "podcast",
      title: PODCAST_STORY.title,
      content: PODCAST_STORY.paragraphs,
      icon: "🎙️",
    },
    {
      id: "vision",
      title: VISION_STORY.title,
      content: VISION_STORY.paragraphs,
      icon: "🔮",
    },
    {
      id: "legacy",
      title: LEGACY_STORY.title,
      content: LEGACY_STORY.paragraphs,
      icon: "🏛️",
    },
  ];

  const stats = [
    { number: "12+", label: "Years in Dubai", icon: "📍" },
    { number: "100+", label: "Podcast Episodes", icon: "🎙️" },
    { number: "15+", label: "Years Experience", icon: "💼" },
    { number: "200+", label: "Guests Featured", icon: "🤝" },
  ];

  return (
    <section
      id="about"
      className="section-shell premium-noise relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={0.05}
            className="mx-auto mb-14 max-w-4xl text-center"
          >
            <p className="eyebrow mb-4">The story</p>

            <h2 className="heading-xl mb-6 text-white md:heading-display">
              From Ukraine to Dubai:
              <br />
              A journey shaped by purpose.
            </h2>

            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-red-400 to-transparent" />
          </motion.div>

          {/* Main bio block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.12}
            className="mx-auto mb-16 max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl"
          >
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              {/* Image side */}
              <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 md:min-h-full md:border-b-0 md:border-r md:border-white/10">
                <img
                  src={aboutImage}
                  alt="Anastasiia Solodovnyk"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_20%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/14 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                  Podcast Host
                </div>

                <div className="absolute bottom-6 left-6">
                  <div className="rounded-full border border-white/12 bg-black/45 px-5 py-2 text-sm font-medium text-white/85 backdrop-blur-md">
                    12+ Years in Dubai
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="mb-5 text-lg leading-8 text-white/82">
                  When Anastasiia Solodovnyk boarded her first flight from
                  Ukraine to Dubai twelve years ago, she was not simply moving
                  countries. She was moving toward a future she intended to
                  build for herself.
                </p>

                <p className="mb-5 text-lg leading-8 text-white/76">
                  That bold step evolved into one of the most compelling
                  professional journeys in the region. Today, Anastasiia is
                  recognised for her work in digital marketing, personal brand
                  storytelling, and meaningful conversations that bring together
                  strategy, creativity, and emotional intelligence.
                </p>

                <p className="text-lg leading-8 text-white/76">
                  With more than a decade of experience in digital performance
                  and e-commerce, she understands the science behind visibility.
                  But for Anastasiia, numbers alone are never enough. The work
                  that lasts is the work that resonates with people deeply and
                  honestly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.18}
            className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-3 text-3xl">{stat.icon}</div>
                <div className="font-display text-4xl font-semibold text-white">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.14em] text-white/58">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Story sections */}
          <div className="mx-auto max-w-5xl space-y-4">
            {sections.map((section, index) => {
              const isOpen = expandedSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.22 + index * 0.05}
                  className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.05] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <button
                    onClick={() =>
                      setExpandedSection(isOpen ? null : section.id)
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03] sm:px-7 sm:py-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{section.icon}</span>
                      <h3 className="font-display text-2xl font-semibold text-white sm:text-[1.9rem]">
                        {section.title}
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/75">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-6 pb-6 pt-5 sm:px-7">
                          {section.content.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="mb-4 text-base leading-8 text-white/78 last:mb-0"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Philosophy quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.34}
            className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-red-500/20 via-red-500/10 to-white/[0.04] p-10 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-12"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <Heart className="mx-auto mb-6 h-12 w-12 text-white/80" />

              <p className="font-display text-[2rem] italic leading-tight text-white sm:text-[2.6rem]">
                “Her work is not only about visibility. It is about resonance,
                trust, and creating meaningful connection in a digital world
                overwhelmed by noise.”
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/14 bg-white/15 text-lg font-semibold text-white">
                  A
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold">
                    Anastasiia Solodovnyk
                  </div>
                  <div className="text-white/75">
                    Podcast Host & Digital Strategist
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Follow CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.42}
            className="mt-16 text-center"
          >
            <p className="mb-4 text-base text-white/68">
              Follow Anastasiia on Instagram
            </p>

            <a
              href="https://instagram.com/anastasiia.solodovnyk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-luxury inline-flex items-center justify-center"
            >
              @anastasiia.solodovnyk
              <Instagram className="h-4 w-4" />
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;