import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, MessageCircleQuestion } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { CONTACT_INFO } from "../utils/constants";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqs = [
    {
      question: "How do I prepare for a podcast episode?",
      answer:
        "Preparing for a podcast is simple. Once your spot is confirmed, we align on the topic and key talking points in advance. You will receive a few guiding questions and helpful tips so you feel confident and relaxed. We recommend staying authentic and simply being yourself. We handle the rest, from recording in our Dubai studio to editing and publishing.",
      category: "Preparation",
    },
    {
      question: "What is your podcast about?",
      answer:
        "Our podcast, recorded and produced in Dubai, features real and meaningful conversations around self-growth, entrepreneurship, creativity, wellness, and personal transformation. Each episode highlights voices that aim to inspire, uplift, and empower listeners.",
      category: "About",
    },
    {
      question: "What makes your podcast unique in the Dubai scene?",
      answer:
        "Unlike typical interview-style shows, our podcast creates a safe space for authentic and deeper conversations. We focus on emotional intelligence, mindset, creativity, and confidence-building, especially for women and rising entrepreneurs in Dubai.",
      category: "About",
    },
    {
      question: "How long does the podcast recording usually take?",
      answer:
        "Each session typically lasts between 45 and 60 minutes, including setup, a short warm-up conversation, and the recording itself. We make sure the experience feels smooth, natural, and enjoyable from start to finish.",
      category: "Recording",
    },
    {
      question: "What should I wear for the podcast recording?",
      answer:
        "We suggest wearing something that makes you feel confident and comfortable. Since many episodes are also filmed for YouTube and Instagram, neutral tones or solid colours usually work very well on camera, especially in our studio setup.",
      category: "Recording",
    },
    {
      question: "Do I need to be a public speaker or influencer to be on the podcast?",
      answer:
        "Not at all. We are here to spotlight real stories from real people. Whether you are a business owner, coach, creative, or simply someone with a story that matters, this platform is for you.",
      category: "Eligibility",
    },
    {
      question: "Why is podcasting a powerful method of communication today?",
      answer:
        "Podcasting is one of the most authentic and engaging ways to connect with an audience. Unlike short-form social content, podcasts allow deeper and more meaningful conversations. Whether you are sharing your journey, promoting your brand, or building thought leadership, podcasting helps create trust and emotional connection.",
      category: "General",
    },
    {
      question: "Where is your studio located?",
      answer:
        "Our studio is located in the heart of Dubai, easily accessible and equipped with professional audio and video recording equipment. The exact address is shared once your booking is confirmed.",
      category: "Location",
    },
    {
      question: "How do I book a slot?",
      answer:
        "Simply click the booking button, complete the form with your details and your story idea, and we will get back to you within 24 hours to arrange your recording session.",
      category: "Booking",
    },
    {
      question: "What happens after the recording?",
      answer:
        "After recording, the episode is edited, show notes are prepared, and the final content is readied for distribution. We share the final version with you for approval before publishing across major podcast platforms and YouTube.",
      category: "Post-production",
    },
  ];

  const categories = useMemo(
    () => ["All", ...new Set(faqs.map((faq) => faq.category))],
    [faqs]
  );

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    setOpenIndex(filteredFaqs.length ? 0 : null);
  }, [searchTerm, activeCategory, filteredFaqs.length]);

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <MessageCircleQuestion className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Support & answers
            </span>
          </div>

          <h1 className="heading-xl mb-5 text-white md:heading-display">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            Everything you need to know about joining Moments with Anastasia,
            from preparation and recording to booking, publishing, and what to
            expect from the experience.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-10 max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/55" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-field w-full rounded-full py-4 pl-12 pr-5 text-white placeholder:text-white/50"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => {
            const active = activeCategory === category;

            return (
              <button
                key={`${category}-${index}`}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-red-500 text-white shadow-[0_12px_30px_rgba(255,77,77,0.25)]"
                    : "border border-white/14 bg-white/[0.04] text-white/78 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={`${faq.question}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
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
            })
          ) : (
            <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.04] px-6 py-10 text-center">
              <p className="text-white/75">
                No FAQs matched your search. Try another keyword or category.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-12"
        >
          <h2 className="heading-lg mb-4 text-white">Still have questions?</h2>

          <p className="mx-auto mb-8 max-w-2xl text-body text-white/78">
            If you could not find the answer you were looking for, reach out
            directly and we will help you with the next step.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              to="/book-slot"
              variant="primary"
              className="text-sm sm:text-base"
            >
              BOOK A PODCAST SLOT
            </Button>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/[0.08]"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQPage;