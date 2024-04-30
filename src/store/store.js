import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from './colorsSlice'

export const store = configureStore({
    reducer: {
        colors: colorsReducer
    },
})
