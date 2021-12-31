import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHighlightState } from '../types/IHighlight'
import Luffy from '@assets/images/Luffy.png'

const initialState: IHighlightState = {
  highlightsMangas: [
    {
      id: 1,
      chapter: 1340,
      image: Luffy,
      time: 'Hoje - 17:30',
      selected: true,
      background: '#A4251D',
    },
    {
      id: 2,
      chapter: 14,
      image: Luffy,
      time: 'Hoje - 18:40',
      selected: false,
      background: '#A58038',
    },
    {
      id: 3,
      chapter: 0,
      image: Luffy,
      time: 'Hoje - 18:40',
      selected: false,
      background: '#37497F',
    },
    {
      id: 4,
      chapter: 0,
      image: Luffy,
      time: 'Hoje - 18:40',
      selected: false,
      background: '#382730',
    },
  ],
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
  },
})

// Action creators are generated for each case reducer function
export const { changeSelected } = highlightSlice.actions

export default highlightSlice.reducer
