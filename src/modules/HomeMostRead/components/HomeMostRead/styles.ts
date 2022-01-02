import styled from 'styled-components'

export const Container = styled.section`
  padding: 8rem 0 8rem 12rem;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`

export const HeaderSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: 'title bar arrows';
  grid-template-columns: max-content 3fr 1fr;
  column-gap: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-areas:
      'title title'
      'bar arrows';
    grid-template-columns: 3fr 1fr;
  }
`

export const SectionTitle = styled.h1`
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.palette.common.black};
  grid-area: title;
  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`

export const ArrowSection = styled.div`
  grid-area: arrows;
`

export const Arrow = styled.button`
  cursor: pointer;
`

export const BodySection = styled.section`
  margin-top: 3rem;
  display: flex;
`
