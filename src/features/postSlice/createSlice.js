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
        getdata: (state,action)=>{
            state.data = action.payload
        }
    }
})

export const CreatePost = (credentials) => (dispatch) =>{
    let  token = (localStorage.getItem("token"));
    console.log(token)
    // const idd = token.split('"')[1]
    // const userid=token._id
    // console.log(userid)
    // const username=userid.username
    // console.log(username)
    axios({
        method:"POST",
        // url: "https://klabapi.onrender.com/api/posts/create",
        url: "https://blog-apis-jqjw.onrender.com/api/realstate/create",
        data: credentials,
        headers: {
            // Authorization: `Bearer ${token}`
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNlYTQyNGQyOTFmOTMwYjE1Y2EzODNjIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3NjQ4NTEyMywiZXhwIjoxNjc2NDkyMzIzfQ.8gcU8t07HURZ1LrfTGVZO0VkmqsCu4sxRJA2EJGPlAM"
        }
    }).then((response)=>{
        console.log(response,"from posting");
    }).then(()=>{
        GetPost(dispatch);
    }).catch((err)=>{
        console.log(err,"from posting")
    })
}

export const GetPost = (dispatch) =>{
    axios({
        method: "GET",
        // url: "https://klabapi.onrender.com/api/posts",
        url: "https://blog-apis-jqjw.onrender.com/api/realstate/all",
    }).then((result)=>{
        dispatch(getdata(result))
    }).catch((error)=>{
        console.log(error);
    })
}

export const {getdata} = addSlice.actions;
export default addSlice.reducer;