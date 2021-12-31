import { createContext } from 'react'

interface IHighlightContext {}

interface IHighlightProvider {
  children: React.ReactNode
}

const HighlightContext = createContext({} as IHighlightContext)

function HighlightProvider({ children }: IHighlightProvider) {
  return (
    <HighlightContext.Provider value={{}}>{children}</HighlightContext.Provider>
  )
}

export default HighlightProvider
