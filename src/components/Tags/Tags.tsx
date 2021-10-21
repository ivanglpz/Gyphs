import styled from "@emotion/styled";
import { FC, useMemo, useState } from "react";

interface Props {
  tag: string;
  handleTags: (tag: string) => void;
}
interface IButtonTag {
  bgColor: string;
}
const ButtonTag = styled.button<IButtonTag>`
  border: none;
  background-color: ${({ bgColor }) => `rgb(${bgColor})`};
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  &:hover {
    background-color: ${({ bgColor }) => `rgba(${bgColor},0.5)`};
  }
`;
const colorsTags = [
  "129, 214, 227",
  "227, 208, 129",
  "13, 50, 77",
  "100, 44, 169",
  "129, 244, 153",
  "65, 66, 136",
  "255, 54, 171",
  "255, 16, 31",
];

const Tags: FC<Props> = ({ tag, handleTags }) => {
  const [state, setstate] = useState(
    Math.floor(Math.random() * colorsTags.length)
  );
  return (
    <ButtonTag onClick={() => handleTags(tag)} bgColor={colorsTags[state]}>
      {tag}
    </ButtonTag>
  );
};

export default Tags;
