// contact/page.js (Server Component)
import ContactClient from "./ContactClient";

export const metadata = {
  title: "AGI Moneey - Contact Us",
  description:
    "Transform your financial management with AGI Moneey. Access simplified workforce solutions, seamless salary access, and comprehensive HRMS benefits.",
};

export default function ContactPage() {
  return <ContactClient />;
}
