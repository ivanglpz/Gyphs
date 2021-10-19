import styled from "@emotion/styled";
import { IncomingMessage } from "http";
// import { getDatabase, set, child, push, ref, update } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
import Image from "next/image";
import { useRef } from "react";
import { FC, useState } from "react";
import firebaseApp from "../../../FirebaseConf";
interface IData {
  gif:{  id: string | number;
    title: string;
    trending_datetime: string;
    images: {
      fixed_height: {
        url: string;
        width: string | number;
      };
    };
    url: string;}
    loading?:boolean
    imageLoaded?:()=>void
}

const GifImg = styled.img`
  background-color: #eee;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
`;

const Gif: FC<IData> = ({loading,gif,imageLoaded}) => {

  return (
    <GifImg
      // loader={({ width }: { width: number }) =>
      //   `${gif.images.fixed_height.url}?w=${width}&q=${75}`
      // }
      style={{display: loading ? "block" : "none"}}
      src={`${gif.images.fixed_height.url}`}
      alt={gif.title}
      onLoad={imageLoaded}
      // width={Number(gif.images.fixed_height.width)}
      // height={Number(gif.images.fixed_height.width)}
    />
  );
};

export default Gif;
