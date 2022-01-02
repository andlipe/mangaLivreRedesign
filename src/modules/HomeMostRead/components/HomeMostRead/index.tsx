import { ProgressBar } from '@components/index'
import { Image } from '@shared/components'

import * as S from './styles'
export default function HomeMostRead() {
  return (
    <S.Container>
      <S.HeaderSection>
        <S.SectionTitle>MAIS LIDOS DA SEMANA</S.SectionTitle>
        <ProgressBar pages={4} currentPage={1} />
        <S.ArrowSection>
          <button>
            <Image
              src={require('@assets/icons/arrow-left.svg')}
              width={10}
              height={15}
            />
          </button>
          <button>
            <Image
              src={require('@assets/icons/arrow-right.svg')}
              width={10}
              height={15}
            />
          </button>
        </S.ArrowSection>
      </S.HeaderSection>
    </S.Container>
  )
}
