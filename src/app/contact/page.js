'use client';

import { useState } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handles form submission (update with your API call)
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Demo: simulate success
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
    // Replace above with your own API call
  }

  return (
    <>
      <Head>
        <title>Contact - AGI Moneey</title>
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Animate.css for wow-like animation (optional, can remove) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <section className="bg-white py-16 px-2 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-0 gap-12">
            {/* Left: User Support */}
            <div className="lg:w-1/2 w-full border-b lg:border-b-0 lg:border-r border-gray-200 pr-0 lg:pr-12 pb-10 lg:pb-0">
              <div className="mb-8 animate__animated animate__fadeInUp" style={{ animationDelay: "0.3s", animationDuration: "1s" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Existing User Support</h2>
                <p className="text-gray-500">
                  Facing issues or need guidance?<br />
                  We're just a message away!
                </p>
              </div>
              <ul>
                <li className="flex items-center mb-8 animate__animated animate__fadeInRight" style={{ paddingTop: "70px" ,animationDelay: "0.3s", animationDuration: "1s" }}>
                  <div>
                    <svg width="48" height="48" fill="none">paddingTop: "70px"
                      <rect width="47" height="47" rx="4" fill="#6ED4DD" />
                      <path d="M21.7 18.4c-.3-2.8-3.3-4.2-3.4-4.2-.1-.1-.3-.1-.4-.1-3.4.6-3.9 2.6-3.9 2.7 0 .1 0 .2 0 .3 4.1 12.7 12.6 15.1 15.4 15.9.2 0 .4.1.5.1.2.1.4.1.6 0 .1-.1 2.1-1.1 2.6-4.2 0-.1 0-.2 0-.3 0-.1-1-2-3.9-2.7-.1 0-.2 0-.3 0s-.2.1-.2.1c-.9.8-2.2 1.7-2.8 1.8-3.7-1.8-5.8-5.3-5.9-5.9-.1-.4.8-1.7 1.8-2.8.1-.1.1-.2.2-.3 0-.1.1-.2.1-.3z" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h5 className="text-lg font-semibold">Contact Number</h5>
                    <p className="text-base text-gray-700">+91 9953616633</p>
                  </div>
                </li>
                <li className="flex items-center animate__animated animate__fadeInRight" style={{paddingTop: "20px", animationDelay: "0.4s", animationDuration: "1s" }}>
                  <div>
                    <svg width="48" height="48">
                      <rect x="1" y="1" width="46" height="46" rx="4" fill="#A96EDD" />
                      <path d="M15.1 17.8l-1.6-1.2c.4-.3.9-.5 1.4-.5h18c.5 0 1 .2 1.4.5l-1.5 1.2-8.5 6.6c-.3.2-.5.2-.8 0l-8.5-6.6zm20.2.1l-1.5 1.2-8.4 6.6c-.4.4-1 .6-1.5.6s-1.2-.2-1.6-.6l-8.3-6.6-1.5-1.2c-.1.2-.2.5-.2.7v11.5c0 1.3 1.1 2.4 2.5 2.4h18c1.3 0 2.4-1.1 2.4-2.4V18.6c0-.2-.1-.5-.2-.7z" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h5 className="text-lg font-semibold">For Support</h5>
                    <p className="text-base text-gray-700">support@agimoneey.com</p>
                  </div>
                </li>
              </ul>
              {/* Socials */}
              <div className="flex justify-center flex-wrap gap-10 mt-10 animate__animated animate__fadeInUp" style={{marginLeft: "-10px"}}>
                <a href="#" className="flex items-center justify-center w-12 h-12 border rounded-full text-[#f2ab3c] bg-gray-100 hover:bg-[#f2ab3c] hover:text-white transition duration-300">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 border rounded-full text-[#f2ab3c] bg-gray-100 hover:bg-[#f2ab3c] hover:text-white transition duration-300">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
               <a href="#" className="flex items-center justify-center w-12 h-12 border rounded-full text-[#f2ab3c] bg-gray-100 hover:bg-[#f2ab3c] hover:text-white transition duration-300">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
               <a href="#" className="flex items-center justify-center w-12 h-12 border rounded-full text-[#f2ab3c] bg-gray-100 hover:bg-[#f2ab3c] hover:text-white transition duration-300">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
               <a href="#" className="flex items-center justify-center w-12 h-12 border rounded-full text-[#f2ab3c] bg-gray-100 hover:bg-[#f2ab3c] hover:text-white transition duration-300">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
              </div>
            </div>

            {/* Right: Demo Form */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center pl-0 lg:pl-12 animate__animated animate__fadeInLeft" style={{ animationDelay: "0.3s", animationDuration: "1s" }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Schedule A Demo</h2>
              <p className="mb-2 text-gray-800">What to expect in a demo:</p>
              <ul className="mb-5 list-disc pl-6 text-gray-500">
                <li>Learn how AGI Moneey can improve employee retention, productivity, and more.</li>
                <li>Get your "Earnings on Demand" questions answered 1-on-1.</li>
              </ul>
              {submitted ? (
                <div className="text-green-800 text-center bg-green-100 px-6 py-8 rounded-xl font-semibold my-8">
                  <div className="mb-2 text-2xl">Thank you!</div>
                  We'll get back to you within 24 hours.
                </div>
              ) : (
                <form className="space-y-12" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0  text-gray-700 text-lg placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-colors duration-300"
                      placeholder="Name*"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0  text-gray-700 text-lg placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-colors duration-300"
                      placeholder="Email*"
                    />
                  </div>
                  
                  {/* Mobile Field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="mobile" 
                      required 
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0 text-gray-700 text-lg placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-colors duration-300"
                      placeholder="Mobile*"
                    />
                  </div>
                  
                  {/* Company Name Field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="company" 
                      required 
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0  text-gray-700 text-lg placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-colors duration-300"
                      placeholder="Company Name*"
                    />
                  </div>
                  
                  {/* How Can We Help Field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="message" 
                      required 
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0 text-gray-700 text-lg placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#f2ab3c] transition-colors duration-300"
                      placeholder="How Can We Help*"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-8">
                    <button 
                      type="submit" 
                      disabled={loading} 
                      className="inline-flex items-center gap-3 bg-[#F2AB3C] text-black px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {loading ? "Sending..." : "Request A Demo"}
                      <svg width="19" height="13" fill="none" viewBox="0 0 19 13" className="ml-1">
                        <path d="M18 5.8a1.2 1.2 0 00-.2-.3l-5-5a1.2 1.2 0 00-1.7 0 1.2 1.2 0 000 1.7l3.3 3.3H1.1A1.1 1.1 0 000 6.1a1.1 1.1 0 001.1 1.1h13.6l-3.3 3.3a1.2 1.2 0 001.7 1.7l5-5a1.2 1.2 0 00.2-1.5z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

