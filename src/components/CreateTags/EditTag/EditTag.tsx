import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useState } from "react";
import ButtonDelete from "../../Buttons/ButtonDelete";
import { IHandleEdit } from "../CreateTags";

interface IProps {
  props: {
    tag: string;
    setTags: Dispatch<SetStateAction<string[]>>;
    index: number;
    data: string[];
    handleEditTag: ({ index, newTag, event }: IHandleEdit) => void;
    handleDeleteTag: (tag: string) => void;
  };
}
const ItemList = styled.input`
  display: flex;
  align-items: center;
  background-color: transparent;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`;

const EditTag: FC<IProps> = ({ props }) => {
  const [edit, setEdit] = useState(true);

  const [newTag, setNewTag] = useState(props.tag);

  const handleChangeTag = (event: { target: { value: string } }) => {
    setNewTag(event.target.value);
  };
  const handleDeleteTag = (tag: string) => {
    props.setTags(props.data.filter((dataTag) => dataTag !== tag));
  };

  return (
    <form
      onSubmit={(event) =>
        props.handleEditTag({ index: props.index, newTag, event })
      }
      key={props.tag}
    >
      <ItemList value={newTag} disabled={edit} onChange={handleChangeTag} />
      <button type="button" onClick={() => setEdit(!edit)}>
        edit
      </button>
      <button type="submit">Ok</button>
      <ButtonDelete CustomFuction={() => handleDeleteTag(props.tag)} />
    </form>
  );
};

export default EditTag;
