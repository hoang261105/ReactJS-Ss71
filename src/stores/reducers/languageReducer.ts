import { createSlice } from "@reduxjs/toolkit"

const state:string[] = ["Vietnamise","English"]

const languageReducer = createSlice({
    name:"languageReducer",
    initialState:state,
    reducers:{
        language:state => state
    }
})

export const {language} = languageReducer.actions

export default languageReducer.reducer