import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tangl</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
