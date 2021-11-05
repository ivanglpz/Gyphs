import styled from '@emotion/styled'

export const StyledBox = styled.div`
  display: flex;
  position: ${({ detail }: { detail: string }) => detail};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Gifs = styled.div`
  width: 800px;
  margin: 20px 0 0 230px;
  @media (max-width: 767px) {
    margin: 0;
    width: auto;
    height: ${({ screen }: { screen: string }) => screen};
    padding: 20px;
  }
`
