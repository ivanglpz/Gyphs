import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import UserContext from "../../hooks/useContext";
import ButtonAdd from "../Buttons/ButtonAdd";
import SearchBar from "../SearchBar/SearchBar";
import EditTag from "./EditTag/EditTag";
export interface IHandleEdit {
  index: number;
  newTag: string;
  event: FormEvent<HTMLFormElement>;
}
interface IProps {
  setTags: Dispatch<SetStateAction<string[]>>;
  setMountTags: Dispatch<SetStateAction<boolean>>;
  data: string[];
  handleTags: (tag: string) => void;
}

const CreateTags: FC<IProps> = (props) => {
  const [valueTag, setValueTag] = useState("");
  const { handleTags } = useContext(UserContext);
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

  const handleEditTag = ({ index, newTag, event }: IHandleEdit) => {
    event.preventDefault();
    props.setMountTags(false);
    handleTags(newTag);
    props.setTags([(props.data[index] = newTag)]);
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
      {props.data.map((tag, index) => (
        <EditTag
          key={tag}
          props={{
            tag,
            index,
            setTags: props.setTags,
            data: props.data,
            handleDeleteTag,
            handleEditTag,
          }}
        />
      ))}
    </>
  );
};

export default CreateTags;
