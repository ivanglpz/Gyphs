import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

interface IData {
  gif: {
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
  };
  loading?: boolean;
  imageLoaded?: () => void;
}

const GifImg = styled.img`
  background-color: #eee;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
`;

const Gif: FC<IData> = ({ loading, gif, imageLoaded }) => {
  return (
    <GifImg
      loading="lazy"
      src={gif.images.fixed_height.url}
      alt={gif.title}
    />
  );
};

export default Gif;
