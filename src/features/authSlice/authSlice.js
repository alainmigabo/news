import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loginstatus: true, 
    token: "",
    data: {},
                                                                                                                                                
}

export const authSlice = createSlice({
    name:"login",
    initialState,
    reducers: {
        login: (state,action)=>{
            state.data = action.payload;
            state.loginstatus = true;
        },
        token: (state,action)=>{
            state.token = action.payload;
        }
    }
})

export const userLogin = (userdata) => (dispatch) =>{
    axios({
        method: "POST",
        url: "https://mashami.cyclic.app/api/auth/login",
        data: userdata,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            accept: "application/json",
        }
    }).then((feedback)=>{
        console.log(feedback);
    })
}

export const userRegister = (userdata) => (dispatch) => {
    axios({
        method: "POST",
        url: "https://mashami.cyclic.app/api/auth/register",
        data: userdata,
    }).then((feedback)=>{
        console.log(feedback);
    })
}

export const {login,token} = authSlice.actions;
export default authSlice.reducer;