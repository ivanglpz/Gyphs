import styled from "@emotion/styled";

export const ButtonSearchTags = styled.button`
  background-color: #38b3e8;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  width: 40px;
  height: 40px;
  margin: 0 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    svg {
      path {
        stroke: #38b3e8;
      }
    }
    outline: 1px solid #38b3e8;
    background-color: transparent;
  }
`;

export const StyledApp = styled.main`
  display: flex;
  position: ${({ details }: { details: string }) => details};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
interface IScreen {
  screen: {
    mount: boolean;
    filter: number;
  };
}

export const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 20px;
    width: auto;
    height: ${({ screen }: IScreen) =>
      (screen.mount === false && "100vh") ||
      (screen.mount === true && screen.filter === 5)
        ? "100vh"
        : " none"};
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const NavSearchBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;
export const InitGif = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
