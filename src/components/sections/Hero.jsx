import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Mic, Sparkles } from "lucide-react";
import heroImage from "../../assets/images/hero.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      {/* Real background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Anastasiia Solodovnyk hero background"
          className="h-full w-full object-cover object-[center_20%]"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.76),rgba(0,0,0,0.38),rgba(0,0,0,0.58))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_26%)]" />
        <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />
      </div>

      {/* Ghost word */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-0 flex justify-center">
        <h2 className="select-none text-[4.5rem] font-semibold tracking-[-0.08em] text-white/[0.05] sm:text-[6.5rem] md:text-[9rem] lg:text-[12rem]">
          podcast
        </h2>
      </div>

      <div className="container-premium relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pt-32">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15">
                <Mic className="h-4 w-4 text-red-400" />
              </span>
              <span className="text-sm font-medium text-white/75">
                Podcast host & speaker
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="max-w-[11ch] text-[3.25rem] font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-[4.25rem] md:text-[5.25rem] lg:text-[6.3rem]"
            >
              Moments
              <br />
              <span className="text-white">with</span>
              <br />
              <span className="text-white">Anastasiia</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg"
            >
              Podcast host & speaker Anastasiia Solodovnyk spotlights the
              stories behind success — from entrepreneurs, creatives, coaches,
              and thought leaders who share what it truly takes to grow,
              succeed, and stay resilient.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#book-slot"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-red-400"
              >
                Book a podcast slot
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-red-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="#episodes"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/88 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch episodes
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="mt-12 max-w-xl"
            >
              <p className="text-sm leading-7 text-white/58">
                Dubai-based platform where entrepreneurs, creatives, and
                thought leaders share their real stories.
              </p>
            </motion.div>
          </div>

          {/* Right premium visual with real image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="relative mx-auto hidden w-full max-w-[640px] lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-neutral-950 via-black to-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,55,55,0.18),transparent_20%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,transparent_75%,rgba(255,255,255,0.04))]" />

                <div className="relative min-h-[520px] overflow-hidden sm:min-h-[620px]">
                  <img
                    src={heroImage}
                    alt="Anastasiia Solodovnyk portrait"
                    className="absolute inset-0 h-full w-full object-cover object-[center_12%] scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,60,60,0.18),transparent_18%)]" />

                  <div className="absolute right-5 top-5 z-20 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                      Dubai studio
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/85">
                      Premium podcast experience
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 z-20 max-w-[250px] rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15">
                      <Sparkles className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-sm font-medium leading-6 text-white/85">
                      A platform for meaningful conversations, visibility, and
                      personal-brand authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-2 hidden max-w-[220px] rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md md:block">
              <p className="text-[10px] uppercase tracking-[0.26em] text-white/40">
                featured guests
              </p>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Entrepreneurs, creators, authors, speakers, and corporate
                leaders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
            Scroll
          </span>
          <div className="flex h-12 w-7 justify-center rounded-full border border-white/15">
            <div className="mt-2 h-3 w-1 rounded-full bg-red-400" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;