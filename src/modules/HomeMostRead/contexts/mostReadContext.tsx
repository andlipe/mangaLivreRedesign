import { IMangaCard } from '@components/MangaCard'
import { createContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { changePage, setMaxScroll, setPages } from '../slices/homeMostRead'

interface IMostReadContext {
  handleNextPage: () => void
  handleBackPage: () => void
  currentPage: number
  pages: number
  mostReadMangas: IMangaCard[]
  scrollDiv: React.RefObject<HTMLDivElement>
}

interface IMostReadProvider {
  children: React.ReactNode
}

export const MostReadContext = createContext({} as IMostReadContext)

function MostReadProvider({ children }: IMostReadProvider) {
  const scrollDiv = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { currentPage, pages, maxScroll } = useSelector(
    (state: RootState) => state.homeMostRead
  )

  const handleNextPage = () => {
    if (scrollDiv.current!.scrollLeft === maxScroll) {
      scrollDiv.current!.scrollLeft = 0
    } else {
      scrollDiv.current!.scrollLeft += Math.round(maxScroll / pages) * 1.4
    }

    dispatch(changePage(currentPage + 1))
  }

  const handleBackPage = () => {
    if (scrollDiv.current!.scrollLeft === 0) {
      scrollDiv.current!.scrollLeft = maxScroll
    } else {
      scrollDiv.current!.scrollLeft -= Math.round(maxScroll / pages) * 1.4
    }
    dispatch(changePage(currentPage - 1))
  }

  const mostReadMangas = [
    {
      id: 1,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 1',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 4.5,
    },
    {
      id: 2,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 2',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 2.5,
    },
    {
      id: 3,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 3',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 4,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 4',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 5,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 5',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 6,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 6',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 7,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 7',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 8,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 8',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 9,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 9',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 10,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 10',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 11,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 11',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
    {
      id: 12,
      cover: '/cover.png',
      category: 'Ação',
      title: 'One Piece 12',
      description:
        'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado...',
      stars: 3,
    },
  ]

  useEffect(() => {
    dispatch(setPages(Math.round(mostReadMangas.length / 3)))
    dispatch(
      setMaxScroll(
        scrollDiv.current!.scrollWidth - scrollDiv.current!.clientWidth
      )
    )
  }, [])

  return (
    <MostReadContext.Provider
      value={{
        handleNextPage,
        handleBackPage,
        currentPage,
        pages,
        mostReadMangas,
        scrollDiv,
      }}
    >
      {children}
    </MostReadContext.Provider>
  )
}

export default MostReadProvider
