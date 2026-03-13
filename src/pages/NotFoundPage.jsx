import React from "react";
import { motion } from "framer-motion";
import { Home, Mic2, ArrowUpRight } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        <div className="flex min-h-[70vh] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-12 sm:py-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.1),transparent_24%)]" />
            <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/10 blur-[90px]" />

            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]">
                  <Mic2 className="h-10 w-10 text-red-400" />
                  <motion.div
                    animate={{
                      scale: [1, 1.18, 1.36],
                      opacity: [0.18, 0.08, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-red-400/30"
                  />
                </div>
              </div>

              <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/48">
                Lost page
              </p>

              <h1 className="font-display text-[5rem] font-semibold leading-none text-white sm:text-[6.5rem]">
                404
              </h1>

              <h2 className="mt-4 font-display text-[2rem] font-semibold text-white sm:text-[2.5rem]">
                Page not found
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
                The page you are looking for does not exist, may have moved, or
                is no longer available. Let’s bring you back to the main story.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button to="/" variant="primary">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>

                <Button to="/episodes" variant="secondary">
                  Explore Episodes
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;