import { FC, useContext } from "react";
import Gif from "../Gif/Gif";
import styled from "@emotion/styled";
import { IData } from "../../hooks/types";
import UserContext from "../../hooks/useContext";
import { StyleGifsContent } from "../../styles/components/GifsContent/GifsContentStyle";

type IStateData = {
  data: IData[];
};

const GifBox = styled.div`
  display: inline-block;
  margin: 0.5rem 0;
  width: 100%;
`;
const GifsContent: FC<IStateData> = ({ data }) => {
  const { setDetailGif } = useContext(UserContext);

  return (
    <StyleGifsContent>
      {data?.map((gif) => (
        <GifBox key={gif.id}>
          <button
            style={{
              border: "none",
              cursor: "pointer",
              background: "transparent",
            }}
            onClick={() => setDetailGif({ mount: true, props: gif })}
          >
            <Gif gif={gif} />
          </button>
        </GifBox>
      ))}
    </StyleGifsContent>
  );
};

export default GifsContent;
