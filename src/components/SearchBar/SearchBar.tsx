import { Dispatch, FC, SetStateAction } from "react";
import { colors } from "../../styles/colors";
import * as S from "../../styles/components/SearchBar/SearchBarStyle";
interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  search: string;
}

const SearchBar: FC<Props> = ({ search, handleSubmit, setSearch }) => {
  return (
    <>
      <S.StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search && (
          <S.FormButtonTextDelete type="button" onClick={() => setSearch("")}>
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
          </S.FormButtonTextDelete>
        )}
        <S.FormButtonSearch type="submit">
          <svg
            width="28"
            height="28"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.747 4.389C13.6827 5.32581 14.2683 6.55551 14.4059 7.87239C14.5436 9.18928 14.2248 10.5135 13.503 11.6235C13.629 11.7285 13.734 11.844 13.881 11.949C14.091 12.117 14.3745 12.327 14.7315 12.5685C15.0885 12.8205 15.3195 12.978 15.4245 13.062C15.8655 13.3875 16.191 13.6605 16.4115 13.881C16.7475 14.217 17.0415 14.5635 17.2935 14.931C17.556 15.2985 17.7555 15.6555 17.913 16.023C18.06 16.3905 18.1335 16.737 18.102 17.073C18.081 17.409 17.955 17.6925 17.724 17.9235C17.493 18.1545 17.2095 18.2805 16.8735 18.3015C16.548 18.3225 16.191 18.2595 15.834 18.102C15.4665 17.955 15.099 17.745 14.742 17.4825C14.3745 17.2305 14.028 16.9365 13.692 16.6005C13.4715 16.38 13.1985 16.0545 12.8835 15.624C12.7785 15.4875 12.621 15.2565 12.39 14.931C12.159 14.595 11.97 14.3325 11.802 14.112C11.634 13.902 11.4975 13.7445 11.34 13.587C10.2502 14.1577 9.00662 14.3656 7.7904 14.1805C6.57418 13.9954 5.44878 13.427 4.57801 12.558C2.33101 10.3005 2.33101 6.636 4.57801 4.389C5.11416 3.8522 5.75087 3.42635 6.45172 3.13581C7.15257 2.84526 7.90382 2.69571 8.66251 2.69571C9.4212 2.69571 10.1725 2.84526 10.8733 3.13581C11.5742 3.42635 12.2109 3.8522 12.747 4.389ZM11.2665 11.067C11.9525 10.376 12.3374 9.44188 12.3374 8.46825C12.3374 7.49461 11.9525 6.56047 11.2665 5.8695C10.9256 5.52758 10.5206 5.25629 10.0746 5.07119C9.62868 4.88608 9.1506 4.7908 8.66776 4.7908C8.18493 4.7908 7.70684 4.88608 7.2609 5.07119C6.81495 5.25629 6.40992 5.52758 6.06901 5.8695C5.72709 6.21041 5.4558 6.61544 5.2707 7.06138C5.0856 7.50733 4.99032 7.98541 4.99032 8.46825C4.99032 8.95108 5.0856 9.42917 5.2707 9.87511C5.4558 10.3211 5.72709 10.7261 6.06901 11.067C6.40992 11.4089 6.81495 11.6802 7.2609 11.8653C7.70684 12.0504 8.18493 12.1457 8.66776 12.1457C9.1506 12.1457 9.62868 12.0504 10.0746 11.8653C10.5206 11.6802 10.9256 11.4089 11.2665 11.067Z"
              fill={`${colors.capri}`}
            />
          </svg>
        </S.FormButtonSearch>
      </S.StyledForm>
    </>
  );
};

export default SearchBar;
