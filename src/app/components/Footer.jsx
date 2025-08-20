'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Initialize intersection observer for animation
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>AGI Money</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* Start Home Section */}
      {/* <section className="home1 mobile p-50 agmob parent-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="content">
                      <h3>Making any day <br />a pay day</h3>
                      <p>AGI Money - India's integrated Earnings on Demand platform.<br />Download the mobile app and access your earnings, today.<br />Now on iOS and Android.</p>
                      <ul className="d-flex">
                        <li>
                          <Link href="#!">
                            <Image 
                              src="/assets/images/home1/banner/applestore.png" 
                              alt="Apple Store"
                              width={150}
                              height={50}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#!">
                            <Image 
                              src="/assets/images/home1/banner/playstore.png" 
                              alt="Play Store"
                              width={150}
                              height={50}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="col-lg-4" style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}>
                      <div>
                        <Image 
                          src="/assets/images/9.png" 
                          alt="Mobile" 
                          className="mobwe bottom-image-bottom shadow-left" 
                          width={300}
                          height={600}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Home Section */}

      {/* Start Footer Area */}
      <footer className="custom-footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Logo + Partner Info */}
            <div className="footer-column company-info">
              <div className="logo-block">
                <Image 
                  src="/assets/images/Frame 6.png" 
                  alt="AGI Money" 
                  className="footer-logo"
                  width={150}
                  height={50}
                />
              </div>
              <div className="partner-card">
                <strong>NBFC Partner</strong><br />
                SURMIT INVESTMENT PRIVATE LIMITED<br />
                RBI COR: B-06.00615
              </div>
              <div className="footer-socials">
                <a href="#" className="social-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-circle">
                  <span className="icon-default">
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "-3px" }}>
                      <path d="M4 20.7877C4 24.5876 7.08238 27.67 10.8823 27.67H20.4577C24.2576 27.67 27.34 24.5876 27.34 20.7877V11.2123C27.34 7.41236 24.2576 4.32999 20.4577 4.32999H10.8823C7.08238 4.32999 4 7.41236 4 11.2123V20.7877ZM21.9538 8.51922C22.7919 8.51922 23.45 9.17729 23.45 10.0154C23.45 10.8535 22.7919 11.5115 21.9538 11.5115C21.1158 11.5115 20.4577 10.8535 20.4577 10.0154C20.4577 9.17729 21.1158 8.51922 21.9538 8.51922ZM15.67 10.3146C18.8119 10.3146 21.3554 12.8581 21.3554 16C21.3554 19.1419 18.8119 21.6854 15.67 21.6854C12.5281 21.6854 9.98462 19.1419 9.98462 16C9.98462 12.8581 12.5281 10.3146 15.67 10.3146Z" fill="#fff"/>
                      <path d="M19.5613 16C19.5613 18.1484 17.8196 19.89 15.6713 19.89C13.5229 19.89 11.7812 18.1484 11.7812 16C11.7812 13.8516 13.5229 12.11 15.6713 12.11C17.8196 12.11 19.5613 13.8516 19.5613 16Z" fill="#fff"/>
                    </svg>
                  </span>
                </a>
                <a href="#" className="social-circle">
                  <span className="icon-default">
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.06068 4L13.6887 16.8733L4 27.34H6.18071L14.6633 18.1761L21.5168 27.34H28.9373L18.7674 13.7427L27.7857 4H25.605L17.7932 12.4395L11.4812 4H4.06068Z" fill="#fff"/>
                    </svg>
                  </span>
                </a>
                <a href="#" className="social-circle">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-column">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/product">Our Product</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Get In Touch</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="footer-column">
              <h5 className="footer-title">Policies</h5>
              <ul className="footer-links">
                <li><Link href="/Grievance">Grievance Redressal</Link></li>
                <li><Link href="/terms">Terms & Condition</Link></li>
                <li><Link href="/privacypolicy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h5 className="footer-title">Contact Us</h5>
              <p style={{ color: "white" }}><i className="fas fa-envelope"></i> contact@agimoneey.com</p>
              <p style={{ color: "white" }}><i className="fas fa-phone-alt"></i> +91 9953616633</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© 2025 AGI Money. All Rights Reserved.</p>
            <p className="cin">CIN: U64990DL1996PTC079056</p>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}

      <style jsx global>{`
        ul.d-flex {
          display: flex;
          gap: 15px;
        }

        /* Mobile view — stacked vertically */
        @media (max-width: 767.98px) {
          ul.d-flex {
            flex-direction: column;
            align-items: flex-start; /* Optional: align to left */
            gap: 10px;               /* Optional: spacing between buttons */
          }
        }

        /* Custom Footer Styles */
        .custom-footer {
          background-color: #111;
          color: #ccc;
          font-family: 'Poppins', sans-serif;
          padding: 54px 20px 30px;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-title {
          color: #fff;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 9px;
        }

        .footer-links li a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-links li a:hover {
          color: #f0c040;
        }

        .footer-logo {
          width: 150px;
          margin-bottom: 20px;
        }

        .partner-card {
          background-color: #1a1a1a;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #eee;
          margin-bottom: 20px;
          border: 1px solid #2a2a2a;
        }

        .footer-socials {
          margin-top: 12px;
        }

        .footer-socials .social-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #2fa62b;
          color: #ffffff;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          margin: 0 5px;
          font-size: 16px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .footer-socials .social-circle:hover {
          background-color: #1e7e34;
          transform: scale(1.05);
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #888;
        }

        .footer-bottom .cin {
          text-align: right;
        }

        /* Mobile Responsive Styles */
        @media (min-width: 320px) and (max-width: 480px) {
          .home1.mobile .content {
            padding: 14px 15px 60px 25px;
          }

          .header-menu #menu-button {
            background: #f4b655;
          }

          .mobwe {
            margin-top: -20px;
          }

          .custom-footer {
            padding: 40px 20px 30px;
          }

          .footer {
            margin-top: -30px;
          }

          .footer-title,
          .footer-links {
            margin-left: 0;
          }

          .footer-bottom {
            display: block;
          }

          .footer-socials {
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .agmob {
            padding-top: 50px;
          }
        }
        .parent-bottom {
          position: relative;
        }

        /* Mobile: Only controls width */
        @media (max-width: 767px) {
          .bottom-image-bottom {
            width: 150px;
            position: absolute; /* Optional: if you want it to follow flow on mobile */
            height: auto;     /* Optional: reset height if needed */
            right: 15px;      /* Optional: reset right if needed */
            bottom: 0;     /* Optional: reset bottom if needed */
          }
        }

        /* Tablet and Desktop: Full styling */
        @media (min-width: 768px) {
          .bottom-image-bottom {
            position: absolute;
            bottom: 0;
            right: 4%;
            height: 120%;
            width: auto; /* Optional: reset width for desktop */
          }
        }
        
        .custom-footer {
          position: relative;
          z-index: 1;
          background: #111; /* or your footer bg */
          padding-top: 170px; /* create space for overlap */
        }

        .parent-bottom {
          position: relative;
          z-index: 2;
          margin-bottom: -96px; /* pull bottom 1 inch over footer */
        }
      `}</style>
    </>
  );
}