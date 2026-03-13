import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Calendar,
  Clock3,
  User,
  Mail,
  Phone,
  Instagram,
  MessageSquare,
  CheckCircle2,
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

const BookSlotPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 text-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.04}
          className="mx-auto max-w-5xl"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <Mic2 className="h-4 w-4 text-red-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Booking request
              </span>
            </div>

            <h1 className="heading-xl text-white md:heading-display mb-5">
              Book your podcast slot
            </h1>

            <p className="mx-auto max-w-3xl text-body-lg text-white/78">
              If you have a meaningful story, message, expertise, or brand to
              share, submit your request and take the first step toward a
              premium conversation.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/10 p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/15">
                  <CheckCircle2 className="h-10 w-10 text-emerald-300" />
                </div>

                <h2 className="font-display text-4xl font-semibold text-white">
                  Booking request sent
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/78">
                  Thank you for your interest. Your request has been received,
                  and we will contact you within 24 hours to discuss the next
                  step.
                </p>

                <div className="mt-8">
                  <Button to="/" variant="secondary">
                    Return to Home
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-10"
              >
                <div className="mb-8">
                  <p className="eyebrow mb-3">Application form</p>
                  <h2 className="font-display text-[2rem] font-semibold leading-tight text-white sm:text-[2.4rem]">
                    Tell us about yourself and your story
                  </h2>
                  <p className="mt-3 text-base leading-8 text-white/74">
                    Share a few details and your preferred timing. We will
                    review your request and reply as soon as possible.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <User className="mr-2 inline h-4 w-4 text-red-400" />
                      What is your name?
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Gold"
                      required
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <Mail className="mr-2 inline h-4 w-4 text-red-400" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <Phone className="mr-2 inline h-4 w-4 text-red-400" />
                      Phone number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-2xl border border-r-0 border-white/16 bg-white/[0.05] px-4 text-white/60">
                        +971
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="50 123 4567"
                        className="form-field rounded-l-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <Instagram className="mr-2 inline h-4 w-4 text-red-400" />
                      Instagram
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-2xl border border-r-0 border-white/16 bg-white/[0.05] px-4 text-white/60">
                        @
                      </span>
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="instagram.account"
                        className="form-field rounded-l-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <Calendar className="mr-2 inline h-4 w-4 text-red-400" />
                      Preferred date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      <Clock3 className="mr-2 inline h-4 w-4 text-red-400" />
                      Preferred time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="form-field"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 3PM)</option>
                      <option value="evening">Evening (3PM - 6PM)</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-white/88">
                    <MessageSquare className="mr-2 inline h-4 w-4 text-red-400" />
                    Tell us about yourself and your podcast idea
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    required
                    className="form-field resize-none"
                  />
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg
                          className="h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        BOOK A PODCAST SLOT
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
};

export default BookSlotPage;