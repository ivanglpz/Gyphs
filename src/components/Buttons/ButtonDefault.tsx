import { FC } from "react";
import styled from "@emotion/styled";
import { colors as ColorsTheme } from "../../styles/colors";

interface IButton {
  styles: {
    outline?: Boolean;
    disabledShadow?: Boolean;
    size: keyof TSize;
    color: keyof TColors;
  };
}
type TColors = {
  default: string;
  primary: string;
  secondary: string;
  danger: string;
  disabled: string;
};
type TSize = {
  sm: string;
  md: string;
  lg: string;
};
const colors: TColors = {
  default: "white",
  primary: ColorsTheme.capri,
  secondary: "#00FF85",
  danger: "red",
  disabled: "gray",
};
const size: TSize = {
  sm: "scale(0.5,0.5)",
  md: "scale(1.2,1.2)",
  lg: "scale(2,2)",
};

const Button = styled.button<IButton>`
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
  border: ${({ styles }) => (styles.outline ? "1px solid blue" : "none")};
  background-color: ${({ styles }) => colors[styles.color]};
  box-shadow: ${({ styles }) =>
    styles.disabledShadow ? "none" : "2px 2px gray"};
  /* transform: ${({ styles }) => size[styles.size]}; */
  color: ${({ styles }) => (styles.color === "default" ? "black" : "white")};
  padding: 5px 10px;
  &:hover {
    color: ${({ styles }) => colors[styles.color]};
    background-color: transparent;
    outline: 1px solid ${({ styles }) => colors[styles.color]};
    outline-offset: -2px;
  }
`;
interface Props {
  title: string;
  outline?: Boolean;
  disabledShadow?: Boolean;
  size: keyof TSize;
  color: keyof TColors;
  function: () => void;
  type: "button" | "submit" | "reset";
}

const ButtonDefault: FC<Props> = (props) => {
  return (
    <Button type={props.type} onClick={props.function} styles={props}>
      {props.title}
    </Button>
  );
};

export default ButtonDefault;
