import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  setFilter: Dispatch<SetStateAction<number>>;
}

const SelectNumberGifs: FC<IProps> = (props) => {
  return (
    <select
      name="cars"
      id="selects"
      onChange={(event: { target: { value: string | number } }) =>
        props.setFilter(Number(event.target.value))
      }
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
      <option value={50} selected>
        50
      </option>
    </select>
  );
};

export default SelectNumberGifs;
