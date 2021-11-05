import styled from "@emotion/styled";
import { FC, MouseEventHandler, ReactElement, useState } from "react";

interface Props {
  handle: MouseEventHandler<HTMLButtonElement>;
  objs: string | ReactElement;
  props: {
    margin: string;
    position: string;
  };
  theme: string;
  size: string;
}
interface IButtonTag {
  props: {
    position: string;
    margin: string;
    bgColor: string;
    theme: string;
    size: string;
  };
}
const ButtonTag = styled.button<IButtonTag>`
  border: none;
  position: ${({ props }) => props.position};
  margin: ${({ props }) => props.margin};
  background-color: ${({ props }) => props.bgColor};
  padding: 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  height: ${({ props }) => props.size};
  font-weight: 500;
  &:hover {
    svg {
      path {
        /* fill: ${({ props }) => props.bgColor}; */
        stroke: ${({ props }) => props.bgColor};
      }
    }
    color: ${({ props }) => props.bgColor};
    outline: 1px solid ${({ props }) => props.bgColor};
    outline-offset: -2px;

    background-color: transparent;
  }
`;
const colorsTags: string[] = [
  "#ff6b35",
  "#004e89",
  "#f9dc5c",
  "#0ad3ff",
  "#0ead69",
  "#dc136c",
  "#8f3985",
  "#8b80f9",
  "#9be564",
  "#2660a4",
  "#59c9a5",
  "#43281c",
];

const Tags: FC<Props> = ({ handle, objs, props, theme, size }) => {
  const [state,] = useState(
    Math.floor(Math.random() * colorsTags.length)
  );
  return (
    <ButtonTag
      props={{ ...props, bgColor: colorsTags[state], theme, size }}
      onClick={handle}
    >
      {objs}
    </ButtonTag>
  );
};

export default Tags;
