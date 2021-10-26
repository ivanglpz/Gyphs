import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useState } from "react";
import url from "../styles/fonts";
import "../styles/masonry.css";
import { Materialize } from "../styles/Normalize";

interface props {
  say: string
}

const MyContext = createContext<props>({} as props)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [state, setstate] = useState("hola")
  return (
    <MyContext.Provider value={{ say: state }}>
      <Head>
        <link rel="stylesheet" href={url} />
      </Head>
      <Global styles={Materialize} />
      <Component {...pageProps} />
    </MyContext.Provider>
  );
};
export default MyApp;
