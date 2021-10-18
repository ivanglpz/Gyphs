import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledMenu = styled.nav`
  width: 190px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  z-index: 9;
  position: fixed;
`;
export const MenuNavBar = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${colors.blackRaisin};
  }
`;
export const MenuOpts = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      list-style: none;
      a {
        color: ${colors.blackRaisin};
        text-decoration: none;
        display: flex;
        align-items: center;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;
