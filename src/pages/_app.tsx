import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/global.scss";
import React from "react";
import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
