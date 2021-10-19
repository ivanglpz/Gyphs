import styled from "@emotion/styled";

export const StyleGifsContent = styled.div`
  column-count: 3;
  column-gap: 1em;
  /* column- */
  /* column-rule:; */

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
  }

  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
`;
