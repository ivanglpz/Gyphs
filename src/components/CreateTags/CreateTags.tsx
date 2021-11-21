import { FC, useState } from "react";
import ButtonAdd from "../Buttons/ButtonAdd";
import { ICreateTags, IHETag } from "../CreateTags/types";
import SearchBar from "../SearchBar/SearchBar";
import EditTag from "./EditTag/EditTag";

const CreateTags: FC<ICreateTags> = ({
  data,
  setMountTags,
  setTags,
  handleTags,
}) => {
  const [valueTag, setValueTag] = useState("");

  const handleAddTag = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (valueTag) {
      if (data.find((tag) => tag === valueTag)) {
        setMountTags(false);
      } else if (data.length < 5) {
        setTags([...data, valueTag]);
        handleTags(valueTag);
        setMountTags(false);
      } else {
        setMountTags(false);
      }
    }
  };
  const handleDeleteTag = (tag: string): void => {
    setTags(data.filter((dataTag) => dataTag !== tag));
  };

  const handleEditTag = ({ newTag, oldTag, event }: IHETag): void => {
    event.preventDefault();
    if (newTag) {
      const newData = data.map((tag) =>
        tag === oldTag ? (tag = newTag) : tag
      );
      handleTags(newTag);
      setMountTags(false);
      setTags(newData);
    } else {
      setMountTags(false);
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <SearchBar
          IconButton={<ButtonAdd />}
          placeHolder="Write your tag here"
          setValue={setValueTag}
          handleSubmit={(event) => handleAddTag(event)}
          value={valueTag}
        />
      </div>
      <p>
        <b>List</b>
      </p>
      {data.map((tag) => (
        <EditTag
          key={tag}
          {...{ tag, data, setTags, handleEditTag, handleDeleteTag }}
        />
      ))}
    </>
  );
};

export default CreateTags;
