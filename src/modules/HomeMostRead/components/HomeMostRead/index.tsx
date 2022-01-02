import { ProgressBar, MangaCard } from '@components/index'
import { useMostRead } from '../../hooks/useMostRead'
import { Image } from '@shared/components'

import * as S from './styles'
export default function HomeMostRead() {
  const {
    currentPage,
    pages,
    handleBackPage,
    handleNextPage,
    mostReadMangas,
    scrollDiv,
  } = useMostRead()
  console.log(scrollDiv)
  return (
    <S.Container>
      <S.HeaderSection>
        <S.SectionTitle>MAIS LIDOS DA SEMANA</S.SectionTitle>
        <ProgressBar pages={pages} currentPage={currentPage} />
        <S.ArrowSection>
          <S.Arrow onClick={() => handleBackPage()}>
            <Image
              src={require('@assets/icons/arrow-left.svg')}
              width={10}
              height={15}
            />
          </S.Arrow>
          <S.Arrow onClick={() => handleNextPage()}>
            <Image
              src={require('@assets/icons/arrow-right.svg')}
              width={10}
              height={15}
            />
          </S.Arrow>
        </S.ArrowSection>
      </S.HeaderSection>
      <S.BodySection ref={scrollDiv}>
        {mostReadMangas.map((manga) => (
          <MangaCard key={manga.id} data={manga} />
        ))}
      </S.BodySection>
    </S.Container>
  )
}
