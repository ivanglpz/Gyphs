import styled from "@emotion/styled";

export const StyleGifsContent = styled.div`
/* display: grid; */
  column-count: 3;
  column-gap: 1rem;

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
  }

  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
`;
