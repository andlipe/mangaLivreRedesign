import { useContext } from 'react'
import { MostReadContext } from '../contexts/mostReadContext'

export function useMostRead() {
  const context = useContext(MostReadContext)

  return context
}
