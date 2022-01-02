import { configureStore } from '@reduxjs/toolkit'
import { highlightReducer } from '@modules/HomeHighlight'
import { homeMostReadReducer } from '@modules/HomeMostRead'

export const store = configureStore({
  reducer: {
    highlight: highlightReducer,
    homeMostRead: homeMostReadReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
