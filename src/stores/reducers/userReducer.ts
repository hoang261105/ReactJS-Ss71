import { createSlice } from "@reduxjs/toolkit"

interface User{
    id:number,
    name:string,
    favorite:boolean
}

const state:User[] = [
    {id:1,name:"Nguyễn Văn A",favorite:true},
    {id:2,name:"Nguyễn Văn B",favorite:true},
    {id:3,name:"Nguyễn Văn C",favorite:false},
    {id:4,name:"Nguyễn Văn D",favorite:true},
]

const userReducer = createSlice({
    name:"userReducer",
    initialState:state,
    reducers:{
        users:state => state
    }
})

export const {users} = userReducer.actions

export default userReducer.reducer