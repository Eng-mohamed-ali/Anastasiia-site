import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  PenTool,
  Briefcase,
  Target,
  Building,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Mic2,
  ArrowUpRight,
} from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const SERVICES = [
  {
    id: "anyone",
    icon: HeartHandshake,
    title: "Anyone with a story worth sharing",
    description:
      "Whether you are in transition, building something meaningful, or ready to speak your truth, this platform gives your story the space and dignity it deserves.",
    features: [
      "Personal storytelling",
      "Authentic conversation",
      "Safe environment",
    ],
    accent: "Story-led visibility",
  },
  {
    id: "creators",
    icon: Users,
    title: "Creators & Influencers",
    description:
      "Grow your personal brand, expand your audience, and let people connect with the human voice behind your content.",
    features: ["Brand growth", "Audience expansion", "Content amplification"],
    accent: "Audience connection",
  },
  {
    id: "authors",
    icon: PenTool,
    title: "Authors & Speakers",
    description:
      "Talk about your book, ideas, or message in a format that creates stronger emotional resonance and long-form credibility.",
    features: ["Book promotion", "Idea sharing", "Authority building"],
    accent: "Authority building",
  },
  {
    id: "entrepreneurs",
    icon: Briefcase,
    title: "Entrepreneurs",
    description:
      "Promote your product or service, share your journey, and build trust with future clients through authentic storytelling.",
    features: ["Business storytelling", "Journey sharing", "Client connection"],
    accent: "Business storytelling",
  },
  {
    id: "coaches",
    icon: Target,
    title: "Coaches, Mentors & Experts",
    description:
      "Position yourself as a thought leader, communicate your methods clearly, and inspire others through your experience.",
    features: ["Thought leadership", "Method sharing", "Inspiration"],
    accent: "Thought leadership",
  },
  {
    id: "corporate",
    icon: Building,
    title: "Corporate Leaders & Professionals",
    description:
      "Humanise your brand, highlight company values, and showcase the people and principles behind the business.",
    features: ["Brand humanisation", "Value highlighting", "Team visibility"],
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.04}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <Mic2 className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Services
            </span>
          </div>

          <h1 className="heading-xl text-white md:heading-display mb-5">
            A premium platform for stories, expertise, and personal brand growth.
          </h1>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            If you have a meaningful story, message, business, or perspective to
            share, this podcast can position it with clarity, credibility, and
            stronger emotional connection.
          </p>

          <div className="mt-8">
            <Button to="/book-slot" variant="primary" className="min-w-[220px]">
              BOOK A PODCAST SLOT
            </Button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 0 || index === 3;

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1 + index * 0.05}
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

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                      {service.accent}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-[1.85rem] font-semibold leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-base leading-8 text-white/74">
                    {service.description}
                  </p>

                  <div className="mb-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-red-400" />
                        <span className="text-sm text-white/78">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-red-300 transition duration-300 hover:text-red-200"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Why choose this platform */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.42}
          className="mt-20 overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.08] via-red-500/10 to-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Why this platform stands out</p>

              <h2 className="heading-lg mb-6 text-white">
                More than exposure. A conversation designed to elevate your brand.
              </h2>

              <p className="mb-8 max-w-2xl text-base leading-8 text-white/78">
                With experience in digital strategy, storytelling, and premium
                audience positioning, Anastasiia helps transform each episode
                into something more valuable than a simple interview.
              </p>

              <ul className="space-y-4">
                {[
                  "Professional studio experience in Dubai",
                  "Thoughtful storytelling and guest guidance",
                  "Stronger personal brand positioning",
                  "Curated network and meaningful visibility",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-400" />
                    <span className="text-white/82">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <div className="mb-5 text-5xl">🎙️</div>

              <h3 className="font-display text-[2rem] font-semibold text-white">
                Ready to share your story?
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/74">
                Book your slot and turn your message into a deeper, more
                credible, and more memorable platform moment.
              </p>

              <div className="mt-8 flex justify-center">
                <Button to="/book-slot" variant="secondary">
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </Container>
    </div>
  );
};

export default ServicesPage;