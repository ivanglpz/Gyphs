import { FC, useRef, useState } from "react";
import { StyleGifsContent } from "../../styles/components/GifsContent/GifsContentStyle";
import Gif from "../Gif/Gif";
import styled from "@emotion/styled";

interface IData {
  data: {
    id: string | number;
    title: string;
    trending_datetime: string;
    images: {
      fixed_height: {
        url: string;
        width: string | number;
      };
    };
    url: string;
  }[];
}
const GifBox = styled.div`
  /* background-color: #eee; */
  display: inline-block;
  margin: 0.5rem 1rem;
  width: 100%;
`;
const GifsContent: FC<IData> = ({ data }) => {
  return (
    <>
      {/* {loading === true && <p>loading</p>} */}
      {data?.map((gif) => (
        <GifBox key={gif.id}>
          <Gif
            gif={gif}
            //  imageLoaded={imageLoaded} loading={loading}
          />
        </GifBox>
      ))}
    </>
  );
};

export default GifsContent;
