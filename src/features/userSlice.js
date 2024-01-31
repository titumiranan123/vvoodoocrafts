import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: true
    },
    reducers: {
        login: (state, action) => {
            console.log(state, action)
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token)
            console.log(action.payload.user)
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        },
        logout: (state) => {
            window.location.replace('/')
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            state.isAuthenticated = false;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
            // console.log(`${action.payload.user},user`)
            // if (!localStorage.getItem('user')) {
            //     localStorage.setItem("user", JSON.stringify(action.payload.user))
            // }
            if (localStorage.getItem("token")) {
                state.token = localStorage.getItem("token")
                state.isAuthenticated = true;
            }
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})
export const { login, logout, setUser, setLoading } = userSlice.actions

export default userSlice.reducer;
