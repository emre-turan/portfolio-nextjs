import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });
function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
