import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    a: "",
}

export const editSlice = createSlice ({
    name: "a",
    initialState,
    reducers:{
        a: (state,action) =>{
            state.a = action.payload
        }
    }
})

export const EditListing = (id, token, data) =>{
    axios({
        method: "PATCH",
        url: `https://blog-apis-jqjw.onrender.com/api/realstate/update/${id}`,
        data: data,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const {a} = editSlice.actions;
export default editSlice.reducers