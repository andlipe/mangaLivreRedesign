import React from 'react'
import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
