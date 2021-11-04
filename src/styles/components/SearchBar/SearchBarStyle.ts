import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#2C2C2C" : "white")};
  border-radius: 5px;
  width: auto;
  input {
    height: 41px;
    width: auto;
    border: none;
    background-color: transparent;
    margin: 0 0 0 5px;
  }
  @media (max-width: 767px) {
    input {
      width: 145px;
    }
  }
`;
export const FormButtonSearch = styled.button`
  height: 31px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormButtonTextDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
`;
