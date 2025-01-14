import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}
   
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials:(state,action) => {
            state.user = action.payload;
            // localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.user = null;
            // localStorage.removeItem('user')
        }
    }
})

export const {setCredentials,logout} = authSlice.actions

export default authSlice.reducer;