import React, { useEffect } from "react";
import '../styles/dashboard.css';
import {FiSearch} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';

export const Dashboard = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/dashboard/news")
    })
    return (
        <div id="dashboard">
            <div id="dashboard-top-navigation">
                <div id="logo">
                    Blair Owens
                </div>
                <div id="search-options">
                    <button id="search-hider" onClick={()=>{
                        document.getElementById("search-opener").style.display = "flex";
                        document.getElementById("search-hider").style.display = "none";
                        document.getElementById("search-options").style.padding = "10px 20px";
                        document.getElementById("search-options").style.borderRadius = "60px";
                    }}>
                        <RxCross2 style={{color:"#3270FC"}}/>
                    </button>
                    <button id="search-opener" onClick={()=>{
                        document.getElementById("search-opener").style.display = "none";
                        document.getElementById("search-hider").style.display = "flex";
                        document.getElementById("search-options").style.padding = "10px 8px";
                        document.getElementById("search-options").style.borderRadius = "50%";
                    }}>
                        <FiSearch style={{color:"#3270FC",fontSize: 13}}/> Search...
                    </button>
                </div>
                <div id="top-navlinks">
                    <NavLink to="/dashboard/OurPropertides">Our Properties</NavLink>
                    <NavLink to="/dashboard/mlsSearch">MLS Search</NavLink>
                    <NavLink to="/dashboard/communities">Communities</NavLink>
                    <NavLink to="/dashboard/news">News</NavLink>
                    <NavLink to="/dashboard/services">Services</NavLink>
                    <NavLink to="/dashboard/about">About Blair</NavLink>
                </div>
                <div id="top-navigation-boxes">
                    <div className="top-navigation-boxes"><div id="account-image"></div></div>            
                    <div className="top-navigation-boxes">
                        <IoIosNotificationsOutline/>    
                    </div>            
                    <div className="top-navigation-boxes" style={{borderRight: "1px solid rgba(128, 128, 128, 0.473)"}}><TfiWorld/></div> 
                </div>         
                <div id="top-navigation-addbox">
                    <div id="add-listing-button">
                        <div id="add-sign">
                            <AiOutlinePlus/>
                        </div>
                        <div>Add Listing</div>
                    </div>
                </div>
            </div>
            <div id="dashboard-left-navigation">

            </div>
            <div style={{height:"100vh",width:"80%",marginLeft:"20%"}}>
                <Outlet/>
            </div>
        </div>
    )
}