import React from 'react'
import { Image } from '@shared/components'
import BlankEllipse from '@assets/icons/ico-ellipse-blank.svg'
import FilledElipse from '@assets/icons/ico-ellipse-filled.svg'
import * as S from './styles'
import { IHighlightsMangas } from '@modules/HomeHighlight/types/IHighlight'

interface ISliderToggles {
  options: IHighlightsMangas[]
  changeSelected: (id: number) => void
}

export default function SliderToggles({
  options,
  changeSelected,
}: ISliderToggles) {
  return (
    <S.Container>
      {options.map(({ id, selected }) => (
        <S.EllipseButton key={id} onClick={() => changeSelected(id)}>
          <Image
            alt="Ellipse to change highlight manga"
            src={selected ? FilledElipse : BlankEllipse}
            width={9}
            height={9}
          />
        </S.EllipseButton>
      ))}
    </S.Container>
  )
}
