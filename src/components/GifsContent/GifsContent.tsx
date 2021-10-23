import { FC, useRef, useState } from "react";
import Gif from "../Gif/Gif";
import styled from "@emotion/styled";
import { IData } from "../../hooks/types";
import { colors } from "../../styles/colors";

type IStateData = {
  data: IData[];
};

interface IGifAvatarImg {
  url: Boolean;
}
const GifBox = styled.div`
  display: inline-block;
  margin: 0.5rem 0;
  width: 100%;
`;
const GifAvatar = styled.div`
  /* align-items: jus; */
  margin: 10px 0 0 0;
  a {
    display: flex;
    align-items: center;
    color: ${colors.blackRaisin};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const GifAvatarImg = styled.img<IGifAvatarImg>`
  display: ${({ url }) => (url ? "block" : "none")};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 10px 0 0;
`;
const GifsContent: FC<IStateData> = ({ data }) => {
  const [loading, setLoading] = useState(false);

  console.log(loading);

  const handleMountImg = () => console.log("montado");

  return (
    <>
      {data?.map((gif) => (
        <GifBox key={gif.id}>
          <Gif gif={gif} imgload={handleMountImg} />

          {gif.user?.avatar_url && (
            <GifAvatar>
              <a href={gif.user.profile_url}>
                <GifAvatarImg
                  url={gif.user.avatar_url ? true : false}
                  src={gif?.user?.avatar_url}
                  alt={gif.user.display_name}
                />
                <div>
                  <p>
                    <b>
                      {gif?.user?.username?.length
                        ? `${gif?.user?.username?.slice(0, 10)}... `
                        : ""}
                    </b>
                  </p>
                  <p>
                    {gif?.user?.description?.length
                      ? `${gif?.user?.description?.slice(0, 20)}...`
                      : ""}{" "}
                  </p>
                </div>
              </a>
            </GifAvatar>
          )}
        </GifBox>
      ))}
    </>
  );
};

export default GifsContent;
