import React from 'react'
import { Image } from '@shared/components'
import Luffy from '@assets/images/Luffy.png'
import * as S from './styles'

export default function HomeHighlight() {
  return (
    <S.Container>
      <S.ImageSection>
        <Image
          src={Luffy}
          width={150}
          height={200}
          alt="Anime character from selected manga"
        />
      </S.ImageSection>
      <S.InfoSection>
        <S.ChapterNumberSection>
          <S.Text>Capitulo</S.Text>
          <S.ChapterNumber>1363</S.ChapterNumber>
        </S.ChapterNumberSection>
        <section>
          <S.Text>HOJE - 17:30</S.Text>
        </section>
      </S.InfoSection>
    </S.Container>
  )
}
