import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Housezzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
