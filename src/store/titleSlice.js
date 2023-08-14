import { createSlice } from "@reduxjs/toolkit";


const titleSlise = createSlice({
    name: 'titleSlice',
    initialState: {
        title: 'old title',
        inputValue: ''
    },
    reducers: {
        ChangeTitle: (state, action) => {
            state.title = 'new title'
        },
        ChangeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ''
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        clearInput: (state, action) => {
            state.inputValue = ''
        },
        deleteTitle: (state, action) => {
            state.title = ''
            state.inputValue = ""
        }
    }
})

export const { ChangeTitle, ChangeTitleWithParams, changeInputAction, clearInput, deleteTitle } = titleSlise.actions

export default titleSlise.reducer