import { Image } from '@shared/components'
import * as S from './styles'
export default function MangaCard() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src="/cover.png" width={200} height={240} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Category>Ação</S.Category>
        <S.Title>ONE PIECE</S.Title>
        <S.Description>
          One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu
          tudo nesse mundo, antes de ser executado...
        </S.Description>
        <S.SeeMore>Ver Mais</S.SeeMore>
      </S.InfoContainer>
    </S.Container>
  )
}
