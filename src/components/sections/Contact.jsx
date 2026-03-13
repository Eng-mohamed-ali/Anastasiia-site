import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
  Mic2,
} from "lucide-react";
import { CONTACT_INFO, COMPANY_INFO } from "../../utils/constants";
import Button from "../common/Button";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please share a short message.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: CONTACT_INFO.instagram,
      href: "https://instagram.com/anastasia.solodovnyk",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT_INFO.location,
    },
    {
      icon: Clock3,
      label: "Working Hours",
      value: COMPANY_INFO.workingHours,
    },
  ];

  return (
    <section
      id="contact"
      className="section-shell premium-noise relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,60,60,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <div className="container-premium relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.05}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <Mic2 className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Book your slot
            </span>
          </div>

          <h2 className="heading-xl text-white md:heading-display mb-5">
            Start the conversation.
          </h2>

          <p className="mx-auto max-w-3xl text-body-lg text-white/78">
            If you have a meaningful story, message, expertise, or perspective
            to share, this is where the next step begins. Submit your details
            and we will review your request with care.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-8"
          >
            <div className="mb-8">
              <p className="eyebrow mb-3">Application form</p>
              <h3 className="font-display text-[2rem] font-semibold leading-tight text-white sm:text-[2.4rem]">
                Tell us about yourself and your story.
              </h3>
              <p className="mt-3 text-base leading-8 text-white/74">
                We usually respond within 24 hours after reviewing your message.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-500/10 p-8 text-center"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/15">
                    <CheckCircle2 className="h-8 w-8 text-emerald-300" />
                  </div>

                  <h4 className="font-display text-3xl font-semibold text-white">
                    Message sent successfully
                  </h4>
                  <p className="mx-auto mt-3 max-w-xl text-white/78">
                    Thank you for reaching out. Your message has been received,
                    and we will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/88">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-field ${
                          formErrors.name ? "border-red-400/80" : ""
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-2 text-sm text-red-300">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/88">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                        className={`form-field ${
                          formErrors.phone ? "border-red-400/80" : ""
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-2 text-sm text-red-300">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={`form-field ${
                        formErrors.email ? "border-red-400/80" : ""
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-sm text-red-300">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your story, expertise, business, or podcast idea..."
                      className={`form-field resize-none ${
                        formErrors.message ? "border-red-400/80" : ""
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-2 text-sm text-red-300">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
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
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.18}
            className="flex flex-col gap-6"
          >
            {/* Main info card */}
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-red-500/20 via-red-500/10 to-white/[0.04] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl">
              <h3 className="mb-6 font-display text-[2rem] font-semibold leading-tight">
                Contact information
              </h3>

              <div className="space-y-4">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/10">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/65">{item.label}</div>
                        <div className="font-medium text-white/95">
                          {item.value}
                        </div>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 transition duration-300 hover:bg-white/[0.09]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Company / process card */}
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow mb-2">Process & details</p>
                  <h3 className="font-display text-[1.8rem] font-semibold text-white">
                    What happens next
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                  <ArrowUpRight className="h-5 w-5 text-red-400" />
                </div>
              </div>

              <div className="space-y-4 text-white/76">
                <p className="leading-7">
                  Once we receive your request, we review your message and reach
                  out with the next steps if the fit is right.
                </p>
                <p className="leading-7">
                  We are looking for stories with depth, insight, purpose, and
                  real human value.
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-sm text-white/68">
                <p>
                  <span className="font-medium text-white/88">Company:</span>{" "}
                  {COMPANY_INFO.name}
                </p>
                <p className="mt-2">
                  <span className="font-medium text-white/88">Registration:</span>{" "}
                  {COMPANY_INFO.registration}
                </p>
                <p className="mt-2">
                  <span className="font-medium text-white/88">License:</span>{" "}
                  {COMPANY_INFO.license}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;