import styled from "@emotion/styled";
import { colors } from "../../colors";

export const MainDetails = styled.main`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme === "light" ? "white" : colors.blackRaisin};
  width: 400px;
  padding: 20px;
  @media (max-width: 715px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
    margin: 100px 0 0 0;
  }
`;

export const CardNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
