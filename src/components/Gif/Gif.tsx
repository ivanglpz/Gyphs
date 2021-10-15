import styled from "@emotion/styled";
import Image from "next/image";
import { FC, useContext } from "react";
import firebaseApp from "../../../FirebaseConf";
import UserContext from "../../hooks/useContext";
import { getDatabase, ref, set } from "firebase/database";

interface IData {
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
}

const GifImg = styled(Image)`
  border-radius: 5px;
  width: 200px;
`;

const Gif: FC<IData> = (gif) => {
  // const { savedGif, setSavedGif } = useContext(UserContext);
  const database = getDatabase(firebaseApp);

  const handleSavedGif = (gif: IData) => {
    set(ref(database, "saved/"), [gif]);
  };

  return (
    <div>
      <GifImg
        loader={({ width }: { width: number }) => {
          return `${gif.images.fixed_height.url}?w=${width}&q=${75}`;
        }}
        src="/me.png"
        alt={gif.title}
        width={Number(gif.images.fixed_height.width)}
        height={Number(gif.images.fixed_height.width)}
      />
      <button onClick={() => handleSavedGif(gif)}>saved</button>
    </div>
  );
};

export default Gif;
