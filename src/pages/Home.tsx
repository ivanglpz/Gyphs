import { useRouter } from "next/router";
import { FC, useContext, useEffect, useLayoutEffect, useState } from "react";
import tags from "../assets/tagsHome.json";
import GifDetail from "../components/GifDetail/GifDetail";
import GifsContent from "../components/GifsContent/GifsContent";
import GHead from "../components/Head/Head";
import NavMenu from "../components/NavMenu/NavMenu";
import Loading from "../components/Svg/Loading";
import Tags from "../components/Tags/Tags";
import { IParams, IStateData } from "../hooks/types";
import UserContext from "../hooks/useContext";
import useFetchGifs from "../hooks/useFetchGifs";
import UserLoggerContext from "../hooks/userLoggerContext";
import MyContext from "../hooks/useTheme";
import { colors } from "../styles/colors";
import * as S from "../styles/pages/HomeStyle";
import { IFormGif } from "../types/types";
import { IUser } from "./types";

const Home: FC = (props) => {
  const [data, setData] = useState<IStateData>({} as IStateData);
  const [form, setForm] = useState<IParams>({} as IParams);
  const [detailGif, setDetailGif] = useState<IFormGif>({} as IFormGif);
  const router = useRouter();
  const { theme } = useContext(MyContext);
  const { setUserApp } = useContext(UserLoggerContext);

  const handleTags = (tag: string): void => {
    if (data.result === tag) return;
    setForm({
      ...form,
      method: "search",
      search: tag,
      limit: 50,
    });
    setData({ ...data, mount: false });
  };

  const useDataGif = useFetchGifs(
    Object.keys(form).length === 0 ? { method: "trending", limit: 30 } : form
  );

  useEffect(() => {
    setUserApp(JSON.parse(localStorage.getItem("@user") || "{}"));
  }, []);

  useLayoutEffect(() => {
    const { authentication }: IUser = JSON.parse(
      localStorage.getItem("@user") || "{}"
    );
    !authentication && router.replace("/");
  }, []);
  useEffect(() => {
    setData(useDataGif);
  }, [useDataGif]);

  return (
    <UserContext.Provider value={{ setDetailGif }}>
      <GHead title="Gyphs | Home" />
      {detailGif.mount && (
        <GifDetail setDetailGif={setDetailGif} props={detailGif.props} />
      )}
      <S.StyledBox detail={detailGif.mount ? "fixed" : "none"}>
        <NavMenu />
        <S.Gifs screen={data?.mount === true ? "none" : "100vh"}>
          {data.mount ? (
            <>
              {data.result && (
                <h2 style={{ width: "130px" }}>Today in #{data.result}</h2>
              )}
              {tags.map((tag) => (
                <Tags
                  props={{ margin: "0 5px 5px", position: "none" }}
                  key={tag}
                  objs={tag}
                  theme={theme}
                  size="40px"
                  handle={() => handleTags(tag)}
                />
              ))}
              <GifsContent data={data.data} />
            </>
          ) : (
            <Loading
              color={{
                colorPrimary: colors.capri,
                colorSecondary: colors.blueBlizzard,
              }}
            />
          )}
        </S.Gifs>
      </S.StyledBox>
    </UserContext.Provider>
  );
};

export default Home;
