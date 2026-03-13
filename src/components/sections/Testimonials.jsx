import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Star,
  Video,
  MessageCircle,
  Play,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import Container from "../common/Container";

const testimonials = [
  {
    name: "Client Name",
    role: "Entrepreneur",
    type: "Written testimonial",
    quote:
      "Working with Anastasiia was an incredible experience. She knows how to create a comfortable space, ask thoughtful questions, and bring out the real depth of a story in a way that feels natural and powerful.",
  },
  {
    name: "Guest Name",
    role: "Coach & Speaker",
    type: "Video testimonial",
    quote:
      "The conversation felt elegant, authentic, and deeply intentional. It was more than an interview — it felt like a premium platform for sharing a meaningful message.",
  },
  {
    name: "Founder Name",
    role: "Business Founder",
    type: "Written testimonial",
    quote:
      "The entire process was smooth, thoughtful, and professional. From preparation to recording and publishing, everything felt aligned with high standards and real care.",
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

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="section-shell premium-noise relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_24%)]" />
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
              className="max-w-md"
            >
              <p className="eyebrow mb-4">Trust & guest experience</p>
              <h2 className="heading-xl text-white">
                What guests say after stepping onto the platform.
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
                Great conversations do more than fill an episode. They create
                credibility, emotional connection, and lasting brand impact. The
                experience should feel thoughtful, elevated, and worth sharing.
              </p>
            </motion.div>
          </div>

          {/* Trust stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.18}
            className="mb-12 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                icon: Video,
                label: "Video feedback",
                value: "5+",
              },
              {
                icon: MessageCircle,
                label: "Guest testimonials",
                value: "7+",
              },
              {
                icon: Star,
                label: "Premium experience",
                value: "5-star",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-red-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/58">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Main layout */}
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            {/* Featured testimonial */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.24}
              className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.06] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#c6a96b] text-[#c6a96b]"
                    />
                  ))}
                </div>

                <Quote className="mb-6 h-10 w-10 text-red-400/80" />

                <p className="font-display text-[2rem] leading-tight text-white sm:text-[2.5rem]">
                  “Working with Anastasiia felt elegant, natural, and deeply
                  professional. The conversation became a valuable extension of
                  my personal brand.”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-lg font-semibold text-white/85">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-white">Guest Name</p>
                    <p className="text-sm text-white/60">
                      Founder · Speaker · Entrepreneur
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video proof + supporting cards */}
            <div className="grid gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.3}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-gradient-to-br from-white/[0.05] via-red-500/10 to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                    Video testimonial
                  </span>
                  <Video className="h-5 w-5 text-red-400" />
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      Hear the experience directly from a guest.
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/74">
                      A premium conversation should feel memorable before,
                      during, and after the recording.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/90 text-red-500 shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                  >
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </button>
                </div>
              </motion.div>

              <div className="grid gap-4">
                {testimonials.slice(0, 2).map((item, index) => (
                  <motion.article
                    key={item.name + index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    custom={0.34 + index * 0.06}
                    className="rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.18em] text-red-400/90">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#c6a96b] text-[#c6a96b]"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-white/76">
                      “{item.quote}”
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-sm text-white/58">{item.role}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.46}
            className="mt-12 text-center"
          >
            <Link
              to="/book-slot"
              className="btn-secondary-luxury inline-flex items-center justify-center"
            >
              Be featured on the podcast
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;