import styled from "@emotion/styled";
import { FC, useState } from "react";
import ButtonDelete from "../../Buttons/ButtonDelete";

interface IProps {
  props: {
    tag: string;
    handleEditTag: ({ tag, newTag }: { newTag: string; tag: string }) => void;
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

  return (
    <div key={props.tag}>
      <ItemList value={newTag} disabled={edit} onChange={handleChangeTag} />
      <button onClick={() => setEdit(!edit)}>edit</button>
      <button onClick={() => props.handleEditTag({ tag: props.tag, newTag })}>
        Ok
      </button>
      <ButtonDelete CustomFuction={() => props.handleDeleteTag(props.tag)} />
    </div>
  );
};

export default EditTag;
