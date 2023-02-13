import React, { useEffect } from "react";
import '../styles/dashboard.css';
import {FiSearch} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {AiOutlineDashboard} from 'react-icons/ai';
import {RiAccountCircleLine} from 'react-icons/ri';
import {RiMessage2Line} from 'react-icons/ri';
import {TiGroupOutline} from 'react-icons/ti';
import {CiViewList} from 'react-icons/ci';
import {BsCalendar2Check} from 'react-icons/bs';
import {TbMessages} from 'react-icons/tb';
import {AiOutlineFileAdd} from 'react-icons/ai';

export const Dashboard = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/dashboard/news")
    },[])
    return (
        <div id="dashboard">
            <div id="dashboard-top-navigation">
                <NavLink to="/dashboard/homepage"> <div id="logo">
                    Blair Owens
                </div></NavLink>
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
                    <NavLink to="/dashboard/OurProperties">Our Properties</NavLink>
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
                <div id="dashboard-main-links">
                    <div className="main-title">
                        MAIN
                    </div>
                    <NavLink to={"/dashboard/dashboard1"}>
                        <div className="dashboard-left-navigation-links">
                            <div className="dashboard-icons">
                                <AiOutlineDashboard style={{color: "#3270FC"}} />
                                <span>Dashboard</span>
                            </div>
                        </div>
                    </NavLink>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <RiAccountCircleLine style={{color: "#3270FC"}} />
                            <span>Edit Profile</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <RiMessage2Line style={{color: "#3270FC"}} />
                            <span>Messages</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <TiGroupOutline style={{color: "#3270FC"}} />
                            <span>Agents List</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <AiOutlinePlus style={{color: "#3270FC"}} />
                            <span>Submenu</span>
                        </div>
                    </div>
                    <div className="main-title">
                        LISTINGS
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <CiViewList style={{color: "#3270FC"}} />
                            <span>My Listings</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <BsCalendar2Check style={{color: "#3270FC"}} />
                            <span>Bookings</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <TbMessages style={{color: "#3270FC"}} />
                            <span>Reviews</span>
                        </div>
                    </div>
                    <div className="dashboard-left-navigation-links">
                        <div className="dashboard-icons">
                            <AiOutlineFileAdd style={{color: "#3270FC"}} />
                            <span>Add New</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100%",width:"80%",marginLeft:"20%",backgroundColor:"#F5F7FB"}}>
                <div id="dashboard-top">
                    <div id="dashboard-top1">
                        
                    </div>
                    <div id="dashboard-top2">
                        
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}