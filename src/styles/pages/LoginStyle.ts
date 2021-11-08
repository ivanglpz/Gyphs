import styled from "@emotion/styled";
import { colors } from "../colors";

export const BackgroundSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  background: #38b3e8;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginStyle = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;
export const LoginBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ButtonRegister = styled.button`
  background-color: transparent;
  color: ${colors.blue};
  border: none;
  cursor: pointer;
`;
