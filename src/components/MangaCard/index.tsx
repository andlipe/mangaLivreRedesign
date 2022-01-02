import Stars from '@components/Stars'
import { Image } from '@shared/components'
import * as S from './styles'

export interface IMangaCard {
  id: number
  cover: string
  category: string
  title: string
  description: string
  stars: number
}

interface MangaCardProps {
  data: IMangaCard
}
export default function MangaCard({ data }: MangaCardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={data.cover} width={200} height={240} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Category>{data.category}</S.Category>
        <S.Title>{data.title}</S.Title>
        <Stars value={data.stars} />
        <S.Description>{data.description}</S.Description>
        <S.SeeMore>Ver Mais</S.SeeMore>
      </S.InfoContainer>
    </S.Container>
  )
}
