import Head from "next/head";
import { FC, useContext, useEffect, useState } from "react";
import GifDetail from "../components/GifDetail/GifDetail";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import Loading from "../components/Svg/Loading";
import Tags from "../components/Tags/Tags";
import { IParams, IStateData } from "../hooks/types";
import UserContext from "../hooks/useContext";
import useFetch from "../hooks/useFetch";
import MyContext from "../hooks/useTheme";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";
import * as S from "../styles/pages/HomeStyle";
import { IFormGif } from "../types/types";

const tags = ["Entertainment", "Funny Moments", "Sports", "Reactions"];

const Home: FC = () => {
  const [data, setData] = useState<IStateData>({} as IStateData);
  const [form, setForm] = useState<IParams>({} as IParams);
  const [detailGif, setDetailGif] = useState<IFormGif>({} as IFormGif);
  const { theme } = useContext(MyContext);

  function isObjEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

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

  useEffect(() => {
    if (Object.keys(form).length === 0) {
      useFetch({ method: "trending", limit: 50 }).then((data) => setData(data));
    } else {
      useFetch(form).then((data) => setData(data));
    }
  }, [form]);

  return (
    <UserContext.Provider value={{ setDetailGif }}>
      <Head>
        <title>Gyphs | Home</title>
      </Head>
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
              <StyleGifsContent>
                <GifsContent data={data.data} />
              </StyleGifsContent>
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
