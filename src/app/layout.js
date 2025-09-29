import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/section/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
})


export const metadata = {
  title: "Task1",
  description: "Just copy figma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
