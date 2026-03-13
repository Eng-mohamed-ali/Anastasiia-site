import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  Clock3,
  Youtube,
  CalendarDays,
  UserRound,
  ArrowUpRight,
  Mic2,
} from "lucide-react";
import Container from "../common/Container";

const episodes = [
  {
    id: 1,
    title: "Exploring Family Lineage and Ancestral Roots with Alyona Kovalova",
    duration: "53m 36s",
    guest: "Alyona Kovalova",
    description:
      "A deep conversation about family history, ancestral connection, identity, and the emotional power of understanding where we come from.",
    date: "2024-03-15",
    category: "Personal Growth",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
  {
    id: 2,
    title: "Balancing Power, Purpose, and Presence with Mariam Farag",
    duration: "53m 36s",
    guest: "Mariam Farag",
    description:
      "A thoughtful discussion on leadership, authentic presence, and how to stay aligned with purpose while navigating growth.",
    date: "2024-03-10",
    category: "Leadership",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
  {
    id: 3,
    title: "Episode with Mr. Dean, Senior Vice President of Hospitality",
    duration: "49m 26s",
    guest: "Mr. Dean",
    description:
      "An inside look into luxury hospitality, leadership, standards, and what excellence looks like behind the scenes.",
    date: "2024-03-05",
    category: "Business",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
  {
    id: 4,
    title: "Entrepreneur Mindset: Fear, Healing, and Purpose",
    duration: "56m 03s",
    guest: "Sarah Johnson",
    description:
      "A raw and honest conversation about fear, healing, and finding purpose through the emotional reality of entrepreneurship.",
    date: "2024-02-28",
    category: "Entrepreneurship",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
  {
    id: 5,
    title: "Burnout, Boundaries & Belief: Tania Shin on Redefining Success in Dubai",
    duration: "56m 29s",
    guest: "Tania Shin",
    description:
      "A conversation about burnout, boundaries, ambition, and redefining success in a city that moves fast and demands a lot.",
    date: "2024-02-20",
    category: "Wellness",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
  {
    id: 6,
    title: "Fitness, No Filter: Elizabeth Novik",
    duration: "38m 43s",
    guest: "Elizabeth Novik",
    description:
      "A clear and unfiltered perspective on fitness, health, body image, and staying honest in an image-driven world.",
    date: "2024-02-15",
    category: "Health",
    youtubeUrl: "https://youtube.com/watch?v=...",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
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

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const Episodes = () => {
  const featuredEpisode = episodes[0];
  const secondaryEpisodes = episodes.slice(1, 4);

  return (
    <section className="section-premium bg-black text-white" id="episodes">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.04}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <Mic2 className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Podcast archive
            </span>
          </div>

          <h2 className="heading-xl mb-5 text-white md:heading-display">
            Podcast episodes that create real connection
          </h2>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            Explore conversations with entrepreneurs, creatives, and thought
            leaders sharing lived experience, personal transformation, and the
            stories behind their growth.
          </p>
        </motion.div>

        {/* Top bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.08}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="eyebrow">Latest conversations</p>

          <a
            href="https://youtube.com/@momentswithanastasia"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-luxury"
          >
            <Youtube className="h-4 w-4" />
            Watch on YouTube
          </a>
        </motion.div>

        {/* Featured + side cards */}
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* Featured */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            custom={0.12}
            className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-red-500/20 via-black to-white/[0.04]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_18%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,rgba(0,0,0,0.18))]" />

                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-300 backdrop-blur-md">
                  Featured episode
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-sm text-white shadow-lg backdrop-blur-md">
                  <Clock3 className="h-4 w-4 text-white/75" />
                  {featuredEpisode.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={featuredEpisode.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/14 bg-white/90 text-red-500 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
                  >
                    <Play className="ml-1 h-9 w-9 fill-current" />
                  </a>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white/62">
                  <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
                    {featuredEpisode.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {formatDate(featuredEpisode.date)}
                  </span>
                </div>

                <h3 className="mb-5 font-display text-[2rem] font-semibold leading-tight text-white">
                  {featuredEpisode.title}
                </h3>

                <p className="mb-8 text-base leading-8 text-white/78">
                  {featuredEpisode.description}
                </p>

                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      Guest
                    </p>
                    <p className="font-medium text-white/90">
                      {featuredEpisode.guest}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={featuredEpisode.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-luxury"
                  >
                    Watch on YouTube
                    <Youtube className="h-4 w-4" />
                  </a>

                  <Link
                    to={`/episodes/${featuredEpisode.id}`}
                    className="btn-secondary-luxury"
                  >
                    View details
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Side stack */}
          <div className="grid gap-6">
            {secondaryEpisodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={0.16 + index * 0.05}
                className="group"
              >
                <Link to={`/episodes/${episode.id}`} className="block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/72">
                        {episode.category}
                      </span>

                      <div className="flex items-center gap-1 text-xs text-white/58">
                        <Clock3 className="h-3.5 w-3.5" />
                        {episode.duration}
                      </div>
                    </div>

                    <h3 className="mb-3 font-display text-[1.55rem] font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-red-300">
                      {episode.title}
                    </h3>

                    <p className="mb-5 text-sm leading-7 text-white/72">
                      {episode.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <UserRound className="h-4 w-4 text-red-400" />
                        <span className="font-medium text-white/82">
                          {episode.guest}
                        </span>
                      </div>

                      <Play className="h-4 w-4 text-white/50 transition-colors duration-300 group-hover:text-red-400" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.34}
          className="mt-14 text-center"
        >
          <Link to="/episodes" className="btn-secondary-luxury">
            Explore all episodes
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Episodes;