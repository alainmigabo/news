import React from "react";
import {RiAccountCircleLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import { Popup } from "./loginpopup";

function Navigation(){
    return(
        <header>
            <Popup/>
            <Link to="/"><h1>BLAIR OWENS</h1></Link>
            <ul>
                <Link to="/OurProperties"><li>Our Properties</li></Link>
                <Link to="/listings"><li>MLS Search</li></Link>
                <Link to="/communities"><li>Communities</li></Link>
                <Link to="/news"><li>News</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/about"><li>About Blair</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <div id="account-icon" onClick={()=>{
                document.getElementById("background").style.display = "flex";
            }}>
            <RiAccountCircleLine/>
            </div>
        </header>
    );
}

export default Navigation;