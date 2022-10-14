import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../Global";
import { Provider } from "react-redux";
import { makeStore } from "../store";
import { saveState } from "../app/browser-storage";
import { debounce } from "debounce";
import { Toaster } from "react-hot-toast";

import "../styles/styles.css";

const store = makeStore();

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tangl</title>
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
