import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, FileText } from "lucide-react";
import Container from "../components/common/Container";

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

const Terms = () => {
  const sectionTitleClass =
    "font-display text-[1.65rem] font-semibold leading-tight text-white mt-8 mb-4";
  const paragraphClass = "text-sm leading-7 text-white/76";
  const strongClass = "font-semibold text-white/92";
  const listClass = "ml-5 list-disc space-y-2 text-sm leading-7 text-white/76";

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
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <Scale className="h-4 w-4 text-red-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Legal
              </span>
            </div>

            <h1 className="heading-xl text-white md:heading-display mb-5">
              Terms of Use
            </h1>

            <p className="mx-auto max-w-3xl text-body text-white/78">
              These Terms of Use govern access to and use of the website,
              services, and related content provided through this platform.
            </p>
          </div>

          {/* Main content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl"
          >
            <div className="border-b border-white/10 bg-gradient-to-r from-white/[0.06] via-red-500/10 to-white/[0.04] px-6 py-5 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-red-400">
                  <FileText className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">
                    Agreement
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-white sm:text-[2rem]">
                    Website Terms
                  </h2>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="mx-auto max-w-4xl space-y-4">
                <p className={paragraphClass}>
                  By accessing and using{" "}
                  <span className={strongClass}>
                    www.anastasiia-solodovnyk.com
                  </span>
                  , you agree to be bound by these Terms of Use. If you do not
                  agree with these terms, please discontinue use of the website.
                </p>

                <h3 className={sectionTitleClass}>1. Acceptance of Terms</h3>

                <p className={paragraphClass}>
                  By using this website, you confirm that you have read,
                  understood, and accepted these Terms of Use, together with any
                  related policies published on the site.
                </p>

                <h3 className={sectionTitleClass}>2. Use of the Website</h3>

                <p className={paragraphClass}>
                  The website is provided for informational, promotional, and
                  service-related purposes. You agree to use it lawfully and in
                  a way that does not damage, disable, overburden, or impair the
                  platform or interfere with another person’s use of it.
                </p>

                <ul className={listClass}>
                  <li>Use the website only for lawful purposes.</li>
                  <li>
                    Do not attempt to gain unauthorised access to any part of
                    the website or its systems.
                  </li>
                  <li>
                    Do not misuse content, branding, forms, or communication
                    channels provided on the site.
                  </li>
                </ul>

                <h3 className={sectionTitleClass}>3. Services and Content</h3>

                <p className={paragraphClass}>
                  The website may present information about podcast appearances,
                  speaking opportunities, collaborations, media content, and
                  related services. All descriptions, details, and availability
                  may be updated, modified, or removed at any time without prior
                  notice.
                </p>

                <p className={paragraphClass}>
                  Submission of a form or request through the website does not
                  guarantee acceptance, booking, publication, or service
                  approval.
                </p>

                <h3 className={sectionTitleClass}>4. Intellectual Property</h3>

                <p className={paragraphClass}>
                  Unless otherwise stated, all content on this website,
                  including text, branding, graphics, layout, media, and design
                  elements, is owned by or licensed to the site owner and is
                  protected by applicable intellectual property laws.
                </p>

                <ul className={listClass}>
                  <li>
                    You may not copy, reproduce, distribute, republish, or
                    commercially exploit website content without prior written
                    permission.
                  </li>
                  <li>
                    You may not use the brand name, logo, or distinctive visual
                    identity in a misleading or unauthorised way.
                  </li>
                </ul>

                <h3 className={sectionTitleClass}>5. User Submissions</h3>

                <p className={paragraphClass}>
                  If you submit information through forms, booking requests, or
                  contact channels, you agree that the information provided is
                  accurate and does not violate the rights of any third party.
                </p>

                <p className={paragraphClass}>
                  By submitting your information, you acknowledge that your
                  request may be reviewed for business, editorial, or service
                  purposes.
                </p>

                <h3 className={sectionTitleClass}>6. External Links</h3>

                <p className={paragraphClass}>
                  This website may include links to third-party platforms such
                  as Instagram, YouTube, LinkedIn, or other external resources.
                  These links are provided for convenience only. The website is
                  not responsible for the content, availability, or practices of
                  third-party sites.
                </p>

                <h3 className={sectionTitleClass}>7. Limitation of Liability</h3>

                <p className={paragraphClass}>
                  To the fullest extent permitted by law, the website owner
                  shall not be liable for any direct, indirect, incidental,
                  consequential, or special damages arising from or connected to
                  your use of the website, reliance on its content, or inability
                  to access the site.
                </p>

                <p className={paragraphClass}>
                  The website and its content are provided on an “as is” and “as
                  available” basis without warranties of any kind, whether
                  express or implied.
                </p>

                <h3 className={sectionTitleClass}>8. Privacy</h3>

                <p className={paragraphClass}>
                  Personal data submitted through the website is handled in
                  accordance with the site’s Privacy Policy. By using the site,
                  you acknowledge that such processing may occur as described in
                  that policy.
                </p>

                <h3 className={sectionTitleClass}>9. Changes to Terms</h3>

                <p className={paragraphClass}>
                  These Terms of Use may be updated or revised at any time
                  without prior notice. Continued use of the website after
                  changes are posted constitutes acceptance of the updated
                  version.
                </p>

                <h3 className={sectionTitleClass}>10. Governing Law</h3>

                <p className={paragraphClass}>
                  These Terms of Use shall be governed by and interpreted in
                  accordance with the laws of the United Arab Emirates. Any
                  disputes arising in connection with these terms shall be
                  subject to the applicable jurisdiction of the UAE courts,
                  unless otherwise required by law.
                </p>

                <h3 className={sectionTitleClass}>11. Contact Information</h3>

                <p className={paragraphClass}>
                  <span className={strongClass}>Name:</span> Anastasiia
                  Solodovnyk
                </p>
                <p className={paragraphClass}>
                  <span className={strongClass}>Email:</span>{" "}
                  anastasiya.solodovnyk@gmail.com
                </p>
                <p className={paragraphClass}>
                  <span className={strongClass}>Phone:</span> +971 55 706 5616
                </p>
                <p className={paragraphClass}>
                  <span className={strongClass}>Location:</span> Dubai, United
                  Arab Emirates
                </p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-red-400" />
                    <p className="text-sm leading-7 text-white/72">
                      These Terms of Use are provided as a general website legal
                      page. For full legal compliance, business-specific legal
                      review is recommended before publishing.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Terms;