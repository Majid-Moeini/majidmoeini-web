import "./globals.css";
import "./fonts.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iransansxv min-h-screen flex flex-col m-0">
        <Header />
        <div className="flex grow ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
