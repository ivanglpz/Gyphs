import styled from "@emotion/styled";

export const MainApp = styled.main`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    flex-direction: column-reverse;
  }
`;
export const MainBody = styled.div`
  margin: 10px 0 0 250px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
`;
