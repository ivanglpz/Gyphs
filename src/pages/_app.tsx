import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from 'next/head';
import url from "../styles/fonts";
import '../styles/masonry.css';
import { Materialize } from "../styles/Normalize";


const MyApp =({ Component, pageProps }: AppProps) =>{
    return (
      <>
      <Head>
        <link rel="stylesheet" href={url} />
      </Head>
        <Global styles={Materialize} />
        <Component {...pageProps} />
      </>
    );
  }
  export default MyApp;