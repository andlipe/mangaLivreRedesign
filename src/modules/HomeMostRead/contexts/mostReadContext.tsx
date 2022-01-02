import { IMangaCard } from '@components/MangaCard'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { changePage } from '../slices/homeMostRead'

interface IMostReadContext {
  handleNextPage: () => void
  handleBackPage: () => void
  currentPage: number
  pages: number
  mostReadMangas: IMangaCard[]
}

interface IMostReadProvider {
  children: React.ReactNode
}

export const MostReadContext = createContext({} as IMostReadContext)

function MostReadProvider({ children }: IMostReadProvider) {
  const dispatch = useDispatch()
  const { currentPage, pages } = useSelector(
    (state: RootState) => state.homeMostRead
  )

  const handleNextPage = () => {
    dispatch(changePage(currentPage + 1))
  }

  const handleBackPage = () => {
    dispatch(changePage(currentPage - 1))
  }

  const mostReadMangas = [
    {
      id: 1,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 4.5,
    },
    {
      id: 2,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 2.5,
    },
    {
      id: 3,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
  ]

  return (
    <MostReadContext.Provider
      value={{
        handleNextPage,
        handleBackPage,
        currentPage,
        pages,
        mostReadMangas,
      }}
    >
      {children}
    </MostReadContext.Provider>
  )
}

export default MostReadProvider
