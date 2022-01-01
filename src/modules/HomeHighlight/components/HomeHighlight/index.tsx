import React from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import { Image } from '@shared/components'
import { formatRelative, parseISO } from '@shared/dateTime'
import { capitalizeFirstLetter } from '@shared/string'
import { useHighlight } from '../../hooks/useHighlight'
import * as S from './styles'
import SliderToggles from '../SliderToggles'

export default function HomeHighlight() {
  const { highlightsMangas, changeHighlightManga, highlightedManga } =
    useHighlight()

  return (
    <S.Container
      backgroundColor={`#${highlightedManga?.background}` ?? '#c5c5c5'}
    >
      {highlightedManga?.id && (
        <>
          <S.ImageSection>
            <Image
              src={highlightedManga?.image ?? ''}
              width={400}
              height={200}
              alt="Anime character from selected manga"
            />
          </S.ImageSection>
          <S.InfoSection>
            <S.ChapterNumberSection>
              <S.Text>Capitulo</S.Text>
              <S.ChapterNumber>{highlightedManga?.chapter}</S.ChapterNumber>
            </S.ChapterNumberSection>
            <S.SliderSection>
              <S.Text>
                {capitalizeFirstLetter(
                  formatRelative(parseISO(highlightedManga?.time), new Date(), {
                    locale: ptBR,
                  })
                )}
              </S.Text>
              <SliderToggles
                options={highlightsMangas}
                changeSelected={changeHighlightManga}
              />
            </S.SliderSection>
          </S.InfoSection>
        </>
      )}
    </S.Container>
  )
}
