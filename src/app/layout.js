import "./globals.css";
import "./fonts.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-iransansxv min-h-screen flex flex-col m-0   bg-[#1A1A1A]">
        {/* <Header /> */}
        <div>{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
