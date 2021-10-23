import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 348px;

  height: 31px;
  background: ${colors.gray};
  border-radius: 10px;
  input {
    height: 31px;
    border: none;
    background-color: transparent;
    padding: 0 0 0 5px;
  }
  @media (max-width:767px){
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
