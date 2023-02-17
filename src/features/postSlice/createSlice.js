import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posted: false,
    data: [],
    singleListing: {},
    tobe_deleted: "",
    deleted: false,
}

export const addSlice = createSlice({
    name: "a",
    initialState,
    reducers:{
        post: (state) => {
            state.posted = true;
        },
        getdata: (state,action)=>{
            state.data = action.payload
        },
        getSingleListing: (state, action)=>{
            state.singleListing = action.payload
        },
        todelete: (state,action)=>{
            state.tobe_deleted = action.payload
        },
        deleted: (state)=>{
            state.deleted = true
        }
    }
})

export const CreatePost = (credentials) => (dispatch) =>{
    let  token = (localStorage.getItem("token"));
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
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        console.log(response,"from posting");
        dispatch(post());
    }).catch((err)=>{
        console.log(err,"from posting")
    })
}

export const GetPost = () => (dispatch) =>{
    axios({
        method: "GET",
        // url: "https://klabapi.onrender.com/api/posts",
        url: "https://blog-apis-jqjw.onrender.com/api/realstate/all",
    }).then((result)=>{
        console.log(result);
        dispatch(getdata(result.data.realstate))
    }).catch((error)=>{
        console.log(error);
    })
}

export const fetchSingleListing = (id) => (dispatch) => {
    axios({
        method: "GET",
        url: `https://blog-apis-jqjw.onrender.com/api/realstate/${id}`
    }).then((res)=>{
        console.log(res.data)
        dispatch(getSingleListing(res.data))
    })
}

export const Delete = (dispatch) => {
    const token = (localStorage.getItem("token"));
    const id = localStorage.getItem("tobe_deleted_id")
    console.log(id);
    axios({
        method: "DELETE",
        url: `https://blog-apis-jqjw.onrender.com/api/realstate/delete/${id}`,
        Authorization: `Bearer ${token}`
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}

export const {getdata, post,getSingleListing,deleted,todelete} = addSlice.actions;
export default addSlice.reducer;