import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  PenTool,
  Briefcase,
  Target,
  Building,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

const services = [
  {
    icon: HeartHandshake,
    title: "Anyone with a story worth sharing",
    description:
      "Whether you are in transition, building something meaningful, or ready to speak your truth, this platform gives your story the space and dignity it deserves.",
    accent: "Story-led visibility",
  },
  {
    icon: Users,
    title: "Creators & influencers",
    description:
      "Expand your personal brand, deepen audience trust, and let people connect with the human voice behind your content.",
    accent: "Audience connection",
  },
  {
    icon: PenTool,
    title: "Authors & speakers",
    description:
      "Share your book, perspective, and message in a format that creates stronger emotional resonance and long-form credibility.",
    accent: "Authority building",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description:
      "Show the real story behind your brand, communicate your mission, and build trust with future clients through authentic conversation.",
    accent: "Business storytelling",
  },
  {
    icon: Target,
    title: "Coaches, mentors & experts",
    description:
      "Position yourself as a trusted voice, articulate your method clearly, and inspire others through your lived experience and insight.",
    accent: "Thought leadership",
  },
  {
    icon: Building,
    title: "Corporate leaders & professionals",
    description:
      "Humanise your company, highlight the values behind the business, and showcase the people and principles driving the work.",
    accent: "Brand humanisation",
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

const Services = () => {
  return (
    <section
      id="services"
      className="section-shell premium-noise relative overflow-hidden bg-black text-white"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Top header area */}
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.05}
              className="max-w-md"
            >
              <p className="eyebrow mb-4">Who this platform is for</p>
              <h2 className="heading-xl text-white">
                If you have a story to tell, this podcast can amplify it.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.12}
              className="max-w-2xl lg:ml-auto"
            >
              <p className="text-body-lg text-white/78">
                This is not just a guest appearance. It is a premium storytelling
                platform designed for voices with insight, experience, and
                message. Whether you are building credibility, expanding reach,
                or creating a deeper human connection, the conversation becomes
                part of your brand.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#book-slot"
                  variant="primary"
                  className="text-sm sm:text-base"
                >
                  BOOK A PODCAST SLOT
                </Button>

                <a
                  href="#episodes"
                  className="btn-secondary-luxury inline-flex items-center justify-center"
                >
                  See examples
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 0 || index === 4;

              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.08 + index * 0.05}
                  className={`group relative overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${
                    featured
                      ? "border-white/16 bg-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.26)]"
                      : "border-white/12 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                  } hover:-translate-y-1 hover:bg-white/[0.06]`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 p-7 sm:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-red-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                        {service.accent}
                      </span>
                    </div>

                    <h3 className="mb-4 font-display text-[1.8rem] font-semibold leading-tight text-white">
                      {service.title}
                    </h3>

                    <p className="text-base leading-8 text-white/74">
                      {service.description}
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

export default Services;