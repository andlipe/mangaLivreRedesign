import { Image } from '@shared/components'
import Star from '@assets/icons/star.svg'
import HalfStar from '@assets/icons/halfStar.svg'
import * as S from './styles'
import { useCallback } from 'react'

interface IStars {
  value: number
}

export default function Stars({ value }: IStars) {
  const renderStars = useCallback(() => {
    const stars = []
    for (let i = 1; i <= value + 1; i++) {
      if (i >= value && value < 5) {
        stars.push(<Image key={i} src={HalfStar} width={16} height={16} />)
        break
      }
      stars.push(<Image key={i} src={Star} width={16} height={16} />)
    }
    return stars
  }, [value])
  return <S.Container>{renderStars()}</S.Container>
}
