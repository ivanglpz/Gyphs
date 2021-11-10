import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useState } from "react";
import ButtonAdd from "../Buttons/ButtonAdd";
import ButtonDelete from "../Buttons/ButtonDelete";
import SearchBar from "../SearchBar/SearchBar";
import EditTag from "./EditTag/EditTag";

interface IProps {
  setTags: Dispatch<SetStateAction<string[]>>;
  setMountTags: Dispatch<SetStateAction<boolean>>;
  data: string[];
  handleTags: (tag: string) => void;
}

const CreateTags: FC<IProps> = (props) => {
  const [valueTag, setValueTag] = useState("");

  const handleAddTag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (valueTag) {
      if (props.data.find((tag) => tag === valueTag)) {
        props.setMountTags(false);
      } else if (props.data.length < 5) {
        props.setTags([...props.data, valueTag]);
        props.handleTags(valueTag);
        props.setMountTags(false);
      } else {
        props.setMountTags(false);
      }
    }
  };
  const handleDeleteTag = (tag: string) => {
    props.setTags(props.data.filter((dataTag) => dataTag !== tag));
  };

  const handleEditTag = ({ tag, newTag }: { newTag: string; tag: string }) => {
    if (props.data.filter((dataTag) => dataTag === tag)) {
      handleDeleteTag(tag);
    }
  };

  console.log(props.data);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SearchBar
          IconButton={<ButtonAdd />}
          placeHolder="Write your tag here"
          setValue={setValueTag}
          handleSubmit={handleAddTag}
          value={valueTag}
        />
      </div>
      <p>
        <b>List</b>
      </p>
      <ul>
        {props.data.map((tag, index) => (
          <EditTag props={{ tag, index, handleDeleteTag, handleEditTag }} />
        ))}
      </ul>
    </>
  );
};

export default CreateTags;
