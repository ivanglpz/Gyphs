import styled from "@emotion/styled";
import { colors } from "../colors";
import { Swiper } from "swiper/react";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  padding: 25px;
  h1 {
    /* color: ${colors.blackRaisin}; */
    font-size: 24px;
  }
`;
export const Home = styled.div`
  h2 {
    /* color: ${colors.blackRaisin}; */
    width: 330px;
    font-size: 36px;
  }
  p {
    font-size: 18px;
    /* color: ${colors.blackRaisin}; */
    width: 271px;
  }
  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonLink = styled.a`
  background-color: ${colors.blue};
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    outline: 1px solid ${colors.blue};
    outline-offset: -2px;
    background-color: transparent;
    color: ${colors.blue};
  }
`;
export const HomeSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const HomeSwiper = styled(Swiper)`
  width: 600px;
  @media (max-width: 540px) {
    width: 350px;
  }
`;

export const HomeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 35px;
  @media (max-width: 900px) {
    height: 500px;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 35px;
`;
export const About = styled.div`
  /* color: ${colors.blackRaisin}; */
  h3 {
    font-size: 24px;
  }
  p {
    width: 211px;
  }
  @media (max-width: 765px) {
    text-align: center;
  }
`;

export const FooterBox = styled.footer`
  margin: 100px 0 0 0;
  /* background-color: ${colors.blackRaisin}; */
  color: white;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
