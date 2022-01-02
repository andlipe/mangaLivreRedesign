import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { changePage } from '../slices/homeMostRead'

interface IMostReadContext {
  handleNextPage: () => void
  handleBackPage: () => void
  currentPage: number
  pages: number
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

  return (
    <MostReadContext.Provider
      value={{ handleNextPage, handleBackPage, currentPage, pages }}
    >
      {children}
    </MostReadContext.Provider>
  )
}

export default MostReadProvider
