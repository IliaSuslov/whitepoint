import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: [],
}

export const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        deleteColor: (state, { payload }) => {
            state.state = state.state.filter((_, index) => index !== payload)
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
        selectColor: (state, { payload }) => {
            state.selectedColorIndex = payload
        },
    }
})

export const { deleteColor, addColor, updateColor, selectColor } = colorsSlice.actions

export default colorsSlice.reducer