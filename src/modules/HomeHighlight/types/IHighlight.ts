export interface IHighlightsMangas {
  id: number
  chapter: number
  image: string
  time: string
  selected: boolean
  background: string
}

export interface IHighlightState {
  highlightsMangas: IHighlightsMangas[]
}
