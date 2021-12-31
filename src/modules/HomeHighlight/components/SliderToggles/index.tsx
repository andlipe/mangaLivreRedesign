import React from 'react'
import { Image } from '@shared/components'
import BlankEllipse from '@assets/icons/ico-ellipse-blank.svg'
import FilledElipse from '@assets/icons/ico-ellipse-filled.svg'
import * as S from './styles'

export default function SliderToggles() {
  return (
    <S.Container>
      <Image
        alt="Ellipse to change highlight manga"
        src={BlankEllipse}
        width={9}
        height={9}
      />
    </S.Container>
  )
}
