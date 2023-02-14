import {createSlice} from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        collapse: false,
        permissionList:[],
        name: null,
        token: null
    },
    reducers: {
        updateCollapse: (state) => {
            state.collapse = !state.collapse
        },
        updateName: (state,action) => {
            state.name = action.payload
        },
        updateToken:(state,action)=>{
            state.token = action.payload
        },
        updatePermission:(state,action)=>{
            state.permissionList = action.payload
        }
    }
})

export const {updateCollapse,updateName,updateToken,updatePermission} = globalSlice.actions

export default globalSlice.reducer
