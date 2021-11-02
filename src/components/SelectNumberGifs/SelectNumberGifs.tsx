import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction } from "react";
import { colors } from "../../styles/colors";


interface IProps {
  theme: string
  setFilter: Dispatch<SetStateAction<number>>;
}

const SelectStyle = styled.select`
   background-color: red;
  border: 1px solid rgba(65, 65, 65, 0.5);
  border-radius: 5px;
  background-color: ${({ theme }: { theme: string }) => theme === "light" ? "white" : colors.blackRaisin};
  color: ${({ theme }: { theme: string }) => theme === "light" ? "black" : "white"};

`

const SelectNumberGifs: FC<IProps> = (props) => {
  return (
    <SelectStyle
      theme={props.theme}
      name="cars"
      id="selects"
      onChange={(event: { target: { value: string | number } }) =>
        props.setFilter(Number(event.target.value))
      }
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
      <option value={50} selected>
        50
      </option>
    </SelectStyle>
  );
};

export default SelectNumberGifs;
