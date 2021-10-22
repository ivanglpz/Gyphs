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

`;

const Home: FC = () => {
  const newData:IStateData = useFetch({ method: "trending" });
  return (
    <StyledBox>
      <NavMenu />
      <div style={{ width: "800px", margin: "20px 0 0 230px" }}>
        {newData.mount ? (
          <>
            {newData.result && <h2>Today in #{newData.result}</h2>}
            <StyleGifsContent>
              <GifsContent data={newData.data} />
            </StyleGifsContent>
          </>
        ) : (
          <Loading color={{ colorPrimary: colors.capri, colorSecondary: colors.blueBlizzard }} />
        )}
      </div>
    </StyledBox>
  );
};

export default Home;
