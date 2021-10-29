import { FC, useEffect, useState } from "react";
import GifDetail from "../components/GifDetail/GifDetail";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import Loading from "../components/Svg/Loading";
import { IStateData } from "../hooks/types";
import UserContext from "../hooks/useContext";
import useFetch from "../hooks/useFetch";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";
import { IDataGif } from "../types/types";
import * as S from "../styles/pages/HomeStyle";
import Head from "next/head";

const Home: FC = () => {
  const [state, setstate] = useState<IStateData>({} as IStateData);
  const [detailGif, setDetailGif] = useState<IDataGif>({} as IDataGif);

  useEffect(() => {
    useFetch({ method: "trending" }).then((data) => setstate(data));
  }, []);
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
        <S.Gifs screen={state?.mount === true ? "none" : "100vh"}>
          {state.mount ? (
            <>
              {state.result && (
                <h2 style={{ width: "130px", color: colors.blackRaisin }}>
                  Today in #{state.result}
                </h2>
              )}
              <StyleGifsContent>
                <GifsContent data={state.data} />
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
