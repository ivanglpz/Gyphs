import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import Loading from "../components/Svg/Loading";
import { IStateData } from "../hooks/types";
import useFetch from "../hooks/useFetch";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";

const StyledBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

interface IGifs {
  screen: string;
}
const Gifs = styled.div<IGifs>`
  width: 800px;
  margin: 20px 0 0 230px;
  @media (max-width: 767px) {
    margin: 0;
    width: auto;
    height: ${({ screen }) => screen};
    padding: 20px;
  }
`;
const Home: FC = () => {
  const [state, setstate] = useState<IStateData>({} as IStateData)
  useEffect(() => {
    useFetch({ method: "trending" })
      .then((data: IStateData) => setstate(data))
  }, [])
  return (
    <StyledBox>
      <NavMenu />
      <Gifs screen={state?.mount === true ? "none" : "100vh"}>
        {state.mount ? (
          <>
            {state.result && <h2 style={{ width: "130px", color: colors.blackRaisin }}>Today in #{state.result}</h2>}
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
      </Gifs>
    </StyledBox >
  );
};

export default Home;
