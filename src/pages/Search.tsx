import styled from "@emotion/styled";
import { FC, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import Tags from "../components/Tags/Tags";
import UserContext from "../hooks/useContext";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";

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
  mount: boolean;
}

export interface IFetch {
  method: string;
  search?: string;
}

export const StyledApp = styled.main`
  display: flex;
`;

const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
`;
const tags = ["Chuck Norris", "Gatos", "John", "Negro", "Homero"];

const index: FC = () => {
  const [dataInfo, setData] = useState<IData>({} as IData);
  const [savedGif, setSavedGif] = useState<IGifData[]>([]);
  const [search, setSearch] = useState<string>("");

  const useFetch = async ({ method, search }: IFetch): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${process.env.NEXT_PUBLIC_API_KEY
      }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IData = await resp.json();

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
      search
        ? setData({ data: newData, result: `Result: ${search}`, mount: true })
        : setData({
          data: newData,
          result: method,
          mount: true,
        });
    } else {
      setData({ ...dataInfo, mount: false });
    }
  };

  const handleTags = (tag: string): void => {
    setSearch(tag);
    useFetch({ method: "search", search: tag });
    setData({ ...dataInfo, mount: false });
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (!search) {
      useFetch({ method: "trending" });
      setData({ ...dataInfo, mount: false });
    } else {
      useFetch({ method: "search", search: search });
      setData({ ...dataInfo, mount: false });
    }
  };

  console.log(dataInfo);

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
          <div>
            #Tags
            <div>
              {tags.map((tag) => (
                <Tags key={tag} tag={tag} handleTags={handleTags} />
              ))}
            </div>
          </div>
          {dataInfo.mount ? (
            <>
              {dataInfo.result && <p>{dataInfo.result}</p>}
              <StyleGifsContent>
                <GifsContent data={dataInfo.data} />
              </StyleGifsContent>
            </>
          ) : (
            <svg
              style={{
                margin: "auto",
                background: "rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto",
              }}
              width="80px"
              height="80px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                r="32"
                strokeWidth="8"
                stroke={`${colors.capri}`}
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
                stroke={`${colors.greenRusian}`}
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
