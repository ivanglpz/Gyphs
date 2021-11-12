import { Global } from "@emotion/react";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import UserLoggerContext from "../hooks/userLoggerContext";
import ThemeContext from "../hooks/useTheme";
import { colors } from "../styles/colors";
import url from "../styles/fonts";
import { Materialize } from "../styles/Normalize";
import { IUser } from "../types/types";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [userApp, setUserApp] = useState<IUser>({} as IUser);

  useLayoutEffect(() => {
    setTheme(Cookies.get("@theme") || "light");
    setUserApp(JSON.parse(localStorage.getItem("@user") || "{}"));
  }, []);

  useEffect(() => {
    Cookies.set("@theme", theme);
  }, [theme]);

  useEffect(() => {
    userApp.authentication &&
      localStorage.setItem("@user", JSON.stringify(userApp));
  }, [userApp]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserLoggerContext.Provider value={{ userApp, setUserApp }}>
        <Head>
          <link rel="stylesheet" href={url} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="images/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="images/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/site.webmanifest" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content={colors.blue} />
          <meta property="og:title" content="Gyphs" />
          <meta property="og:image" content="/images/frontcover.jpg" />
        </Head>
        <Global styles={() => Materialize(theme)} />
        <Component {...pageProps} />
      </UserLoggerContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
