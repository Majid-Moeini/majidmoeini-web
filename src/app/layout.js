import "./globals.css";
import "./fonts.css";
import Header from "./components/Header";

// Farsi Numbers Function
export function toFarsiNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (d) => farsiDigits[parseInt(d)]);
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iransansxv">
        <Header />
        {children}
      </body>
    </html>
  );
}

