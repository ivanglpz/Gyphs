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
  /* margin: 40px 0 0 20px; */
  input {
    border: none;
    background-color: transparent;
    padding: 0 0 0 5px;
  }
  button {
    padding: 2px;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  button:hover {
    padding: 2px;
    border-radius: 0 10px 10px 0;
    svg {
      path {
        fill: white;
      }
    }
    background-color: ${colors.blue};
  }
`;