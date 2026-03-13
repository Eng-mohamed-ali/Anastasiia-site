import React from "react";
import { motion } from "framer-motion";

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

const SectionTitle = ({
  title,
  subtitle,
  description,
  center = true,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
  maxWidth = "max-w-3xl",
}) => {
  return (
    <div
      className={[
        "mb-12",
        maxWidth,
        center ? "mx-auto text-center" : "text-left",
        className,
      ].join(" ")}
    >
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.04}
          className={`eyebrow mb-4 text-white/60 ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        className={`heading-xl text-white ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.16}
          className={`mt-5 text-body text-white/78 ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;