import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";
import Layout from "src/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return (
    <>
      <Head>
        <title>Housezzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
