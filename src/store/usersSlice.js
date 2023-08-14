import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
            state.inputValue = ''
        },
        clearUser: (state, action) => {
            state.inputValue = ''
        },
        deleteUser: (state, action) => {
            state.users = []
            state.inputValue = ''
        }
    }
})


export const { changeInput, addUser, clearUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer