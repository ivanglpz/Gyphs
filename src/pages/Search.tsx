import styled from "@emotion/styled";
import { FC, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import Loading from "../components/Svg/Loading";
import Tags from "../components/Tags/Tags";
import { IData, IParams, IStateData } from "../hooks/types";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";

export interface IFetch {
  method: string;
  search?: string;
}

export const StyledApp = styled.main`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

interface IGifs {
  screen: boolean;
}

const Gifs = styled.div<IGifs>`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
    width: auto;
    height: ${({ screen }) => (screen ? "100vh" : "auto")};
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InitGif = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
`
const tags = ["Whil", "Red Velvet", "Morgan", "Halo"];

const Search: FC = () => {
  const [dataInfo, setData] = useState<IStateData>({
    mount: false
  } as IStateData);
  const [search, setSearch] = useState<string>("");

  const useFetch = async ({ method, search }: IParams): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${process.env.NEXT_PUBLIC_API_KEY
      }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IStateData = await resp.json();

    if (data.length > 0) {
      const newData = data.map((gif: IData): IData => {
        return {
          id: gif.id,
          title: gif.title,
          trending_datetime: gif.trending_datetime,
          images: {
            fixed_height: {
              url: gif.images.fixed_height.url,
              width: gif.images.fixed_height.width,
              height: gif.images.fixed_height.height,
            },
          },
          url: gif.url,
          user: {
            avatar_url: gif?.user?.avatar_url,
            display_name: gif?.user?.display_name,
            username: gif?.user?.username,
            profile_url: gif.user?.profile_url,
            description: gif.user?.description,
          },
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

  return (
    <StyledApp>
      <NavMenu />
      <Gifs screen={dataInfo?.mount === false ? true : false}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2 style={{ width: "130px", color: colors.blackRaisin }}>Find your favorite gif</h2>
          <nav>
            <SearchBar
              search={search}
              handleSubmit={handleSubmit}
              setSearch={setSearch}
            />
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
            {tags.map((tag) => (
              <Tags
                props={{ margin: "0 10px 0 0", position: "none" }}
                key={tag}
                objs={tag}
                handle={() => handleTags(tag)}
              />
            ))}
          </div>
        </div>
        {
          dataInfo.mount ? (
            <>
              <StyleGifsContent>
                <GifsContent data={dataInfo.data} />
              </StyleGifsContent>
            </>
          ) : (

            dataInfo?.data?.length > 0 ? (


              <Loading
                color={{
                  colorPrimary: colors.capri,
                  colorSecondary: colors.blueBlizzard,
                }}
              />
            ) : (
              <InitGif>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M2.04224 16.3425L20.427 34.7273L34.7273 20.427L22.981 8.68069V12.7682L30.6413 20.4286L20.4285 30.6413L6.12979 16.3425L9.70409 12.7682L9.70256 8.68222L2.04224 16.3425ZM10.2143 8.17051L16.3425 14.2988L22.4708 8.17051L20.4285 6.12827L18.3848 8.17204L16.3425 6.1298L14.3003 8.17204L12.2565 6.12827"
                      fill={`${colors.blackRaisin}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(0 18.3848) rotate(-45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  Search your favorite gif

                </p>

              </InitGif>
            )

          )

        }

      </Gifs>
    </StyledApp >
  );
};

export default Search;
