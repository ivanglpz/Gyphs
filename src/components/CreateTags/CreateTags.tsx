import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { colors } from "../../styles/colors";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../Svg/AddButton";
import DeleteIcon from "../Svg/Delete";

interface IProps {
  setTags: Dispatch<SetStateAction<string[]>>;
  setMountTags: Dispatch<SetStateAction<boolean>>;
  data: string[];
  valueTags: string;
  setValueTag: Dispatch<SetStateAction<string>>;
  handleTags: (tag: string) => void
}

const ItemList = styled.li`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  }
`;

const CreateTags: FC<IProps> = (props) => {
  const [valueTag, setValueTag] = useState("");

  const handleAddTag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (valueTag) {
      if (props.data.length < 5) {
        props.setTags([...props.data, valueTag]);
        props.handleTags(valueTag)
        props.setMountTags(false);
      } else {
        props.setTags([...props.data]);
        props.setMountTags(false);
      }
    }
  };
  const handleDeleteTag = (tag: string) => {
    props.setTags(props.data.filter((dataTag) => dataTag !== tag));
  };
  console.log(props.data);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SearchBar
          icon={<AddButton />}
          placeHolder="Write your tag here"
          setSearch={setValueTag}
          handleSubmit={handleAddTag}
          search={valueTag}
        />

      </div>
      <p><b>List</b></p>
      <ul>
        {props.data.map((tag) => (
          <ItemList key={tag}>
            {tag}
            <DeleteIcon Fn={() => handleDeleteTag(tag)} />
          </ItemList>
        ))}
      </ul>
    </>
  );
};

export default CreateTags;
