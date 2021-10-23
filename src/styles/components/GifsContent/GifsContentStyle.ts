import styled from "@emotion/styled";

export const StyleGifsContent = styled.div`
  /* display: grid; */
  height: 100wh;
  column-count: 3;
  column-gap: 1rem;
  @media (min-width: 610px) and (max-width: 768px) {
    column-count: 3;
  }
  @media (min-width: 425px) and (max-width: 610px) {
    column-count: 2;
  }
  @media (max-width: 425px) {
    column-count: 2;
  }
  @media (max-width: 375px) {
    column-count: 2;
  }
  @media (max-width: 320px) {
    column-count: 1;
  }
`;
