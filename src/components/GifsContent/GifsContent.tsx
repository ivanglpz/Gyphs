import { FC } from "react";
import Gif from "../Gif/Gif";
import styled from "@emotion/styled";
import { IData } from "../../hooks/types";

type IStateData = {
  data: IData[];
};

const GifBox = styled.div`
  display: inline-block;
  margin: 0.5rem 0;
  width: 100%;
`;
const GifsContent: FC<IStateData> = ({ data }) => {
  return (
    <>
      {data?.map((gif) => (
        <GifBox key={gif.id}>
          <Gif gif={gif} />
        </GifBox>
      ))}
    </>
  );
};

export default GifsContent;
