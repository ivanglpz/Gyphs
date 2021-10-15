import { FC } from "react";
import { StyleGifsContent } from "../../styles/components/GifsContent/GifsContentStyle";
import Gif from "../Gif/Gif";

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
    url:string
  }[];
}

const GifsContent: FC<IData> = ({data}) => {
  return (
    <StyleGifsContent>
      {data?.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </StyleGifsContent>
  );
};

export default GifsContent;
