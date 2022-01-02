import * as S from './styles'

interface IProgressBar {
  pages: number
  currentPage: number
}

export default function ProgressBar({ pages, currentPage }: IProgressBar) {
  return (
    <S.Container pages={pages}>
      <S.FilledBar currentPage={currentPage}></S.FilledBar>
    </S.Container>
  )
}
