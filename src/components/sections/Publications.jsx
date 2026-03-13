import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Award, ArrowUpRight, BadgeCheck } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: Newspaper,
    label: "Business Dubai",
    meta: "Sept 2025",
    title: "Defining Digital Impact",
    description:
      "A feature highlighting Anastasia’s journey from Ukraine to Dubai, her work in digital strategy, and the purpose driving her platform.",
    tag: "Editorial feature",
    featured: true,
  },
  {
    icon: Award,
    label: "UAE Stories",
    meta: "Exclusive",
    title: "Featured in UAE Stories",
    description:
      "Recognition for her personal journey, digital expertise, and the message-centered platform she continues to build through meaningful media.",
    tag: "Recognition",
    featured: false,
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

const Publications = () => {
  return (
    <section
      id="publications"
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
            >
              <SectionTitle
                subtitle="Press & recognition"
                title="What respected platforms say about the work."
                description="Editorial features and public recognition strengthen authority, trust, and the long-term value of a personal brand."
                center={false}
                className="mb-0 max-w-xl"
              />
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
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-8 text-white/76">
                    Public recognition is more than visibility. It signals trust,
                    consistency, and the quality of the work behind the brand.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Publication cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.18 + index * 0.06}
                  className={`group relative overflow-hidden rounded-[2rem] border p-8 transition-all duration-300 sm:p-9 ${
                    item.featured
                      ? "border-white/16 bg-gradient-to-br from-white/[0.08] via-red-500/10 to-black shadow-[0_24px_80px_rgba(0,0,0,0.26)]"
                      : "border-white/12 bg-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                  } hover:-translate-y-1 hover:bg-white/[0.06]`}
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-red-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                        {item.tag}
                      </span>
                    </div>

                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300/90">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-white/52">{item.meta}</p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mb-4 font-display text-[2rem] font-semibold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="text-base leading-8 text-white/74">
                      {item.description}
                    </p>

                    <div className="mt-8 border-t border-white/10 pt-5">
                      <p className="text-sm uppercase tracking-[0.16em] text-white/48">
                        Premium editorial visibility
                      </p>
                    </div>
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

export default Publications;