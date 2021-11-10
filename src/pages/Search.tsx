import Cookies from "js-cookie";
import Head from "next/head";
import { FC, useContext, useEffect, useState } from "react";
import tags from "../assets/tags.json";
import CreateTags from "../components/CreateTags/CreateTags";
import GifDetail from "../components/GifDetail/GifDetail";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";
import SelectNumberGifs from "../components/SelectNumberGifs/SelectNumberGifs";
import TagsIcon from "../components/Svg/ButtonSearchTags";
import Loading from "../components/Svg/Loading";
import Symbol, { SearchIcon } from "../components/Svg/NavBarIcons";
import Tags from "../components/Tags/Tags";
import { IParams, IStateData } from "../hooks/types";
import UserContext from "../hooks/useContext";
import useFetchGifs from "../hooks/useFetchGifs";
import MyContext from "../hooks/useTheme";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";
import * as S from "../styles/pages/SearchStyle";
import { IFormGif } from "../types/types";

const Search: FC = () => {
  const [data, setData] = useState<IStateData>({} as IStateData);
  const [search, setSearch] = useState<string>("");
  const [form, setForm] = useState<IParams>({} as IParams);
  const [filter, setFilter] = useState<number>(50);
  const [details, setDetails] = useState<IFormGif>({} as IFormGif);
  const [createTag, setCreateTag] = useState<boolean>(false);
  const [tag, setTags] = useState<string[]>(tags);
  const { theme } = useContext(MyContext);

  const handleTags = (tag: string): void => {
    if (data.result === tag) return;
    setSearch(tag);
    setForm({
      ...form,
      method: "search",
      search: tag,
      limit: filter,
    });
    setData({ ...data, mount: false });
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (search) {
      setForm({
        ...form,
        method: "search",
        search: search,
        limit: filter,
      });
      setData({ ...data, mount: false });
    } else {
      setForm({ method: "trending", limit: 50 });
      setData({ ...data, mount: false });
    }
  };
  useEffect(() => {
    const storage: string[] = JSON.parse(Cookies.get("@tags") || "[]");
    setTags(storage?.length === 0 ? tags : storage);
  }, []);

  useEffect(() => {
    tag && Cookies.set("@tags", JSON.stringify(tag));
  }, [tag]);
  const useDataGif = useFetchGifs(form);

  useEffect(() => {
    setData(useDataGif);
  }, [useDataGif]);
  console.log(tag);

  return (
    <UserContext.Provider value={{ setDetailGif: setDetails }}>
      <Head>
        <title>Gyphs | Search</title>
      </Head>
      {details.mount && (
        <GifDetail setDetailGif={setDetails} props={details.props} />
      )}
      <S.StyledApp details={details.mount ? "fixed" : "none"}>
        <NavMenu />
        <S.Gifs screen={{ mount: data.mount, filter: form.limit }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2 style={{ width: "130px" }}>Find your favorite gif</h2>
            <S.NavSearchBar>
              <SearchBar
                value={search}
                placeHolder="Search your gif"
                handleSubmit={handleSubmit}
                setValue={setSearch}
                IconButton={
                  <SearchIcon theme={theme} color={colors.blackRaisin} />
                }
              />
              <SelectNumberGifs
                value={filter}
                theme={theme}
                setFilter={setFilter}
              />
            </S.NavSearchBar>
            <div
              style={{ display: "flex", flexWrap: "wrap", margin: "10px 0 " }}
            >
              <Tags
                props={{ margin: "0 5px 5px", position: "none" }}
                objs={<TagsIcon />}
                theme={theme}
                handle={() => setCreateTag(!createTag)}
                size="auto"
              />
              {tag?.map((nameTag) => (
                <Tags
                  props={{ margin: "0 5px 5px", position: "none" }}
                  key={nameTag}
                  objs={nameTag}
                  theme={theme}
                  size="40px"
                  handle={() => handleTags(nameTag)}
                />
              ))}
            </div>
            {createTag && (
              <div style={{ width: "323px" }}>
                <h3>Create your own tag</h3>
                <CreateTags
                  data={tag}
                  setTags={setTags}
                  setMountTags={setCreateTag}
                  handleTags={handleTags}
                />
              </div>
            )}
          </div>
          {data.mount && (
            <StyleGifsContent>
              <GifsContent data={data.data} />
            </StyleGifsContent>
          )}
          {typeof data?.data?.length !== "undefined" && data.mount === false && (
            <Loading
              color={{
                colorPrimary: colors.capri,
                colorSecondary: colors.blueBlizzard,
              }}
            />
          )}
          {typeof data?.data?.length === "undefined" &&
            typeof data.mount === "undefined" && (
              <S.InitGif>
                <Symbol
                  color={theme === "light" ? colors.blackRaisin : "white"}
                  size={{ width: "80px", height: "80px" }}
                />
                <p>Search your favorite gif</p>
              </S.InitGif>
            )}
        </S.Gifs>
      </S.StyledApp>
    </UserContext.Provider>
  );
};

export default Search;
