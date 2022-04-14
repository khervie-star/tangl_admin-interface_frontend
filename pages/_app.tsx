import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../Global";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tangl</title>
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
