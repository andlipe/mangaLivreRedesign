import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  pages: 1,
  currentPage: 4,
}

export const homeMostReadSlice = createSlice({
  name: 'homeMostRead',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      if (action.payload > state.pages) {
        state.currentPage = 1
      }
      state.currentPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = homeMostReadSlice.actions

export default homeMostReadSlice.reducer
