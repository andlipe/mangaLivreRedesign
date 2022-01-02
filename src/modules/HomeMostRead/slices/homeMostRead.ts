import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  pages: 4,
  currentPage: 1,
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
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = homeMostReadSlice.actions

export default homeMostReadSlice.reducer
