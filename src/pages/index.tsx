import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import UserContext from "../hooks/useContext";
import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from "../../FirebaseConf";

export type IGifData = {
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

export interface IData {
  data: IGifData[];
  result: string | undefined;
}

export const StyledApp = styled.main`
  display: flex;
`;

const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
`;

const index: FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [savedGif, setSavedGif] = useState<IGifData[]>([]);
  const [search, setSearch] = useState<string>("");

  interface IFetch {
    method: string;
    search?: string;
  }
  //Hook Gif
  const useFetch = async ({ method, search }: IFetch) => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IData = await resp.json();

    const newData = data.map((gif: IGifData): IGifData => {
      return {
        id: gif.id,
        title: gif.title,
        trending_datetime: gif.trending_datetime,
        images: {
          fixed_height: {
            url: gif.images.fixed_height.url,
            width: gif.images.fixed_height.width,
          },
        },
        url: gif.url,
      };
    });

    if (search) {
      setData({ data: newData, result: `Result: ${search}` });
    } else {
      setData({ data: newData, result: "All the Reaction GIFs" });
    }
  };
  //Inital state my app
  //Search a gif
  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (!search) {
      useFetch({ method: "trending", search: "" });
    } else {
      useFetch({ method: "search", search: search });
    }
  };

  useEffect(() => {
    useFetch({ method: "trending", search: "" });
  }, []);

  return (
    <UserContext.Provider value={{ savedGif, setSavedGif }}>
      <StyledApp>
        <NavMenu />
        <Gifs>
          <nav>
            <SearchBar handleSubmit={handleSubmit} setSearch={setSearch} />
          </nav>
          {data.result && <p>{data.result}</p>}
          <GifsContent data={data.data} />
        </Gifs>
      </StyledApp>
    </UserContext.Provider>
  );
};

export default index;
