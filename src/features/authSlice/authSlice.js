import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
    username: "",
    iisuseradmin: false,
    loginstatus: false, 
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
        },
        id: (state,action)=>{
            state.username = action.payload;
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
        dispatch(token(feedback.data.token));
        localStorage.setItem("token",feedback.data.token);
        dispatch(login(feedback.data.data));
        dispatch(id(feedback.data.username));
    }).catch((error)=>{
        console.log(error.message);
        if (error.message == "Request failed with status code 400") {
            document.getElementById("error").style.visibility = "visible";
        }
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

export const {login,token,id} = authSlice.actions;
export default authSlice.reducer;