import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import Loading from "../components/Svg/Loading";
import Tags from "../components/Tags/Tags";
import { IStateData } from "../hooks/types";
import useFetch from "../hooks/useFetch";
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
  screen: string;
}

const Gifs = styled.div<IGifs>`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
    width: auto;
    height: ${({ screen }) => screen};
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
interface PropsFetch {
  method: string,
  search?: string
}

const Search: FC = () => {
  const [data, setData] = useState<IStateData>({
    mount: false
  } as IStateData);
  const [search, setSearch] = useState<string>("");
  const [state, setstate] = useState<PropsFetch>({} as PropsFetch)

  const handleTags = (tag: string): void => {
    setSearch(tag);
    setstate({ method: "search", search: tag })
    setData({ ...data, mount: false });
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (search) {
      setstate({ method: "search", search: search })
      setData({ ...data, mount: false });

    } else {
      setstate({ method: "trending" })
      setData({ ...data, mount: false });
    }
  };
  useEffect(() => {
    if (state.method) {
      useFetch(state)
        .then((data) => setData(data))
    }
  }, [state])
  console.log(data);

  return (
    <StyledApp>
      <NavMenu />
      <Gifs screen={data?.mount === true ? "none" : "100vh"}>
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
          data.mount && (
            <>
              <StyleGifsContent>
                <GifsContent data={data.data} />
              </StyleGifsContent>
            </>
          )}
        {data?.data?.length > 0 ? (
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
        )}

      </Gifs>
    </StyledApp >
  );
};

export default Search;
