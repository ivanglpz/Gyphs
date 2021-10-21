import styled from "@emotion/styled";
import { FC } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import useFetch from "../hooks/useFetch";
import { colors } from "../styles/colors";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";

const StyledBox = styled.div`
  display: flex;

`;

const Home: FC = () => {
  const newData = useFetch({ method: "trending" });
  return (
    <StyledBox>
      <NavMenu />
      <div style={{width:"800px", margin:"0 0 0 230px"}}>
        {newData.mount ? (
          <>
            {newData.result && <p>#{newData.result}</p>}
            <StyleGifsContent>
              <GifsContent data={newData.data} />
            </StyleGifsContent>
          </>
        ) : (
          <svg
            style={{
              margin: "auto",
              background: "rgb(255, 255, 255)",
              display: "block",
              shapeRendering: "auto",
            }}
            width="80px"
            height="80px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="32"
              strokeWidth="8"
              stroke={`${colors.capri}`}
              strokeDasharray="50.26548245743669 50.26548245743669"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              ></animateTransform>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="23"
              strokeWidth="8"
              stroke={`${colors.greenRusian}`}
              strokeDasharray="36.12831551628262 36.12831551628262"
              strokeDashoffset="36.12831551628262"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 50;-360 50 50"
              ></animateTransform>
            </circle>
          </svg>
        )}
      </div>
    </StyledBox>
  );
};

export default Home;
