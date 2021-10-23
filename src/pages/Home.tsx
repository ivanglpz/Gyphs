import styled from "@emotion/styled";
import { FC } from "react";
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
  screen: boolean;
}
const Gifs = styled.div<IGifs>`
  width: 800px;
  margin: 20px 0 0 230px;
  @media (max-width: 767px) {
    margin: 0;
    width: auto;
    height: ${({ screen }) => (screen ? "auto" : "100vh")};
    padding: 20px;
  }
`;
const Home: FC = () => {
  const newData: IStateData = useFetch({ method: "trending" });
  return (
    <StyledBox>
      <NavMenu />
      <Gifs screen={newData?.data?.length > 0 ? true : false}>
        {newData.mount ? (
          <>
            {newData.result && <h2>Today in #{newData.result}</h2>}
            <StyleGifsContent>
              <GifsContent data={newData.data} />
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
    </StyledBox>
  );
};

export default Home;
