import {
  HighlightProvider,
  HomeHighlight,
  getHighlightMangas,
  setHighlightedMangas,
} from '@modules/HomeHighlight'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

interface Props {
  highLightedMangas: any[]
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
      </S.Container>
    </HighlightProvider>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getHighlightMangas()
  // Pass data to the page via props
  console.log(data)
  return { props: { highLightedMangas: data } }
}
