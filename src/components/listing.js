import React from "react";
import '../styles/listing.css';
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';
import {BsFillEyeFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Listing = ({title,province,district,houseImage,properties,array,id}) => {

    const [hovering, setHovering] = useState(false)

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
                    <span>Viewed - 645</span>
                </div>
            </div>
        </div>
    )
}