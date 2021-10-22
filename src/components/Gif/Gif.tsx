import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import Url from "../Svg/Url";


interface IGifData {
  gif: {
    id: string;
    title: string;
    trending_datetime: string;
    images: {
      fixed_height: {
        url: string;
        width: string | number;
        height: string | number;
      };
    };
    url: string;
    user?: {
      avatar_url?: string
      display_name?: string
      username?: string
      profile_url?: string
      description?: string
    }
  }

}

const GifImg = styled.img`
  background-color: #eee;
  display: inline-block;
  width: 100%;
  border-radius: 10px;

`;


const Gif: FC<IGifData> = ({ gif }) => {
  const [copy, setCopy] = useState<boolean>(false);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopy(true)
  }
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false)
      }, 900);
    }
  }, [copy])
  return (
    <div style={{ display: "flex" }}>
      <GifImg
        loading="lazy"
        src={gif.images.fixed_height.url}
        alt={gif.title}
      />

      <Tags position={true} handleTags={() => copyUrl(gif.url)} active={copy} objs={<Url color={copy ? "green" : "white"} />} />

    </div>
  );
};

export default Gif;
