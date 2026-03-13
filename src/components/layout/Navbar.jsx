import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mic, ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "../../utils/constants";

const navReveal = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const dropdownReveal = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const mobileMenuReveal = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const isActivePath = (path) => location.pathname === path;
  const isActiveGroup = (path) => location.pathname.startsWith(path);

  return (
    <motion.header
      variants={navReveal}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-premium">
        <div
          className={`mt-3 transition-all duration-500 ${
            scrolled
              ? "rounded-2xl border border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "rounded-2xl border border-transparent bg-transparent"
          }`}
        >
          <nav className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              className="group relative z-[60] flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-300 group-hover:border-red-400/30 group-hover:bg-white/[0.06]">
                <Mic className="h-5 w-5 text-red-400 transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-semibold leading-tight tracking-[-0.03em] text-white sm:text-lg">
                  Moments with Anastasia
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Podcast · Speaker · Media
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {NAV_ITEMS.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown(activeDropdown === index ? null : index)
                        }
                        className={`group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition duration-300 ${
                          isActiveGroup(item.path) || activeDropdown === index
                            ? "text-white"
                            : "text-white/68 hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition duration-300 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            variants={dropdownReveal}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute left-1/2 top-full mt-5 w-[320px] -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-black/90 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
                          >
                            <div className="space-y-1">
                              {item.dropdown.map((dropdownItem, idx) => (
                                <Link
                                  key={`${dropdownItem.name}-${idx}`}
                                  to={dropdownItem.path}
                                  className="group flex items-start gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05]"
                                >
                                  <span className="mt-0.5 text-lg text-red-400/90">
                                    {dropdownItem.icon}
                                  </span>

                                  <span className="flex flex-col">
                                    <span className="text-sm font-medium text-white/90">
                                      {dropdownItem.name}
                                    </span>
                                    <span className="text-xs leading-5 text-white/45">
                                      Explore this section
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`group relative inline-flex items-center text-sm font-medium uppercase tracking-[0.14em] transition duration-300 ${
                        isActivePath(item.path)
                          ? "text-white"
                          : "text-white/68 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`absolute -bottom-2 left-0 h-px bg-red-400 transition-all duration-300 ${
                          isActivePath(item.path)
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                to="/book-slot"
                className="group inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-red-400"
              >
                <span>Book a podcast slot</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-500 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-md transition duration-300 hover:bg-white/[0.08] lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobileMenuReveal}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden"
              >
                <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-6">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    <div className="space-y-2">
                      {NAV_ITEMS.map((item, index) => (
                        <div
                          key={`${item.name}-${index}`}
                          className="rounded-2xl border border-transparent bg-white/[0.02]"
                        >
                          {item.dropdown ? (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveDropdown(
                                    activeDropdown === index ? null : index
                                  )
                                }
                                className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-sm font-medium uppercase tracking-[0.12em] text-white/82 transition duration-300 hover:bg-white/[0.04]"
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition duration-300 ${
                                    activeDropdown === index ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence>
                                {activeDropdown === index && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-1 px-3 pb-3">
                                      {item.dropdown.map((dropdownItem, idx) => (
                                        <Link
                                          key={`${dropdownItem.name}-${idx}`}
                                          to={dropdownItem.path}
                                          onClick={() => {
                                            setIsOpen(false);
                                            setActiveDropdown(null);
                                          }}
                                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                                        >
                                          <span className="text-red-400/90">
                                            {dropdownItem.icon}
                                          </span>
                                          <span>{dropdownItem.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className={`block rounded-2xl px-4 py-4 text-sm font-medium uppercase tracking-[0.12em] transition duration-300 ${
                                isActivePath(item.path)
                                  ? "bg-white/[0.05] text-white"
                                  : "text-white/75 hover:bg-white/[0.04] hover:text-white"
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4">
                      <Link
                        to="/book-slot"
                        onClick={() => setIsOpen(false)}
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-red-400"
                      >
                        <span>Book a podcast slot</span>
                        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;