import styled from "@emotion/styled";
import { FC, MouseEventHandler, ReactElement, useState } from "react";

interface Props {
  handle: MouseEventHandler<HTMLButtonElement>;
  objs: string | ReactElement;
  props: {
    margin: string;
    position: string;
  };
}
interface IButtonTag {
  props: {
    position: string;
    margin: string;
    bgColor: string;
  };
}
const ButtonTag = styled.button<IButtonTag>`
  border: none;
  position: ${({ props }) => props.position};
  margin: ${({ props }) => props.margin};
  background-color: ${({ props }) => props.bgColor};
  padding: 8px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  svg {
    path {
      fill: white;
    }
  }
  &:hover {
    svg {
      path {
        fill: ${({ props }) => props.bgColor};
      }
    }
    color: ${({ props }) => props.bgColor};

    background-color: #f8f8f8;
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
  "#43281c"
];

const Tags: FC<Props> = ({ handle, objs, props }) => {
  const [state, setstate] = useState(
    Math.floor(Math.random() * colorsTags.length)
  );
  return (
    <ButtonTag
      props={{ ...props, bgColor: colorsTags[state] }}
      onClick={handle}
    >
      {objs}
    </ButtonTag>
  );
};

export default Tags;
