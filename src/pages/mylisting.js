import React from "react";
import '../styles/mylisting.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {IoMdArrowDropdown} from 'react-icons/io';
import {AiOutlineSearch} from 'react-icons/ai';
import { Listing } from "../components/listing";

export const Mylistings = () => {
    return(
        <div id="mylisting" style={{paddingTop:80,width:"calc(100% - 160px)",marginLeft:80}}>
            <div id="mylisting-upper-section">

            </div>
            <div id="mylisting-under-top">
                <div id="add-new-listing-button">
                    Add New <AiOutlinePlus/>
                </div>
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
                <Listing/>
                <Listing/>
            </div>
        </div>
    )
}