import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap", // ✅ Added for better performance
});

export const metadata = {
  title: "AGI Moneey - Your Financial Solution", // ✅ This will show in browser tab
  description: "AGI Moneey - Your Financial Solution", // ✅ This will be in HTML head for SEO
  icons: {
    icon: "/assets/images/yellow monogram.png", // ✅ Fixed: added leading slash
    shortcut: "/assets/images/yellow monogram.png", // ✅ Fixed: added leading slash
    apple: "/assets/images/yellow monogram.png", // ✅ Fixed: added leading slash
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} font-sans`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
