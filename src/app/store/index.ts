import { configureStore } from '@reduxjs/toolkit'
import { highlightReducer } from '@modules/HomeHighlight'

export const store = configureStore({
  reducer: {
    highlight: highlightReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
