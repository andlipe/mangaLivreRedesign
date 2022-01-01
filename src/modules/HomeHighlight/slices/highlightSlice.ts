import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHighlightState } from '../types/IHighlight'

const initialState: IHighlightState = {
  highlightsMangas: [
    {
      id: 1,
      chapter: 1340,
      image: '/Luffy.png',
      time: 'Hoje - 17:30',
      selected: true,
      background: '#A4251D',
    },
    {
      id: 2,
      chapter: 14,
      image: '/Luffy.png',
      time: 'Hoje - 18:40',
      selected: false,
      background: '#A58038',
    },
    {
      id: 3,
      chapter: 0,
      image: '/Luffy.png',
      time: 'Hoje - 18:40',
      selected: false,
      background: '#37497F',
    },
    {
      id: 4,
      chapter: 0,
      image: '/Luffy.png',
      time: 'Hoje - 18:40',
      selected: false,
      background: '#382730',
    },
  ],
  counter: 1,
}

export const highlightSlice = createSlice({
  name: 'highlight',
  initialState,
  reducers: {
    changeSelected: (state, action: PayloadAction<number>) => {
      state.highlightsMangas.forEach((manga) => {
        if (manga.selected) {
          manga.selected = false
        }
        manga.id === action.payload ? (manga.selected = true) : null
      })
    },
    increment: (state) => {
      console.log(state.counter)
      if (state.counter === state.highlightsMangas.length) {
        state.counter = 1
      } else {
        state.counter += 1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSelected, increment } = highlightSlice.actions

export default highlightSlice.reducer
