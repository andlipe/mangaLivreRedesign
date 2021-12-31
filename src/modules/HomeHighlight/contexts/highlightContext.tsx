import { createContext, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { changeSelected, increment } from '../slices/highlightSlice'
import { IHighlightsMangas } from '../types/IHighlight'

interface IHighlightContext {
  highlightsMangas: IHighlightsMangas[]
  changeHighlightManga: (id: number) => void
  highlightedManga: IHighlightsMangas | undefined
}

interface IHighlightProvider {
  children: React.ReactNode
}

export const HighlightContext = createContext({} as IHighlightContext)

function HighlightProvider({ children }: IHighlightProvider) {
  const dispatch = useDispatch()
  const { highlightsMangas, counter } = useSelector(
    (state: RootState) => state.highlight
  )

  const highlightedManga = useMemo(
    () => highlightsMangas.find((manga) => manga.selected),
    highlightsMangas
  )

  const changeHighlightManga = (id: number) => {
    dispatch(changeSelected(id))
  }

  useEffect(() => {
    const loop = setInterval(() => {
      dispatch(increment())
      changeHighlightManga(counter)
    }, 5000)
    return () => clearInterval(loop)
  }, [counter])

  return (
    <HighlightContext.Provider
      value={{ highlightsMangas, changeHighlightManga, highlightedManga }}
    >
      {children}
    </HighlightContext.Provider>
  )
}

export default HighlightProvider
