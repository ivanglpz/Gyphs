import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { JsxChild } from "typescript";
import MyContext from "../../hooks/useTheme";
import { colors } from "../../styles/colors";
import * as S from "../../styles/components/SearchBar/SearchBarStyle";
import DeleteIcon from "../Svg/Delete";
import { SearchIcon } from "../Svg/NavBarIcons";
interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  search: string;
  icon: ReactJSXElement;
  placeHolder: string
}
const SearchBar: FC<Props> = ({ search, handleSubmit, setSearch, icon, placeHolder }) => {
  const { theme } = useContext(MyContext);

  return (
    <S.StyledForm onSubmit={handleSubmit} theme={theme}>
      <input
        type="text"
        placeholder={placeHolder}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search && <DeleteIcon Fn={() => setSearch("")} />}
      <S.FormButtonSearch type="submit">{icon}</S.FormButtonSearch>
    </S.StyledForm>
  );
};

export default SearchBar;
