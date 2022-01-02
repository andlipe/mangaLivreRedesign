import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  pages: 4,
  currentPage: 1,
  maxScroll: 0,
}

export const homeMostReadSlice = createSlice({
  name: 'homeMostRead',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      if (action.payload > state.pages) {
        state.currentPage = 1
      } else if (action.payload < 1) {
        state.currentPage = state.pages
      } else {
        state.currentPage = action.payload
      }
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = action.payload
    },
    setMaxScroll: (state, action: PayloadAction<number>) => {
      state.maxScroll = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePage, setPages, setMaxScroll } = homeMostReadSlice.actions

export default homeMostReadSlice.reducer
