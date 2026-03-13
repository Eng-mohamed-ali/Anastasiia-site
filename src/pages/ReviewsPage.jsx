import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Video,
  MessageCircle,
  ThumbsUp,
  CalendarDays,
  Play,
  Mic2,
  ArrowUpRight,
} from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const videoTestimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    thumbnail: "/thumb1.jpg",
    duration: "3:24",
    quote:
      "Anastasia has a gift for making you feel comfortable and drawing out your best stories.",
  },
  {
    id: 2,
    name: "Lisa Kumar",
    role: "Author",
    thumbnail: "/thumb2.jpg",
    duration: "4:15",
    quote:
      "The most professional podcast experience I've had. The reach was incredible.",
  },
  {
    id: 3,
    name: "David Williams",
    role: "Life Coach",
    thumbnail: "/thumb3.jpg",
    duration: "2:58",
    quote: "My episode opened so many doors. Highly recommended.",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Creative Director",
    thumbnail: "/thumb4.jpg",
    duration: "3:45",
    quote: "Such an authentic conversation. Anastasia really listens.",
  },
  {
    id: 5,
    name: "Omar Hassan",
    role: "Business Consultant",
    thumbnail: "/thumb5.jpg",
    duration: "5:02",
    quote: "The marketing push after the episode was phenomenal.",
  },
];

const textTestimonials = [
  {
    id: 1,
    name: "Jennifer Park",
    role: "Wellness Coach",
    rating: 5,
    date: "March 2024",
    content:
      "Being on Moments with Anastasia was transformative. She created a conversation that felt natural, warm, and strategically strong. The episode brought me meaningful attention and real business value.",
    likes: 45,
  },
  {
    id: 2,
    name: "Robert Taylor",
    role: "Startup Founder",
    rating: 5,
    date: "February 2024",
    content:
      "Anastasia’s marketing background truly shows. She does not just interview you, she helps position your message in a way that lasts beyond the recording.",
    likes: 32,
  },
  {
    id: 3,
    name: "Nadia Petrova",
    role: "Artist",
    rating: 5,
    date: "February 2024",
    content:
      "I was nervous at first, but the experience felt calm, polished, and respectful. The final episode captured my voice beautifully.",
    likes: 28,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Speaker",
    rating: 5,
    date: "January 2024",
    content:
      "The preparation, the quality of questions, and the way the story was framed were all excellent. It felt premium from beginning to end.",
    likes: 39,
  },
  {
    id: 5,
    name: "Fatima Al-Sayed",
    role: "Business Coach",
    rating: 5,
    date: "January 2024",
    content:
      "The studio, the flow, and the final result all exceeded expectations. My episode became a strong part of my brand positioning.",
    likes: 41,
  },
  {
    id: 6,
    name: "Thomas Anderson",
    role: "Tech Executive",
    rating: 5,
    date: "December 2023",
    content:
      "Anastasia brings out the human side of business. The conversation added depth to my public image in a way short-form content never could.",
    likes: 27,
  },
  {
    id: 7,
    name: "Grace Lee",
    role: "Fashion Designer",
    rating: 5,
    date: "December 2023",
    content:
      "The attention to detail was remarkable. From pre-interview preparation to final delivery, everything felt intentional and high quality.",
    likes: 33,
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

const ReviewsPage = () => {
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
              Guest experience
            </span>
          </div>

          <h1 className="heading-xl text-white md:heading-display mb-5">
            Reviews & testimonials
          </h1>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            Real feedback from guests who used the platform to share their
            story, strengthen their brand, and create deeper audience
            connection.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/78">
              <Video className="h-4 w-4 text-red-400" />
              {videoTestimonials.length} video testimonials
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/78">
              <MessageCircle className="h-4 w-4 text-red-400" />
              {textTestimonials.length} written testimonials
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-4 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#c6a96b] text-[#c6a96b]" />
              ))}
            </div>
            <span className="font-medium text-white">5.0 rating</span>
            <span className="text-white/55">
              ({textTestimonials.length + videoTestimonials.length} reviews)
            </span>
          </div>
        </motion.div>

        {/* Video Testimonials */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.12}
          className="mb-20"
        >
          <h2 className="mb-8 font-display text-[2.2rem] font-semibold text-white">
            Video testimonials
          </h2>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">
            {videoTestimonials.map((video, index) => (
              <motion.article
                key={video.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.16 + index * 0.04}
                className="group"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-white/[0.05] via-red-500/10 to-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_18%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-white/90 text-red-500 shadow-[0_16px_50px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-105">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-xs text-white backdrop-blur-md">
                      {video.duration}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-white">{video.name}</h3>
                  <p className="mt-1 text-xs text-white/55">{video.role}</p>
                  <p className="mt-3 text-xs leading-6 text-white/68">
                    “{video.quote}”
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Written Testimonials */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <h2 className="mb-8 font-display text-[2.2rem] font-semibold text-white">
            Written testimonials
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {textTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.22 + index * 0.04}
                className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#c6a96b] text-[#c6a96b]" />
                  ))}
                </div>

                <div className="relative mb-5">
                  <Quote className="absolute -left-1 -top-2 h-8 w-8 text-red-400/25" />
                  <p className="relative z-10 pl-4 text-sm leading-7 text-white/76">
                    {testimonial.content}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-white/55">{testimonial.role}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/52">
                      <CalendarDays className="h-4 w-4" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-white/55">
                    <ThumbsUp className="h-4 w-4 text-red-400" />
                    <span>{testimonial.likes} people found this helpful</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.46}
          className="mt-20 rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.08] via-red-500/10 to-white/[0.03] p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
          <h2 className="heading-lg mb-4 text-white">
            Ready to share your story?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body text-white/78">
            Join other guests who used the platform to create visibility,
            credibility, and a more powerful public narrative.
          </p>
          <Button to="/book-slot" variant="primary" className="min-w-[220px]">
            BOOK A PODCAST SLOT
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default ReviewsPage;