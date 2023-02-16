import React, { useEffect } from "react";
import '../styles/mylisting.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {IoMdArrowDropdown} from 'react-icons/io';
import {AiOutlineSearch} from 'react-icons/ai';
import { Listing } from "../components/listing";
import { NavLink } from "react-router-dom";
import { GetPost } from "../features/postSlice/createSlice";
import { useDispatch, useSelector } from "react-redux";

export const Mylistings = () => {
    const {posted} = useSelector((state)=>state.create);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetPost())
    },[posted])

    let postsarray = useSelector((state)=>state.create.data)

    return(
        <div id="mylisting" style={{width:"calc(100% - 160px)",marginLeft:80}}>
            <div id="mylisting-upper-section">

            </div>
            <div id="mylisting-under-top">
                <NavLink to={"/dashboard/addnew"}>
                    <div id="add-new-listing-button">
                        Add New 
                        <AiOutlinePlus/>
                    </div>
                </NavLink>
                <div id="sort-by">
                    <div>Sort By:</div>
                    <div id="real-sort-by">
                        <span style={{marginLeft:10}}>lastes</span>
                        <IoMdArrowDropdown style={{marginRight:10}}/>
                    </div>
                </div>
                <div id="mylisting-search">
                    <input type={"text"} placeholder={"Search"} style={{height:"calc(100% - 2px)",width:"calc(100% - 40px)",border:"none",borderRadius:3,paddingLeft:20}}/>
                    <button id="mylisting-search-icon">
                        <AiOutlineSearch/>
                    </button>
                </div>
            </div>
            <div id="mylistings-holder">
                {
                    postsarray?.map((element) => {
                        return (
                            <Listing title={element.title} province={element.location.province} district={element.location.district} houseImage={element.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}