import styled from "@emotion/styled";
import { colors } from "../colors";

export const MainApp = styled.main`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    flex-direction: column-reverse;
  }
`;
export const MainBody = styled.div`
  margin: 10px 0 0 250px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
`;

export const ButtonLogOut = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  outline: 1px solid red;
  outline-offset: -2px;
  border-radius: 5px;
  border: none;
  color: red;
  &:hover {
    background-color: red;
    color: ${({ theme }) => (theme === "light" ? "white" : colors.blackRaisin)};
  }
`;
