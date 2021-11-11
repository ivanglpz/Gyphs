import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction } from "react";
import { colors } from "../../styles/colors";

interface IProps {
  theme: string;
  setFilter: Dispatch<SetStateAction<number>>;
}

const SelectStyle = styled.select`
  outline: 1px solid ${({ theme }) => (theme === "light" ? "#2C2C2C" : "white")};
  outline-offset: -2px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: string }) =>
    theme === "light" ? "white" : colors.blackRaisin};
  color: ${({ theme }: { theme: string }) =>
    theme === "light" ? "black" : "white"};
`;

const numbers = [5, 10, 15, 20, 25, 30];

const SelectGifs: FC<IProps> = (props) => {
  return (
    <SelectStyle
      theme={props.theme}
      name="gifs"
      id="selects"
      onChange={(event: { target: { value: string | number } }) =>
        props.setFilter(Number(event.target.value))
      }
      defaultValue="DEFAULT"
    >
      {numbers.map((number) => (
        <option key={number} value={number === 30 ? "DEFAULT" : number}>
          {number}
        </option>
      ))}
    </SelectStyle>
  );
};

export default SelectGifs;
