import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  Play,
  Clock3,
  CalendarDays,
  UserRound,
  Youtube,
  Download,
  Share2,
  Heart,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Mic2,
} from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const EPISODES = [
  {
    id: "1",
    title: "Exploring Family Lineage and Ancestral Roots with Alyona Kovalova",
    duration: "53m 36s",
    guest: "Alyona Kovalova",
    guestTitle: "Genealogist & Family History Expert",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A deep conversation about family history, ancestral connection, identity, and the emotional power of understanding where we come from.",
    longDescription:
      "In this powerful episode, Anastasiia sits down with Alyona Kovalova, a renowned genealogist, to explore the profound impact of understanding our family lineage. They discuss how ancestral knowledge can shape identity, heal generational patterns, and provide a stronger sense of belonging in the modern world.\n\nAlyona also shares practical guidance for starting your own family research, the emotional side of uncovering inherited stories, and why reconnecting with your roots can transform the way you understand yourself today.",
    date: "2024-03-15",
    category: "Personal Growth",
    tags: ["Genealogy", "Family History", "Identity", "Healing"],
    transcript:
      "In this episode, Anastasiia and Alyona explore the emotional and practical side of tracing family roots, understanding inherited stories, and reconnecting with the deeper meaning of identity through ancestry.",
    guestBio:
      "Alyona is a passionate genealogist with years of experience helping people discover their family histories and reconnect with the stories that shaped them.",
  },
  {
    id: "2",
    title: "Balancing Power, Purpose, and Presence with Mariam Farag",
    duration: "53m 36s",
    guest: "Mariam Farag",
    guestTitle: "Leadership & Presence Strategist",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A thoughtful discussion on leadership, authentic presence, and how to stay aligned with purpose while navigating growth.",
    longDescription:
      "In this episode, Anastasiia speaks with Mariam Farag about leadership, feminine strength, visibility, and staying grounded while carrying responsibility. The conversation explores the relationship between personal purpose and public presence.\n\nMariam shares how professionals can lead with clarity without losing authenticity, and why confidence is often built through alignment rather than performance.",
    date: "2024-03-10",
    category: "Leadership",
    tags: ["Leadership", "Presence", "Purpose", "Growth"],
    transcript:
      "Anastasiia and Mariam discuss personal presence, aligned leadership, and the internal work behind strong public confidence.",
    guestBio:
      "Mariam works at the intersection of leadership, presence, and professional confidence, helping people communicate with more clarity and integrity.",
  },
  {
    id: "3",
    title: "Episode with Mr. Dean, Senior Vice President of Hospitality",
    duration: "49m 26s",
    guest: "Mr. Dean",
    guestTitle: "Senior Vice President of Hospitality",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "An inside look into luxury hospitality, leadership, standards, and what excellence looks like behind the scenes.",
    longDescription:
      "This episode offers a rare look inside the world of luxury hospitality. Anastasiia and Mr. Dean talk about leadership, service standards, brand excellence, and how premium guest experiences are built.\n\nThe conversation also explores what it takes to lead large teams while maintaining consistency, trust, and human connection.",
    date: "2024-03-05",
    category: "Business",
    tags: ["Hospitality", "Leadership", "Service", "Excellence"],
    transcript:
      "A conversation on hospitality excellence, team leadership, and how high standards are sustained in demanding service environments.",
    guestBio:
      "Mr. Dean brings extensive executive experience in premium hospitality and is known for his leadership in service excellence and operational quality.",
  },
  {
    id: "4",
    title: "Entrepreneur Mindset: Fear, Healing, and Purpose",
    duration: "56m 03s",
    guest: "Sarah Johnson",
    guestTitle: "Entrepreneur & Founder",
    youtubeUrl: "https://youtube.com/watch?v=...",
    description:
      "A raw and honest conversation about fear, healing, and finding purpose through the emotional reality of entrepreneurship.",
    longDescription:
      "In this conversation, Anastasiia and Sarah Johnson explore the emotional layers of entrepreneurship, including fear, resilience, healing, and purpose. The episode goes beyond strategy to focus on the inner experience of building something meaningful.\n\nIt is a reflective discussion for anyone navigating pressure, ambition, and the personal growth that often comes with entrepreneurship.",
    date: "2024-02-28",
    category: "Entrepreneurship",
    tags: ["Entrepreneurship", "Healing", "Fear", "Purpose"],
    transcript:
      "A conversation about the emotional reality behind entrepreneurship, including fear, self-trust, and purpose-driven growth.",
    guestBio:
      "Sarah is an entrepreneur focused on purpose-led business building and is passionate about the emotional side of leadership and growth.",
  },
];

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

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const EpisodeDetailPage = () => {
  const { id } = useParams();

  const episode =
    EPISODES.find((item) => item.id === String(id)) || EPISODES[0];

  const recommendedEpisodes = EPISODES.filter(
    (item) => item.id !== episode.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        {/* Back */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.04}
          className="mb-8"
        >
          <Link
            to="/episodes"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-white/68 transition duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Episodes
          </Link>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] xl:gap-12">
          {/* Main content */}
          <div>
            {/* Player */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="relative mb-8 aspect-video overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-red-500/15 via-black to-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_18%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,rgba(0,0,0,0.18))]" />

              <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-300 backdrop-blur-md">
                {episode.category}
              </div>

              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-sm text-white shadow-lg backdrop-blur-md">
                <Clock3 className="h-4 w-4 text-white/75" />
                {episode.duration}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={episode.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/14 bg-white/90 text-red-500 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
                >
                  <Play className="ml-1 h-9 w-9 fill-current" />
                </a>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mb-8"
            >
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
                <Mic2 className="h-4 w-4 text-red-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  Episode details
                </span>
              </div>

              <h1 className="mb-5 font-display text-[2.4rem] font-semibold leading-tight text-white sm:text-[3rem]">
                {episode.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-white/62">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(episode.date)}
                </div>

                <div className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  {episode.guest}
                </div>

                <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-white/82">
                  {episode.category}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.16}
              className="mb-8 rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-8"
            >
              <h2 className="mb-5 font-display text-[2rem] font-semibold text-white">
                About this episode
              </h2>

              <p className="whitespace-pre-line text-base leading-8 text-white/78">
                {episode.longDescription}
              </p>
            </motion.section>

            {/* Tags */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mb-8 flex flex-wrap gap-3"
            >
              {episode.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/76"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="flex flex-wrap gap-4"
            >
              <Button href={episode.youtubeUrl} variant="primary">
                <Youtube className="h-4 w-4" />
                Watch on YouTube
              </Button>

              <button type="button" className="btn-secondary-luxury">
                <Download className="h-4 w-4" />
                Download Transcript
              </button>

              <button type="button" className="btn-secondary-luxury">
                <Share2 className="h-4 w-4" />
                Share
              </button>

              <button type="button" className="btn-secondary-luxury">
                <Heart className="h-4 w-4" />
                Like
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guest */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            >
              <h3 className="mb-5 font-display text-[1.7rem] font-semibold text-white">
                About the guest
              </h3>

              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-lg font-semibold text-white/88">
                  {episode.guest.charAt(0)}
                </div>

                <div>
                  <div className="text-lg font-semibold text-white">
                    {episode.guest}
                  </div>
                  <div className="text-sm text-white/62">
                    {episode.guestTitle}
                  </div>
                </div>
              </div>

              <p className="text-sm leading-7 text-white/74">
                {episode.guestBio}
              </p>
            </motion.div>

            {/* Transcript */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.18}
              className="rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-red-400">
                  <FileText className="h-4 w-4" />
                </div>
                <h3 className="font-display text-[1.6rem] font-semibold text-white">
                  Transcript preview
                </h3>
              </div>

              <p className="text-sm leading-7 text-white/74">
                {episode.transcript}
              </p>

              <button
                type="button"
                className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-red-300 transition hover:text-red-200"
              >
                Read full transcript
              </button>
            </motion.div>

            {/* Recommended */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="rounded-[1.8rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            >
              <h3 className="mb-5 font-display text-[1.6rem] font-semibold text-white">
                You might also like
              </h3>

              <div className="space-y-4">
                {recommendedEpisodes.map((item) => (
                  <Link
                    key={item.id}
                    to={`/episodes/${item.id}`}
                    className="group block rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-red-500/10 to-black text-red-400">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="line-clamp-2 text-sm font-medium text-white transition-colors duration-300 group-hover:text-red-300">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-white/52">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/episodes"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-red-300 transition hover:text-red-200"
              >
                View all episodes
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EpisodeDetailPage;