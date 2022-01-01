import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHighlightsMangas, IHighlightState } from '../types/IHighlight'

const initialState: IHighlightState = {
  highlightsMangas: [],
  counter: 1,
}

export const highlightSlice = createSlice({
  name: 'highlight',
  initialState,
  reducers: {
    setHighlightedMangas: (
      state,
      action: PayloadAction<IHighlightsMangas[]>
    ) => {
      state.highlightsMangas = action.payload
    },
    changeSelected: (state, action: PayloadAction<number>) => {
      state.highlightsMangas.forEach((manga) => {
        if (manga.selected) {
          manga.selected = false
        }
        manga.id === action.payload ? (manga.selected = true) : null
      })
    },
    increment: (state) => {
      if (state.counter === state.highlightsMangas.length - 1) {
        state.counter = 0
      } else {
        state.counter += 1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSelected, increment, setHighlightedMangas } =
  highlightSlice.actions

export default highlightSlice.reducer
