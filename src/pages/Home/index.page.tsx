import {
  HighlightProvider,
  HomeHighlight,
  getHighlightMangas,
  setHighlightedMangas,
  IHighlightsMangas,
} from '@modules/HomeHighlight'
import { HomeMostRead, MostReadProvider } from '@modules/HomeMostRead'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

interface Props {
  highLightedMangas: IHighlightsMangas[]
}

export default function Home({ highLightedMangas }: Props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHighlightedMangas(highLightedMangas))
  }, [])
  return (
    <S.Container>
      <HighlightProvider>
        <HomeHighlight />
      </HighlightProvider>
      <MostReadProvider>
        <HomeMostRead />
      </MostReadProvider>
    </S.Container>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getHighlightMangas()
  // Pass data to the page via props
  return { props: { highLightedMangas: data } }
}
