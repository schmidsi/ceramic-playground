import type { AppProps } from "next/app";
import { Provider } from "@self.id/framework";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <Component {...pageProps} />
    </Provider>
  );
}
