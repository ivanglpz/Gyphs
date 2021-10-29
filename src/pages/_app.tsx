import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useState } from "react";
import url from "../styles/fonts";
import "swiper/css";
import "swiper/css/navigation";
import { Materialize } from "../styles/Normalize";

interface props {
  say: string;
}

const MyContext = createContext<props>({} as props);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [state, setstate] = useState("hola");
  return (
    <MyContext.Provider value={{ say: state }}>
      <Head>
        <link rel="stylesheet" href={url} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Global styles={Materialize} />
      <Component {...pageProps} />
    </MyContext.Provider>
  );
};
export default MyApp;
