import styled from "@emotion/styled";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { colors } from "../../styles/colors";

interface IProps {
  setTags: Dispatch<SetStateAction<string[]>>;
  setMountTags: Dispatch<SetStateAction<boolean>>;
  data: string[];
  valueTags: string;
  setValueTag: Dispatch<SetStateAction<string>>;
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
`

const CreateTags: FC<IProps> = (props) => {
  const [valueTag, setValueTag] = useState("");

  const handleAddTag = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (valueTag) {

      if (props.data.length < 5) {
        props.setTags([...props.data, valueTag]);
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
    <form onSubmit={handleAddTag}>
      <input
        type="text"
        value={valueTag}
        onChange={(event: { target: { value: string } }) =>
          setValueTag(event.target.value)
        }
      />
      <button type="submit" >Add</button>
      <ul>
        {props.data.map((tag) => (
          <ItemList key={tag}>
            {tag}
            <button onClick={() => handleDeleteTag(tag)}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.172 16.242L12 13.414L14.828 16.242L16.242 14.828L13.414 12L16.242 9.172L14.828 7.758L12 10.586L9.172 7.758L7.758 9.172L10.586 12L7.758 14.828L9.172 16.242Z"
                  fill={`${colors.red}`}
                />
                <path
                  d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z"
                  fill={`${colors.red}`}
                />
              </svg>
            </button>
          </ItemList>
        ))}
      </ul>
    </form>
  );
};

export default CreateTags;
