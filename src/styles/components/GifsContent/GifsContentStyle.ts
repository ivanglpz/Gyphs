import styled from "@emotion/styled";

export const StyleGifsContent = styled.div`
  width: 1200px;
  column-count: 3;
  column-gap: 1rem;
  @media (max-width: 1024px) {
    width: auto;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    column-count: 2;
    width: auto;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    column-count: 1;
    width: auto;
  }
`;
