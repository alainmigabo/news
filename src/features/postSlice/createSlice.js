import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    a: "",
    data: {},
}

export const addSlice = createSlice({
    name: "a",
    initialState,
    reducers:{
        a:(state,action)=>{
            state.a = action.payload
        }
    }
})

export const CreatePost = (credentials) => async(dispatch) =>{
    let  token = (localStorage.getItem("token"))
    axios({
        method:"POST",
        url: "https://mashami.cyclic.app/api/post/create",
        data: credentials,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type":"application/json",
            accept: "application/json",
            Authorization: "Bearer"
        }
    }).then((response)=>{
        console.log(response);
    })
}