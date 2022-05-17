import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "src/components/Layout";
import { AuthProvider } from "src/auth/useAuth";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
