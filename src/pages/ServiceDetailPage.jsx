import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  HeartHandshake,
  Users,
  PenTool,
  Briefcase,
  Target,
  Building,
  ArrowLeft,
  CheckCircle2,
  ArrowUpRight,
  Mic2,
} from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

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

const SERVICES_MAP = {
  anyone: {
    icon: HeartHandshake,
    eyebrow: "For personal stories",
    title: "Anyone with a story worth sharing",
    short:
      "A premium space for honest, meaningful stories that deserve to be heard with clarity and dignity.",
    description:
      "This platform is not reserved only for public figures or polished personalities. If you are going through a transformation, building something meaningful, or simply ready to speak your truth, your story may have real value for others. The conversation is designed to help you express that story in a way that feels authentic, thoughtful, and emotionally resonant.",
    features: [
      "A calm and supportive recording experience",
      "Authentic storytelling with emotional depth",
      "A platform for real stories, not performance",
      "A polished final result that still feels human",
    ],
    idealFor: [
      "People in personal or professional transition",
      "Guests with lived experience worth sharing",
      "Voices that value honesty over performance",
    ],
  },

  creators: {
    icon: Users,
    eyebrow: "For creators & influencers",
    title: "Grow your personal brand through deeper conversation",
    short:
      "Move beyond short-form visibility and build stronger audience connection through long-form storytelling.",
    description:
      "For creators and influencers, trust is often built in the moments where people hear your voice, values, and real perspective. This platform gives you a format that goes deeper than quick content and allows your audience to connect with the person behind the brand.",
    features: [
      "Long-form personal brand storytelling",
      "More audience trust and emotional connection",
      "A stronger authority layer beyond social media",
      "Shareable media asset for your content ecosystem",
    ],
    idealFor: [
      "Content creators",
      "Influencers building deeper trust",
      "Personal brands ready for long-form visibility",
    ],
  },

  authors: {
    icon: PenTool,
    eyebrow: "For authors & speakers",
    title: "Turn your ideas into a memorable public conversation",
    short:
      "Present your book, philosophy, and message in a format that creates deeper credibility and resonance.",
    description:
      "If you are an author or speaker, the value is not only in being seen but in being understood. This platform helps you articulate your ideas with more nuance, emotion, and clarity so that your audience remembers both your message and your presence.",
    features: [
      "A thoughtful format for discussing ideas in depth",
      "Supports book launches and speaking visibility",
      "Stronger emotional and intellectual connection",
      "A premium content asset for ongoing promotion",
    ],
    idealFor: [
      "Authors",
      "Public speakers",
      "Educators and idea-driven thought leaders",
    ],
  },

  entrepreneurs: {
    icon: Briefcase,
    eyebrow: "For entrepreneurs",
    title: "Build trust around the story behind your business",
    short:
      "Share your mission, journey, and business values in a way that creates real audience trust.",
    description:
      "People rarely connect with products alone. They connect with stories, purpose, and the human side of the journey. This format allows entrepreneurs to present the real thinking, challenge, and ambition behind their work while making the brand more relatable and credible.",
    features: [
      "Human-first business storytelling",
      "A stronger founder narrative",
      "Improved trust and positioning with potential clients",
      "A reusable media asset for your brand ecosystem",
    ],
    idealFor: [
      "Founders",
      "Startup leaders",
      "Business owners building personal authority",
    ],
  },

  coaches: {
    icon: Target,
    eyebrow: "For coaches, mentors & experts",
    title: "Position your expertise with clarity and authority",
    short:
      "Present your method, philosophy, and experience in a way that helps people trust your voice.",
    description:
      "For coaches, mentors, and experts, authority is built when people understand not only what you do, but how you think. This platform gives you room to explain your approach, your experience, and the insight behind your work in a more powerful and credible way.",
    features: [
      "Thought leadership positioning",
      "Clear communication of your method",
      "More emotional trust with your audience",
      "Long-form authority-building content",
    ],
    idealFor: [
      "Coaches",
      "Consultants",
      "Mentors and subject-matter experts",
    ],
  },

  corporate: {
    icon: Building,
    eyebrow: "For corporate leaders & professionals",
    title: "Humanise the people and values behind the business",
    short:
      "Create a more human public image by sharing leadership, perspective, and the values behind your work.",
    description:
      "Corporate leaders and professionals often benefit from visibility that feels more personal, thoughtful, and human. This platform allows you to speak beyond job titles and show the values, ideas, and leadership perspective behind your role and organisation.",
    features: [
      "Human-centred executive visibility",
      "A more relatable leadership narrative",
      "Public positioning beyond corporate language",
      "Stronger connection between person and brand",
    ],
    idealFor: [
      "Executives",
      "Corporate leaders",
      "Professionals building public credibility",
    ],
  },
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = SERVICES_MAP[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-28 pb-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/12 bg-white/[0.05] p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <h1 className="font-display text-4xl font-semibold text-white">
              Service not found
            </h1>
            <p className="mt-4 text-white/74">
              The service you are looking for does not exist or is not available.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/services" variant="primary">
                Back to Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.04}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-white/68 transition duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Main */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl"
          >
            <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-red-500/10 to-white/[0.03] p-8 sm:p-10">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
                <Mic2 className="h-4 w-4 text-red-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  {service.eyebrow}
                </span>
              </div>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-red-400">
                <Icon className="h-7 w-7" />
              </div>

              <h1 className="heading-xl mb-5 text-white">{service.title}</h1>

              <p className="max-w-2xl text-body-lg text-white/78">
                {service.short}
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <h2 className="mb-4 font-display text-[2rem] font-semibold text-white">
                About this service
              </h2>

              <p className="mb-8 text-base leading-8 text-white/76">
                {service.description}
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-display text-[1.55rem] font-semibold text-white">
                    What you gain
                  </h3>
                  <div className="space-y-3">
                    {service.features.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-red-400" />
                        <span className="text-white/78">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-[1.55rem] font-semibold text-white">
                    Ideal for
                  </h3>
                  <div className="space-y-3">
                    {service.idealFor.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-red-400" />
                        <span className="text-white/78">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Side CTA */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <p className="eyebrow mb-4">Next step</p>

            <h2 className="heading-lg mb-5 text-white">
              Ready to step into the conversation?
            </h2>

            <p className="mb-8 text-base leading-8 text-white/76">
              If this service fits your story, message, or professional goals,
              the next step is simple: submit your booking request and start the
              process.
            </p>

            <div className="space-y-4">
              <Button to="/book-slot" variant="primary" className="w-full">
                BOOK A PODCAST SLOT
              </Button>

              <Button to="/episodes" variant="secondary" className="w-full">
                Explore Episodes
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.aside>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailPage;