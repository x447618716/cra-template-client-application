import {createSlice} from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        collapse: false,
        token: null
    },
    reducers: {
        updateCollapse: (state) => {
            state.collapse = !state.collapse
        }
    }
})

export const {updateCollapse} = globalSlice.actions

export default globalSlice.reducer