import "@/styles/globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}
export default function App({ Component, pageProps }) {
  
  return <Component {...pageProps} />;
}
