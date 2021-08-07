import "../styles/global.css";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
