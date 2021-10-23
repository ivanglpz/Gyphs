import styled from "@emotion/styled";
import { FC, MouseEventHandler, ReactElement, useState } from "react";

interface Props {
  handle: MouseEventHandler<HTMLButtonElement>;
  objs: string | ReactElement
  props: {
    margin: string
    position: string
  }
}
interface IButtonTag {
  props: {
    position: string
    margin: string
    bgColor: string
  }
}
const ButtonTag = styled.button<IButtonTag>`
  border: none;
  position: ${({ props }) => props.position};
  margin: ${({ props }) => props.margin};
  background-color: ${({ props }) => `rgb(${props.bgColor})`};
  padding: 5px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  svg{
    path{
      fill: white;
    }
  }
  &:hover {
    svg{
      path{
        fill: ${({ props }) => `rgb(${props.bgColor})`};
      }
    }
  color: ${({ props }) => `rgb(${props.bgColor})`};

    background-color: #f8f8f8;
  }
  &:active{
    svg{
      path{
        fill: white;
      }
    }
  color: white;

  background-color: ${({ props }) => `rgb(${props.bgColor})`};

  }
`;
const colorsTags: string[] = [
  "129, 214, 227",
  "227, 208, 129",
  "13, 50, 77",
  "100, 44, 169",
  "129, 244, 153",
  "65, 66, 136",
  "255, 54, 171",
  "255, 16, 31",
];

const Tags: FC<Props> = ({ handle, objs, props }) => {
  const [state, setstate] = useState(
    Math.floor(Math.random() * colorsTags.length)
  );
  return (
    <ButtonTag props={{ ...props, bgColor: colorsTags[state] }} onClick={handle} >
      {objs}
    </ButtonTag>
  );
};

export default Tags;
