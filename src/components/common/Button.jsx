import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Button = ({
  children,
  variant = "primary",
  href,
  to,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-60";

  const variants = {
    primary:
      "bg-red-500 text-white shadow-[0_18px_40px_rgba(255,77,77,0.28)] hover:bg-red-400 hover:shadow-[0_24px_50px_rgba(255,77,77,0.34)]",
    secondary:
      "border border-white/20 bg-white/[0.05] text-white hover:bg-white/[0.08] hover:border-white/30",
    outline:
      "border border-red-400/70 bg-transparent text-red-300 hover:bg-red-500 hover:text-white hover:border-red-500",
    ghost:
      "bg-transparent text-white/85 hover:bg-white/[0.06] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const buttonClass = `${baseStyles} ${variants[variant] || variants.primary} ${
    sizes.md
  } ${className}`;

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.03, y: -1 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  };

  if (to) {
    return (
      <MotionLink to={to} className={buttonClass} {...motionProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;