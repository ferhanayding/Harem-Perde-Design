import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { ParallaxProvider } from "react-scroll-parallax";
import i18n from "../../i18n";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/textlogo.png" />
        <title>Harem Perde Baku</title>
      </Head>
      <ParallaxProvider>
        <Layout>
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </Layout>
      </ParallaxProvider>
    </>
  );
}
