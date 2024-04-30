import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: [],
}

export const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        deleteColor: (state, { payload }) => {
            state.state = state.state.filter(paletteColor => paletteColor !== payload)
        },
        addColor: (state, { payload }) => {
            const duplicate = state.state.find(color => color === payload)
            if (!duplicate) {
                state.state = [...state.state, payload]
            }
        },
        updateColor: (state, { payload }) => {
            const { index, color } = payload
            state.state[index] = color
        },
    }
})

export const { deleteColor, addColor, updateColor } = colorsSlice.actions

export default colorsSlice.reducer