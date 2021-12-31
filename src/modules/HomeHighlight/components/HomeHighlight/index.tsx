import React from 'react'
import { Image } from '@shared/components'
import * as S from './styles'
import SliderToggles from '../SliderToggles'
import { useHighlight } from '@modules/HomeHighlight/hooks/useHighlight'

export default function HomeHighlight() {
  const { highlightsMangas, changeHighlightManga, highlightedManga } =
    useHighlight()
  console.log(highlightedManga)
  return (
    <S.Container backgroundColor={highlightedManga!.background}>
      <S.ImageSection>
        <Image
          src={highlightedManga!.image}
          width={120}
          height={170}
          alt="Anime character from selected manga"
        />
      </S.ImageSection>
      <S.InfoSection>
        <S.ChapterNumberSection>
          <S.Text>Capitulo</S.Text>
          <S.ChapterNumber>{highlightedManga?.chapter}</S.ChapterNumber>
        </S.ChapterNumberSection>
        <S.SliderSection>
          <S.Text>{highlightedManga?.time}</S.Text>
          <SliderToggles
            options={highlightsMangas}
            changeSelected={changeHighlightManga}
          />
        </S.SliderSection>
      </S.InfoSection>
    </S.Container>
  )
}
