import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    role: "",
    isuseradmin: false,
    loginstatus: false, 
    usercreated: false,
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
        role: (state,action)=>{
            state.role = action.payload;
        },
        createUser: (state)=>{
            state.usercreated = true;
        }
    }
})

export const userLogin = (userdata) => (dispatch) =>{
    axios({
        method: "POST",
        url: "https://blog-apis-jqjw.onrender.com/api/auth/login",
        data: userdata,
    }).then((feedback)=>{
        dispatch(token(feedback.data.token));
        localStorage.setItem("token",feedback.data.token);
        dispatch(login(feedback.data.data));
        dispatch(role(feedback.data.role));
    }).catch((error)=>{
        if (error.message == "Request failed with status code 400") {
            document.getElementById("error").style.visibility = "visible";
        }
    })
}

export const userRegister = (userdata) => (dispatch) => {
    axios({
        method: "POST",
        url: "https://blog-apis-jqjw.onrender.com/api/auth/register",
        data: userdata,
    }).then((feedback)=>{
        dispatch(createUser())
    })
}

export const {login,token,role,createUser} = authSlice.actions;
export default authSlice.reducer;