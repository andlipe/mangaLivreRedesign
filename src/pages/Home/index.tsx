import { HighlightProvider, HomeHighlight } from '@modules/HomeHighlight'
import * as S from './styles'

export default function Home() {
  return (
    <HighlightProvider>
      <S.Container>
        <HomeHighlight />
      </S.Container>
    </HighlightProvider>
  )
}
