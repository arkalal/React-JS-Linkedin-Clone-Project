import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload.value
        },
        logout: (state) => {
            state.value = null
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer