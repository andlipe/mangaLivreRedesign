import { useContext } from 'react'
import { HighlightContext } from '../contexts/highlightContext'

export function useHighlight() {
  const context = useContext(HighlightContext)

  return context
}
