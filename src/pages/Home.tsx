import { FC } from "react";
import GifsContent from "../components/GifsContent/GifsContent";
import NavMenu from "../components/NavMenu/NavMenu";
import useFetch from "../hooks/useFetch";
import { StyleGifsContent } from "../styles/components/GifsContent/GifsContentStyle";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
// import styled from "@emotion/styled/types/base";


// const tags = ["Chuck Norris", "Gatos", "John", "Negro", "Homero"];
const StyledBox  =styled.div`
  display: flex;
`

const Home: FC = () => {
  const newData = useFetch({ method: "trending" });

  console.log(newData);

  return (
    <StyledBox>
      <NavMenu />
      <div>
        {newData.mount ? (
          <div style={{margin:"0 0 0 210px"}}>
            {newData.result && <p>#{newData.result}</p>}
            <StyleGifsContent>
              <GifsContent data={newData.data} />
            </StyleGifsContent>
          </div>
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
