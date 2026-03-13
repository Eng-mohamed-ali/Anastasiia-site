import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

const overlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.22 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18 },
  },
};

const panel = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const PrivacyPolicyModal = ({ onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const sectionTitleClass =
    "font-display text-[1.65rem] font-semibold leading-tight text-white mt-8 mb-4";
  const paragraphClass = "text-sm leading-7 text-white/76";
  const strongClass = "font-semibold text-white/92";
  const listClass = "ml-5 list-disc space-y-2 text-sm leading-7 text-white/76";

  return (
    <motion.div
      variants={overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 p-4 backdrop-blur-md"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Privacy Policy"
    >
      <motion.div
        variants={panel}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b0b0c] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-white/[0.06] via-red-500/10 to-white/[0.04] px-6 py-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-red-400">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                Legal
              </p>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-[2rem]">
                Privacy Policy
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/80 transition duration-300 hover:bg-white/[0.08] hover:text-white"
            aria-label="Close privacy policy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <p className={paragraphClass}>
              All information provided by users of the website{" "}
              <span className={strongClass}>www.anastasiia-solodovnyk.com</span>{" "}
              is processed in accordance with this Privacy Policy.
            </p>

            <h3 className={sectionTitleClass}>1. Terms</h3>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.1. Administrator of the Site:</span>{" "}
              Anastasiia Solodovnyk, authorised to manage the website, process
              personal data, and determine the purposes and methods of such
              processing.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.2. Personal data:</span>{" "}
              information or a set of information about an individual who is
              identified or can be identified.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.3. Processing of personal data:</span>{" "}
              any action performed with personal data, including collection,
              storage, updating, use, transfer, or deletion, with or without
              automation tools.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.4. Confidentiality of personal data:</span>{" "}
              the obligation to prevent disclosure without the user’s consent or
              another lawful basis.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.5. User:</span> a person who has
              access to the website via the internet and uses the site.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.6. Cookies:</span> small data
              files stored on the user’s device to improve site performance.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.7. IP address:</span> a unique
              network address of a node in a computer network built using the IP
              protocol.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.8. The Site:</span> the website{" "}
              <span className={strongClass}>www.anastasiia-solodovnyk.com</span>.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.9. Operator:</span> the official
              representative of the website, Anastasiia Solodovnyk. The user may
              contact the operator by phone at{" "}
              <span className={strongClass}>+971 55 706 5616</span> and/or by
              email at{" "}
              <span className={strongClass}>anastasiya.solodovnyk@gmail.com</span>.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.10. Order:</span> services
              requested by the customer through the website.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.11. Customer:</span> a natural
              person who accepts the site terms and places an order for personal
              or household needs.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.12. Services:</span> services
              available for ordering through the site.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.13. Performer:</span> the website
              operated by Anastasiia Solodovnyk.
            </p>

            <p className={paragraphClass}>
              <span className={strongClass}>1.1.14. Company:</span> Anastasiia
              Solodovnyk, registered in the United Arab Emirates.
            </p>

            <h3 className={sectionTitleClass}>2. General Provisions</h3>

            <p className={paragraphClass}>
              2.1. Use of the website constitutes acceptance of this Policy and
              the terms of processing of personal data.
            </p>

            <p className={paragraphClass}>
              2.2. If the user disagrees with this Policy, use of the website
              must be discontinued.
            </p>

            <p className={paragraphClass}>
              2.3. This Policy applies only to{" "}
              <span className={strongClass}>www.anastasiia-solodovnyk.com</span>.
              The website is not responsible for third-party sites accessed
              through external links.
            </p>

            <p className={paragraphClass}>
              2.4. The site administration does not verify the authenticity of
              personal data provided by the user.
            </p>

            <p className={paragraphClass}>
              2.5. Electronic communication between the user and the site may be
              treated as legally significant communication where applicable by
              law.
            </p>

            <h3 className={sectionTitleClass}>3. Subject of the Policy</h3>

            <p className={paragraphClass}>
              3.1. This Policy establishes the obligations of the administration
              to ensure confidentiality and non-disclosure of personal data
              provided by the user.
            </p>

            <p className={paragraphClass}>
              3.2. Personal data that may be processed includes:
            </p>

            <ul className={listClass}>
              <li>Full name</li>
              <li>Contact phone number</li>
              <li>Email address</li>
            </ul>

            <p className={paragraphClass}>
              3.3. Automatically collected data may include:
            </p>

            <ul className={listClass}>
              <li>IP address</li>
              <li>Cookies</li>
              <li>Browser and device details</li>
              <li>Access times</li>
              <li>Referrer pages</li>
            </ul>

            <p className={paragraphClass}>
              3.3.1. Disabling cookies may limit access to some site features.
            </p>

            <p className={paragraphClass}>
              3.3.2. Technical and analytics data may be used for site
              improvement, fraud prevention, and troubleshooting.
            </p>

            <h3 className={sectionTitleClass}>4. Purpose of Collecting Data</h3>

            <p className={paragraphClass}>
              Personal data may be used for the following purposes:
            </p>

            <ul className={listClass}>
              <li>Identifying the user for service provision</li>
              <li>Communicating about requests and services</li>
              <li>Processing and verifying transactions</li>
              <li>Providing support and updates</li>
              <li>Sending newsletters or offers where permitted</li>
              <li>Ensuring site security and preventing fraud</li>
            </ul>

            <h3 className={sectionTitleClass}>5. Processing and Storage</h3>

            <p className={paragraphClass}>
              5.1. Data may be processed using lawful methods in accordance with
              applicable law.
            </p>

            <p className={paragraphClass}>
              5.2. Data may be shared with third parties only where reasonably
              necessary to provide services or operate the website.
            </p>

            <p className={paragraphClass}>
              5.3. Data may be disclosed to competent authorities where required
              by law.
            </p>

            <p className={paragraphClass}>
              5.4. In the event of data loss or unauthorised disclosure, the
              user may be notified where appropriate.
            </p>

            <p className={paragraphClass}>
              5.5. Reasonable technical and organisational safeguards are used
              to protect personal data.
            </p>

            <h3 className={sectionTitleClass}>6. Rights and Obligations</h3>

            <p className={paragraphClass}>
              Users should provide accurate information and update it where
              necessary. The administration undertakes to use personal data only
              for stated purposes and to help protect it against unauthorised
              access.
            </p>

            <h3 className={sectionTitleClass}>7. Liability</h3>

            <p className={paragraphClass}>
              The administration may be liable for misuse of personal data in
              accordance with applicable law, except where:
            </p>

            <ul className={listClass}>
              <li>The user consented to disclosure</li>
              <li>The data was lawfully obtained from third parties</li>
              <li>The data had already become public</li>
            </ul>

            <h3 className={sectionTitleClass}>8. Dispute Resolution</h3>

            <p className={paragraphClass}>
              8.1. A pre-trial claim procedure may be required before court
              proceedings.
            </p>

            <p className={paragraphClass}>
              8.2. Claims may be reviewed within 30 calendar days.
            </p>

            <p className={paragraphClass}>
              8.3. Unresolved disputes may be subject to the jurisdiction of the
              courts of the United Arab Emirates.
            </p>

            <p className={paragraphClass}>
              8.4. Applicable law: federal laws of the United Arab Emirates.
            </p>

            <h3 className={sectionTitleClass}>9. Administration Details</h3>

            <p className={paragraphClass}>
              <span className={strongClass}>Administrator / Company:</span>{" "}
              Anastasiia Solodovnyk
            </p>
            <p className={paragraphClass}>
              <span className={strongClass}>Country of Registration:</span>{" "}
              United Arab Emirates
            </p>
            <p className={paragraphClass}>
              <span className={strongClass}>Identification / License:</span> N/A
              (individual)
            </p>
            <p className={paragraphClass}>
              <span className={strongClass}>Phone:</span> +971 55 706 5616
            </p>
            <p className={paragraphClass}>
              <span className={strongClass}>Email:</span>{" "}
              anastasiya.solodovnyk@gmail.com
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicyModal;