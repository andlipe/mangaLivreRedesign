import HomeHighlight from './components/HomeHighlight'
import { HighlightProvider } from './contexts'
import { getHighlightMangas } from './requests'
import highlightReducer, { setHighlightedMangas } from './slices/highlightSlice'
import { IHighlightsMangas } from './types/IHighlight'

export {
  HomeHighlight,
  HighlightProvider,
  highlightReducer,
  getHighlightMangas,
  setHighlightedMangas,
  IHighlightsMangas,
}
