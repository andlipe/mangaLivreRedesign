import styled from 'styled-components'

export const Container = styled.section`
  padding: 8rem 0 8rem 12rem;
`

export const HeaderSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: 'title bar arrows';
  grid-template-columns: max-content 3fr 1fr;
  column-gap: 4rem;
`

export const SectionTitle = styled.h1`
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.palette.common.black};
  grid-area: title;
`

export const ArrowSection = styled.div`
  grid-area: arrows;
`

export const Arrow = styled.button`
  cursor: pointer;
`
