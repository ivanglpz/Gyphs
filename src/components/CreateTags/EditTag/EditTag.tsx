import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import ThemeContext from "../../../hooks/useTheme";
import ButtonDefault from "../../Buttons/ButtonDefault";
import ButtonDelete from "../../Buttons/ButtonDelete";
import { IHETag } from "../../CreateTags/types";

interface IProps {
  tag: string;
  setTags: Dispatch<SetStateAction<string[]>>;
  data: string[];
  handleEditTag: ({ newTag, oldTag, event }: IHETag) => void;
  handleDeleteTag: (tag: string) => void;
}
const ItemList = styled.input`
  width: auto;
  height: 41px;
  border: none;
  margin: 0 0 0 5px;
  outline: 1px solid gray;
  outline-offset: -2px;
  background-color: rgba(0, 0, 0, 0.3);
  ${({ disabled, theme }) =>
    !disabled &&
    css`
      background-color: transparent;

      outline: 1px solid ${theme === "light" ? "#2C2C2C" : "white"};
      outline-offset: -2px;
    `}
  border-radius: 5px;
  margin: 0px 10px 0 0;
`;

const EditTag: FC<IProps> = ({ tag, handleEditTag, handleDeleteTag }) => {
  const [edit, setEdit] = useState(true);
  const { theme } = useContext(ThemeContext);
  const [newTag, setNewTag] = useState(tag);

  const FirstCharacter = (str: string) => {
    setNewTag(str.charAt(0).toUpperCase() + str.slice(1));
  };

  const handleChangeTag = (event: { target: { value: string } }) => {
    FirstCharacter(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => handleEditTag({ oldTag: tag, newTag, event })}
      key={tag}
      style={{ display: "flex", margin: "10px 0" }}
    >
      <ItemList
        theme={theme}
        value={newTag}
        disabled={edit}
        onChange={handleChangeTag}
      />
      {edit && (
        <ButtonDefault
          {...{
            title: "Edit",
            type: "button",
            size: "md",
            disabledShadow: true,
            color: "primary",
            function: () => setEdit(!edit),
          }}
        />
      )}
      <ButtonDefault
        {...{
          title: "Ok",
          type: "submit",
          size: "md",
          disabledShadow: true,
          color: "secondary",
          function: () => setEdit(!edit),
        }}
      />
      <ButtonDelete CustomFuction={() => handleDeleteTag(tag)} />
    </form>
  );
};

export default EditTag;
