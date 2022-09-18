import {createSlice} from "@reduxjs/toolkit"

export const updateSlice = createSlice({
    name: "update",
    initialState: {
        list: ["ahmet", "mehmet", "furkan", "cumali"]
    },
    reducers: {
        update: (state, action) => {
            var index = state.list.findIndex((name) => name === "ahmet");
            console.log('index? : ' ,index)
            state.list[index] = action.payload
        }
    }
})

export const {update} = updateSlice.actions
export default updateSlice.reducer

""