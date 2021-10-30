import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import url from "../styles/fonts";
import "swiper/css";
import "swiper/css/navigation";
import { Materialize } from "../styles/Normalize";
import MyContext, { Theme } from "../hooks/useTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<string>("light");

  useLayoutEffect(() => {

    setTheme(localStorage.getItem("@theme") || "light")
  }, [])

  useEffect(() => {
    localStorage.setItem("@theme", theme)
  }, [theme])
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <Head>
        <link rel="stylesheet" href={url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Global styles={() => Materialize(theme)} />
      <Component {...pageProps} />
    </MyContext.Provider>
  );
};
export default MyApp;
