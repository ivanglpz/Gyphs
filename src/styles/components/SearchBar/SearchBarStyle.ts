import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 315px;
  height: 45px;
  border: 1px solid rgba(65, 65, 65, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  input {
    height: 41px;
    width: auto;
    border: none;
    background-color: transparent;
    margin: 0 0 0 5px;
  }
  @media (max-width: 767px) {
    width: auto;
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
