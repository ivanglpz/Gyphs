import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledMenu = styled.nav`
  width: 150px;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  z-index: 0;
  position: fixed;
  background-color: ${({ theme }) =>
    theme === "light" ? "white" : colors.blackRaisin};
  @media (max-width: 767px) {
    /* display: none; */
    width: auto;
    height: 30px;
    padding: 20px;
    position: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: sticky;
    z-index: 999;
  }
`;
export const MenuNavBar = styled.div`
  a {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    /* display: none; */
    h1 {
      display: none;
    }
  }
`;
export const MenuOpts = styled.div`
  ul {
    padding: 0 0 0 20px;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      list-style: none;
      a {
        color: ${({ theme }) =>
          theme === "light" ? colors.blackRaisin : "white"};
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          /* margin: 0 0 0 5px; */
        }
        @media (max-width: 767px) {
          p {
            display: none;
          }
        }
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    ul {
      display: flex;
    }
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    height: 30px;
    bottom: 0;
    position: sticky;
    z-index: 999;
    background-color: ${({ theme }) =>
      theme === "light" ? "white" : colors.blackRaisin};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
`;
