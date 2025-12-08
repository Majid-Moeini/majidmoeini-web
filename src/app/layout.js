import "./globals.css";
import "./fonts.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Farsi Numbers Function
export function toFarsiNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (d) => farsiDigits[parseInt(d)]);
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iransansxv min-h-screen flex flex-col">
        <Header />
        <div className="flex grow pt-16 h-240">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
