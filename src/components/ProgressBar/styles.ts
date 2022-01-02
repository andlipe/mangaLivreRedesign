import styled from 'styled-components'

interface IProps {
  pages?: number
  currentPage?: number
}

export const Container = styled.div<IProps>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.blue};
  width: 100%;
  height: 2px;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(${({ pages }) => pages}, 1fr);
  grid-area: bar;
`

export const FilledBar = styled.div<IProps>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  width: 100%;
  grid-column-start: ${({ currentPage }) => currentPage};
  height: 4px;
`
