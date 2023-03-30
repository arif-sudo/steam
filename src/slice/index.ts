import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    nav: "navlight"
}
//why mode has one more mode inside it 
type stateType = {
    mode: string,
    nav: string
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode(state:stateType){
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setNav(state: stateType){
            state.nav = state.nav === "navlight" ? "navdark": "navlight"
        }
    }
})

export const {setMode, setNav}  = authSlice.actions

export default authSlice.reducer