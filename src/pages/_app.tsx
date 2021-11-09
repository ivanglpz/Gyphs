import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import UserLoggerContext from "../hooks/userLoggerContext";
import ThemeContext from "../hooks/useTheme";
import url from "../styles/fonts";
import { Materialize } from "../styles/Normalize";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export interface IUser {
  authentication?: boolean;
  user?: {
    id: string | number;
    username: string;
  };
  type?: string;
  token?: string;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [userApp, setUserApp] = useState<IUser>({} as IUser);
  const router = useRouter();

  useEffect(() => {
    setTheme(JSON.parse(Cookies.get("@theme") || "light"));
  }, []);

  useEffect(() => {
    theme && Cookies.set("@theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    if (userApp.authentication === true && userApp.token) {
      router.replace("/Home");
    }
    router.push;
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
      </UserLoggerContext.Provider>
    </ThemeContext.Provider>
  );
};
export default MyApp;
