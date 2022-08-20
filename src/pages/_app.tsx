import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalContextProvider } from "@context/globalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <title>vTODO App with Next.js + TypeScript</title>
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
