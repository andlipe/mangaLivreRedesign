import {
  HighlightProvider,
  HomeHighlight,
  getHighlightMangas,
  setHighlightedMangas,
  IHighlightsMangas,
} from '@modules/HomeHighlight'
import { HomeMostRead } from '@modules/HomeMostRead'
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
    <HighlightProvider>
      <S.Container>
        <HomeHighlight />
        <HomeMostRead />
      </S.Container>
    </HighlightProvider>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getHighlightMangas()
  // Pass data to the page via props
  return { props: { highLightedMangas: data } }
}
