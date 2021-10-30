import styled from "@emotion/styled";
import Head from "next/head";
import { FC, useContext, useEffect, useState } from "react";
import tags from "../assets/tags.json";
import GifDetail from "../components/GifDetail/GifDetail";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import Loading from "../components/Svg/Loading";
import Tags from "../components/Tags/Tags";
import { IParams, IStateData } from "../hooks/types";
import UserContext from "../hooks/useContext";
import useFetch from "../hooks/useFetch";
import MyContext from "../hooks/useTheme";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";
import { IDataGif } from "../types/types";

export const StyledApp = styled.main`
  display: flex;
  position: ${({ details }: { details: string }) => details};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
    width: auto;
    height: ${({ screen }: { screen: string }) => screen};
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
  flex-direction: column;
  align-items: center;
`;

const Search: FC = () => {
  const [data, setData] = useState<IStateData>({
    mount: false,
  } as IStateData);
  const [search, setSearch] = useState<string>("");
  const [form, setForm] = useState<IParams>({} as IParams);
  const [filterNumber, setFilterNumber] = useState<string | number>("none");
  const [detailGif, setDetailGif] = useState<IDataGif>({} as IDataGif);
  const { theme } = useContext(MyContext);


  const handleTags = (tag: string): void => {
    setSearch(tag);
    setForm({
      ...form,
      method: "search",
      search: tag,
      limit: filterNumber,
    });
    setData({ ...data, mount: false });
  };
  const handleOpts = (event: { target: { value: string | number } }) => {
    if (event.target.value === "none") {
      setFilterNumber(event.target.value);
    } else {
      setFilterNumber(Number(event.target.value));
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (search) {
      setForm({
        ...form,
        method: "search",
        search: search,
        limit: filterNumber,
      });
      setData({ ...data, mount: false });
    } else {
      setForm({ method: "trending" });
      setData({ ...data, mount: false });
    }
  };
  useEffect(() => {
    if (form.method) {
      useFetch(form).then((data) => setData(data));
    }
  }, [form]);
  console.log(data);

  return (
    <UserContext.Provider value={{ setDetailGif }}>
      <Head>
        <title>Gyphs | Search</title>
      </Head>
      {detailGif.mount && (
        <GifDetail setDetailGif={setDetailGif} props={detailGif.props} />
      )}
      <StyledApp details={detailGif.mount ? "fixed" : "none"}>
        <NavMenu />
        <Gifs screen={data?.mount === true ? "none" : "100vh"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2 style={{ width: "130px" }}>
              Find your favorite gif
            </h2>
            <nav>
              <SearchBar
                search={search}
                handleSubmit={handleSubmit}
                setSearch={setSearch}
              />
              <select name="cars" id="selects" onChange={handleOpts}>
                <option value="" disabled selected>
                  Filter
                </option>
                <option value="none">none</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </nav>
            <div
              style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}
            >
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
          {data.mount && (
            <>
              <StyleGifsContent>
                <GifsContent data={data.data} />
              </StyleGifsContent>
            </>
          )}
          {typeof data?.data?.length !== "undefined" && data.mount === false && (
            <Loading
              color={{
                colorPrimary: colors.capri,
                colorSecondary: colors.blueBlizzard,
              }}
            />
          )}
          {typeof data?.data?.length === "undefined" && data.mount === false && (
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
                    fill={theme === "light" ? colors.blackRaisin : "white"}
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
              <p>Search your favorite gif</p>
            </InitGif>
          )}
        </Gifs>
      </StyledApp>
    </UserContext.Provider>
  );
};

export default Search;
