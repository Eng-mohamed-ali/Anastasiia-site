import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const faqs = [
  {
    category: "Preparation",
    question: "How do I prepare for a podcast episode?",
    answer:
      "Preparing for a podcast is simple. Once your spot is confirmed, we align on the topic and key talking points in advance. You will receive a few guiding questions and helpful tips so you feel confident and relaxed. We recommend staying authentic and simply being yourself. We handle the rest, from recording in our Dubai studio to editing and publishing.",
  },
  {
    category: "About",
    question: "What is your podcast about?",
    answer:
      "Our podcast, recorded and produced in Dubai, features real and meaningful conversations around self-growth, entrepreneurship, creativity, wellness, and personal transformation. Each episode highlights voices that aim to inspire, uplift, and empower listeners.",
  },
  {
    category: "About",
    question: "What makes your podcast unique in the Dubai scene?",
    answer:
      "Unlike typical interview-style shows, our podcast creates a safe space for authentic and deeper conversations. We focus on emotional intelligence, mindset, creativity, and confidence-building, especially for women and rising entrepreneurs in Dubai.",
  },
  {
    category: "Recording",
    question: "How long does the podcast recording usually take?",
    answer:
      "Each session typically lasts between 45 and 60 minutes, including setup, a short warm-up conversation, and the recording itself. We make sure the experience feels smooth, natural, and enjoyable from start to finish.",
  },
  {
    category: "Recording",
    question: "What should I wear for the podcast recording?",
    answer:
      "We suggest wearing something that makes you feel confident and comfortable. Since many episodes are also filmed for YouTube and Instagram, neutral tones or solid colours usually work very well on camera, especially in our studio setup.",
  },
  {
    category: "Eligibility",
    question:
      "Do I need to be a public speaker or influencer to be on the podcast?",
    answer:
      "Not at all. We are here to spotlight real stories from real people. Whether you are a business owner, coach, creative, or simply someone with a story that matters, this platform is for you.",
  },
  {
    category: "General",
    question: "Why is podcasting a powerful method of communication today?",
    answer:
      "Podcasting is one of the most authentic and engaging ways to connect with an audience. Unlike short-form social content, podcasts allow deeper and more meaningful conversations. Whether you are sharing your journey, promoting your brand, or building thought leadership, podcasting helps create trust and emotional connection.",
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const previewFaqs = useMemo(() => faqs.slice(0, 5), []);

  return (
    <section className="section-premium bg-black text-white" id="faq">
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
            <MessageCircleQuestion className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Frequently asked questions
            </span>
          </div>

          <h2 className="heading-xl mb-5 text-white md:heading-display">
            The answers guests usually want before they book
          </h2>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            Here are some of the most common questions about preparation,
            recording, and what to expect from the overall experience.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="mx-auto max-w-4xl space-y-4">
          {previewFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={`${faq.question}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                custom={0.08 + index * 0.04}
                className="overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03] sm:px-7 sm:py-6"
                >
                  <div className="pr-4">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-red-400/90">
                      {faq.category}
                    </span>
                    <span className="font-display text-2xl font-semibold leading-tight text-white sm:text-[1.75rem]">
                      {faq.question}
                    </span>
                  </div>

                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/75">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
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
                        <p className="text-base leading-8 text-white/78">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.34}
          className="mt-14 text-center"
        >
          <Link to="/faq" className="btn-secondary-luxury">
            View all FAQs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;