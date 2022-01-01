export interface IHighlightsMangas {
  id: number
  chapter: string
  image: string
  time: string
  selected: boolean
  background: string
}

export interface IHighlightState {
  highlightsMangas: IHighlightsMangas[]
  counter: number
}
