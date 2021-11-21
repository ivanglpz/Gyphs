import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ChangeEvent, Dispatch, FC, SetStateAction, useContext } from "react";
import ThemeContext from "../../hooks/useTheme";
import * as S from "../../styles/components/SearchBar/SearchBarStyle";
import ButtonDelete from "../Buttons/ButtonDelete";
interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  value: string;
  IconButton: ReactJSXElement;
  placeHolder: string;
}
const SearchBar: FC<Props> = ({
  value,
  handleSubmit,
  setValue,
  IconButton,
  placeHolder,
}) => {
  const { theme } = useContext(ThemeContext);

  const FirstCharacter = (str: string) => {
    setValue(str.charAt(0).toUpperCase() + str.slice(1));
  };

  return (
    <S.StyledForm onSubmit={handleSubmit} theme={theme}>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          FirstCharacter(event.target.value)
        }
      />
      {value && <ButtonDelete CustomFuction={() => setValue("")} />}
      <S.FormButtonSearch type="submit">{IconButton}</S.FormButtonSearch>
    </S.StyledForm>
  );
};

export default SearchBar;
