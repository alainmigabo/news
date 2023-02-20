import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    liked: false,
}

export const likeSlice = createSlice({
    name: "a",
    initialState,
    reducers:{
        like: (state)=>{
            state.liked = true;
        }
    }
})

export const Like = (id) =>{
    axios({
        method: "PATCH",
        url: `https://blog-apis-jqjw.onrender.com/api/realstate/likes/${id}`,
    }).then((result)=>{
        console.log(result);
    })
}