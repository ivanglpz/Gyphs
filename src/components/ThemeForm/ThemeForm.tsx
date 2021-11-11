import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  props: {
    theme: string;
    label: string;
    setTheme: Dispatch<SetStateAction<string>>;
  };
}

const ThemeForm: FC<Props> = ({ props }) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="radio"
        name="theme"
        value={props.label}
        checked={props.theme === props.label}
        id={props.label}
        onChange={(event: { target: { value: string } }) =>
          props.setTheme(event.target.value)
        }
      />
    </>
  );
};

export default ThemeForm;
