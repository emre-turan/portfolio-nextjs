import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
