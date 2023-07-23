import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <main className={font.className}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
