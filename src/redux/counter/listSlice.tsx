import {createSlice} from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name:'list',
    initialState: {
        list:[]
    },
    reducers: {
        addItem: (state,action) => {
            state.list = [...state.list,action.payload]
        },
    }
})

export const {addItem}  = listSlice.actions

export default listSlice.reducer