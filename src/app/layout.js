import "./globals.css";
import "./fonts.css";
import Header from "./components/Header";

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};

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
