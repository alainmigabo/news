import React from "react";
import '../styles/listing.css';
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';
import {BsFillEyeFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {BiTrash} from 'react-icons/bi';
import {AiOutlineEdit} from 'react-icons/ai';
import { Delete, todelete } from "../features/postSlice/createSlice";
import { useDispatch, useSelector } from "react-redux";
import {AiFillHeart} from 'react-icons/ai';
import { Like } from "../features/like/likeSlice";

export const Listing = ({title,province,district,houseImage,properties,array,id}) => {
    const {tobe_deleted} =useSelector((state)=>state.create)
    const dispatch = useDispatch();
    const [hovering, setHovering] = useState(false)
    const [liked,setLike] = useState(false)
    localStorage.setItem("props",JSON.stringify(properties))

    return(
        <div id="listing-card">
            <div id="listing-card-image" 
            onMouseOver={()=>setHovering(true)}
            onMouseOut={()=>setHovering(false)}
            style={{
                background:`url(${houseImage})`,
                backgroundPosition: "center",
                backgroundSize:"cover"
            }}>
                <div id="view-popup" style={{
                    display: hovering ? "flex" : "none"
                }}>
                    <NavLink to={`listing-details/${id}`}>
                        <div id="view-listing-details" onClick={()=>{
                            localStorage.setItem("properties",JSON.stringify(properties))
                            localStorage.setItem("cardsarray",JSON.stringify(array))
                        }}>VIEW</div>
                    </NavLink>
                </div>
            </div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    {title}
                </div>
                <div id="listing-card-address">
                    <IoLocationSharp style={{color:"#3270FC"}}/>
                    {province}, {district}
                </div>
                <div id="listing-card-rating">
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill/>
                </div>
                <div id="listing-card-viewership">
                    <BsFillEyeFill style={{marginRight:5,color:"#3270FC"}}/>
                    <div> 645</div>
                    <div><AiFillHeart id="like-button" style={{
                        cursor:"pointer",
                        marginLeft:20,
                        fontSize:15,
                        color: liked ? "red" : "grey",
                    }}
                    onClick={()=>{
                        liked ? setLike(false) : setLike(true)
                        dispatch(Like(id))
                    }}/></div><div style={{marginLeft:5}}>0</div>
                </div>
                <div className="delete-icon"><BiTrash style={{cursor:"pointer"}} onClick={()=>{
                    document.getElementById("warning-message").style.display = "flex";
                    localStorage.setItem("tobe_deleted_id",id)
                }}/></div>
                <NavLink to={"/dashboard/edit-listing"}><div className="edit-icon"><AiOutlineEdit style={{cursor:"pointer"}} onClick={()=>{
                    localStorage.setItem("id",id)
                }}/></div></NavLink>
            </div>
        </div>
    )
}