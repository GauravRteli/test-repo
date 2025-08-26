import React from "react";

const Grievance = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[80%] mx-auto">
        <div className="w-full">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Grievance Redressal Mechanism
            </h2>
          </div>

          <p className="text-base leading-relaxed text-[#606060] mb-3">
            AGI Moneey (by Agiwal Fintech Private Limited) is committed to
            resolving user complaints promptly and transparently.
          </p>
          {/* Content Sections */}
          <div className="space-y-2">
            {/* Nodal & Grievance Officers */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#061738] mb-6 text-left">
                1. Nodal & Grievance Officers
              </h2>

              <div className="space-y-1">
                {/* Nodal Officer */}
                <div className="text-base text-[#606060]">
                  <p className="">
                    <strong className="font-bold text-[#606060]">
                      Nodal Officer:
                    </strong>
                  </p>
                  <div className="ml-0 space-y-1">
                    <p>Name: Nisha Saini</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:surmitinvestment91@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        surmitinvestment91@gmail.com
                      </a>
                    </p>
                    <p>Phone: +91 9910883981</p>
                  </div>
                </div>

                {/* Grievance Officer */}
                <div className="text-base text-[#606060]">
                  <p className="">
                    <strong className="font-bold text-[#606060]">
                      Grievance Officer:
                    </strong>
                  </p>
                  <div className="ml-0">
                    <p>Name: Deepak Rawat</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:surmitinvestment@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        surmitinvestment@gmail.com
                      </a>
                    </p>
                    <p>Phone: +91 9953616633</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Raise a Complaint */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#061738] mb-6 text-left">
                2. How To Raise A Complaint
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-base text-[#606060]">
                <li>
                  <div>
                    <strong className="font-bold text-[#606060]">Email:</strong>{" "}
                    Send your complaint to{" "}
                    <a
                      href="mailto:surmitinvestment91@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      surmitinvestment91@gmail.com
                    </a>{" "}
                    with the subject line:{" "}
                    <em>"Complaint – [Your Name] – [User ID]"</em>.
                  </div>
                </li>

                <li>
                  <strong className="font-bold text-[#606060]">Phone:</strong>{" "}
                  Call +91 9953616633 (Monday–Friday, 11:00 AM – 6:00 PM).
                </li>

                <li>
                  <div>
                    <strong className="font-bold text-[#606060]">Post:</strong>
                  </div>
                  <div className="mt-2 ml-0 space-y-1">
                    <p>Agiwal Fintech Private Limited</p>
                    <p>Attn: Grievance Officer</p>
                    <p>Reg Office: 506, 5th Floor, World Trade Centre,</p>
                    <p>Barakhamba Lane, Connaught Place, New Delhi-110001</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Redressal Timeline */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#061738] mb-6 text-left">
                3. Redressal Timeline
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-base text-[#606060]">
                <li>
                  <strong className="font-bold text-[#606060]">
                    Acknowledgement:
                  </strong>{" "}
                  Within 48 hours
                </li>
                <li>
                  <strong className="font-bold text-[#606060]">
                    Resolution:
                  </strong>{" "}
                  Within 30 days (or communicated delay if applicable)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grievance;
