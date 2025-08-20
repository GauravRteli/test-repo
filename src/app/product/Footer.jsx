import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Banner from "./Banner";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-sans mt-96 pt-14 pb-8 px-5 relative">
      <div className="absolute -top-[50%] left-[20%]">
        <Banner />
      </div>
      <div className="max-w-6xl mt-8 p-8 mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo + Partner Info Column */}
          <div className="flex flex-col gap-4">
            <div className="mb-5">
              <img
                src="/assets/images/Frame 6.png"
                alt="AGI Money"
                className="w-38 h-auto"
              />
            </div>

            {/* Partner Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm text-gray-200 mb-5">
              <div className="font-semibold mb-1">NBFC Partner</div>
              <div>SURMIT INVESTMENT PRIVATE LIMITED</div>
              <div>RBI COR: B-14.02076</div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 mt-3">
              <a
                href="#"
                className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#"
                className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Instagram size={16} />
              </a>

              <a
                href="#"
                className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Twitter size={16} />
              </a>

              <a
                href="#"
                className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Youtube size={16} />
              </a>

              <a
                href="#"
                className="w-7 h-7 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Company Links Column */}
          <div className="flex flex-col">
            <h5 className="text-white font-semibold mb-3 text-base">Company</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Our Product
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="flex flex-col">
            <h5 className="text-white font-semibold mb-3 text-base">
              Policies
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/grievance"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-white text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col">
            <h5 className="text-white font-semibold mb-3 text-base">
              Contact Us
            </h5>
            <div className="space-y-2">
              <p className="text-white text-sm flex items-center gap-2">
                <Mail size={16} />
                contact@agimoneey.com
              </p>
              <p className="text-white text-sm flex items-center gap-2">
                <Phone size={16} />
                +91 9953616633
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 AGI Money. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">CIN: U64990DL1996PTC079056</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
