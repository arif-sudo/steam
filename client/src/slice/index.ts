import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    nav: "navlight",
    lang: "en"
}
type stateType = {
    mode: string,
    nav: string,
    lang: string
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
        },
        setLang(state: stateType, action: { payload: string; }){
            state.lang = action.payload
        }
    }
})

export const {setMode, setNav, setLang}  = authSlice.actions

export default authSlice.reducer