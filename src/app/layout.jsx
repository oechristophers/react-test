import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Fundamentals",
  description: "Learn to create a react app using necxt framework",
  Keyword: "HTML,CSS,JS,REACT,GIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="min-h-[90vh]"> {children}</div>

      <Footer/>
      </body>
    </html>
  );
}
