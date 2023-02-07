import React from "react";
import '../styles/homecard.css';

export const Homecard = ({placename,placeaddress,placeimage})=>{
    return(
        <div className="home-card" style={{background:`url(${placeimage})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <div className="placename">
                {placename}
            </div>
            <div className="placeaddress">
                {placeaddress}
            </div>
        </div>
    )
}