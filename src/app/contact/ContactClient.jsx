"use client";

import { useState } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        first_name: formData.name, // mapping fields
        middle_name: "",
        last_name: "",
        job_title: "",
        company_size: "",
        company_name: formData.company,
        phone_number: formData.mobile,
        work_email: formData.email,
        message: formData.message,
        how_you_are: "",
        designation: "",
        type_of: "website",
      };

      const res = await fetch("https://devapi.agimoneey.com/enquiries/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json(); // 👈 parse response JSON
      console.log("API Response:", data); // 👈 print response in console

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ScrollProgressBar />
      <Head>
        <title>Contact - AGI Moneey</title>
        <meta
          name="description"
          content="Contact AGI Moneey for support or schedule a demo. Get in touch with our team for earnings on demand solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      {/* --- your existing UI --- */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* left content unchanged */}
            <div className="w-full xl:w-1/2 border-b xl:border-b-0 xl:border-r border-gray-200 pb-8 sm:pb-10 md:pb-12 xl:pb-0 xl:pr-8 lg:pr-10 xl:pr-12">
              <motion.div
                className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                initial={{ opacity: 0, y: 50 }} // start invisible and 50px below
                animate={{ opacity: 1, y: 0 }} // animate to fully visible at original position
                transition={{ duration: 0.6, ease: "easeOut" }}
                // Animate only on the first mount (default behavior)
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  Existing User Support
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                  Facing issues or need guidance? We&apos;re just a message
                  away!
                </p>
              </motion.div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                {/* Phone Contact */}
                <div className="flex items-start sm:items-center animate__animated animate__fadeInRight group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 mr-4 sm:mr-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      Contact Number
                    </h5>
                    <a
                      href="tel:+919953616633"
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 hover:text-[#f2ab3c] transition-colors duration-300 break-all sm:break-normal"
                    >
                      +91 9953616633
                    </a>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start sm:items-center animate__animated animate__fadeInRight group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 mr-4 sm:mr-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      For Support
                    </h5>
                    <a
                      href="mailto:support@agimoneey.com"
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 hover:text-[#f2ab3c] transition-colors duration-300 break-all sm:break-normal"
                    >
                      support@agimoneey.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                <h6 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center xl:text-left">
                  Follow Us
                </h6>
                <div className="flex justify-center xl:justify-start flex-wrap gap-3 sm:gap-4 md:gap-5 animate__animated animate__fadeInUp">
                  {[
                    {
                      icon: faFacebookF,
                      href: "https://www.facebook.com/profile.php?id=61576157237828",
                      label: "Facebook",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: faInstagram,
                      href: "https://www.instagram.com/agimoneey/",
                      label: "Instagram",
                      color: "hover:bg-pink-600",
                    },
                    {
                      icon: faTwitter,
                      href: "https://x.com/AGIMoneey",
                      label: "Twitter",
                      color: "hover:bg-blue-500",
                    },
                    {
                      icon: faYoutube,
                      href: "https://www.youtube.com/@AGIMoneey",
                      label: "YouTube",
                      color: "hover:bg-red-600",
                    },
                    {
                      icon: faLinkedinIn,
                      href: "https://www.linkedin.com/company/agi-moneey?originalSubdomain=in",
                      label: "LinkedIn",
                      color: "hover:bg-blue-700",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      className={`group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-gray-200 rounded-full text-[#f2ab3c] hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-sm sm:text-base md:text-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Demo Form Section */}
            <div className="w-full xl:w-1/2 flex flex-col justify-center xl:pl-8 lg:pl-10 xl:pl-12 animate__animated animate__fadeInLeft">
              {submitted ? (
                // ✅ Show only thank-you box
                <div className="text-[#f2ab3c] text-center bg-gradient-to-r from-[#f2ab3c]/10 to-[#f2ab3c]/20 border border-[#f2ab3c] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-xl lg:rounded-2xl font-semibold shadow-lg animate__animated animate__fadeIn">
                  <div className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <i className="fas fa-check-circle text-[#f2ab3c] mb-2 sm:mb-4"></i>
                    <div>Thank you!</div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                // ✅ Show heading + form before submission
                <>
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      Let&apos;s Schedule A Demo
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-3 sm:mb-4">
                      What to expect in a demo:
                    </p>
                    <ul className="space-y-2 list-disc pl-4 sm:pl-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                      <li>
                        Learn how AGI Moneey can improve employee retention,
                        productivity, and more.
                      </li>
                      <li>
                        Get your &ldquo;Earnings on Demand&rdquo; questions
                        answered 1-on-1.
                      </li>
                    </ul>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                      {
                        name: "name",
                        type: "text",
                        placeholder: "Name*",
                        required: true,
                      },
                      {
                        name: "email",
                        type: "email",
                        placeholder: "Email*",
                        required: true,
                      },
                      {
                        name: "mobile",
                        type: "tel",
                        placeholder: "Mobile*",
                        required: true,
                      },
                      {
                        name: "company",
                        type: "text",
                        placeholder: "Company Name*",
                        required: true,
                      },
                      {
                        name: "message",
                        type: "text",
                        placeholder: "How Can We Help*",
                        required: true,
                      },
                    ].map((field, index) => (
                      <div key={index} className="relative group">
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-all duration-300 group-hover:border-gray-400"
                          placeholder={field.placeholder}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f2ab3c] transition-all duration-300 group-focus-within:w-full"></div>
                      </div>
                    ))}
                    <div className="pt-6">
                      <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left leading-relaxed">
                        By submitting this form, you agree to our
                        <a
                          href="/privacypolicy"
                          className="text-[#f2ab3c] hover:underline ml-1"
                        >
                          Privacy Policy
                        </a>{" "}
                        and
                        <a
                          href="/terms"
                          className="text-[#f2ab3c] hover:underline ml-1"
                        >
                          Terms of Service
                        </a>
                        .
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pb-6 md:pb-8">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#f2ab3c] text-black px-6 sm:px-8 md:px-10 py-3 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#f2ab3c]/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        aria-label="Request a demo from AGI Moneey"
                      >
                        <span className="relative">
                          {loading ? (
                            <>
                              <i className="fas fa-spinner fa-spin mr-2"></i>
                              Sending...
                            </>
                          ) : (
                            "Request A Demo"
                          )}
                        </span>
                        {!loading && (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                            fill="currentColor"
                            viewBox="0 0 19 13"
                          >
                            <path d="M18 5.8a1.2 1.2 0 00-.2-.3l-5-5a1.2 1.2 0 00-1.7 0 1.2 1.2 0 000 1.7l3.3 3.3H1.1A1.1 1.1 0 000 6.1a1.1 1.1 0 001.1 1.1h13.6l-3.3 3.3a1.2 1.2 0 001.7 1.7l5-5a1.2 1.2 0 00.2-1.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
