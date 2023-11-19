import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/global.scss";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
