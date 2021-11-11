import { FC } from "react";
import Head from "next/head";

interface IProps {
  title: string;
}

const GHead: FC<IProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};

export default GHead;
