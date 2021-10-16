import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import UserContext from "../hooks/useContext";

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

interface IFetch {
  method: string;
  search?: string;
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
  const [dataMount, setDataMount] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>("");
  //Hook Gif
  const useFetch = async ({ method, search }: IFetch): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IData = await resp.json();
    try {
      if (data.length > 0) {
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
        setDataMount(true);
        search
          ? setData({ data: newData, result: `Result: ${search}` })
          : setData({ data: newData, result: "All the Reaction GIFs" });
      } else {
        setDataMount(false);
      }
    } catch (error) {
      setDataMount(false);
    }
  };

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
            <SearchBar
              search={search}
              handleSubmit={handleSubmit}
              setSearch={setSearch}
            />
          </nav>
          {dataMount ? (
            <>
              {data.result && <p>{data.result}</p>}
              <GifsContent data={data.data} />
            </>
          ) : (
            <svg
              style={{
                margin: "auto",
                background: "rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto",
              }}
              width="100px"
              height="100px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                r="32"
                strokeWidth="8"
                stroke="#3246d3"
                strokeDasharray="50.26548245743669 50.26548245743669"
                fill="none"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                ></animateTransform>
              </circle>
              <circle
                cx="50"
                cy="50"
                r="23"
                strokeWidth="8"
                stroke="#1d2a89"
                strokeDasharray="36.12831551628262 36.12831551628262"
                strokeDashoffset="36.12831551628262"
                fill="none"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="0 50 50;-360 50 50"
                ></animateTransform>
              </circle>
            </svg>
          )}
        </Gifs>
      </StyledApp>
    </UserContext.Provider>
  );
};

export default index;
