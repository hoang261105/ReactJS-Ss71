import { createSlice } from "@reduxjs/toolkit";

const menuState: string = "open";

const menuReducer = createSlice({
    name: "menu",
    initialState: menuState,
    reducers: {
        toggleMenu: (state) => {
            return state === "open" ? "close" : "open";
        }
    }
})

export const {toggleMenu} = menuReducer.actions
export default menuReducer.reducer
