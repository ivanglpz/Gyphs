import styled from "@emotion/styled";
import { FC, MouseEventHandler, useMemo, useState } from "react";
import Url from "../Svg/Url";

interface Props {
  handleTags: MouseEventHandler<HTMLButtonElement>;
  active:boolean
}
interface IButtonTag {
  bgColor: string;
}
const ButtonTag = styled.button<IButtonTag>`
  border: none;
  position: absolute;
  margin: 10px;
  background-color: ${({ bgColor }) => `rgb(${bgColor})`};
  padding: 5px;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: ${({ bgColor }) => `rgba(${bgColor},0.5)`};
  }
`;
const colorsTags:string[] = [
  "129, 214, 227",
  "227, 208, 129",
  "13, 50, 77",
  "100, 44, 169",
  "129, 244, 153",
  "65, 66, 136",
  "255, 54, 171",
  "255, 16, 31",
];

const Tags: FC<Props> = ({ handleTags,active}) => {
  const [state, setstate] = useState(
    Math.floor(Math.random() * colorsTags.length)
  );
  return (
    <ButtonTag onClick={handleTags} bgColor={colorsTags[state]}>
      <Url color={active ? "green" : "white"}/>
    </ButtonTag>
  );
};

export default Tags;
