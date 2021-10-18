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
`;
export const FormButtonSearch = styled.button`
  height: 31px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 0 10px 10px 0;
    svg {
      path {
        fill: white;
      }
    }
    background-color: ${colors.capri};
  }
`;
export const FormButtonTextDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  
  border-radius: 10px;
  &:hover{
    svg{
      path{
        fill:white;
      }
    }
    background-color: ${colors.red};
    /* background-color: ${colors.red}; */
  }
`