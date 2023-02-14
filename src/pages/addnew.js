import React from "react";
import "../styles/addnew.css";
import {FaInfo} from 'react-icons/fa';
import {IoBriefcaseOutline} from 'react-icons/io5';
import {IoMdArrowDropdown} from 'react-icons/io'

export const AddListing = () => {
    return (
    <div>
        <h2 style={{marginLeft:80,color:"#144273"}}>Add Listing</h2>
        <div id="addnew-body">
            <div id="addnew-basic-info-title">
                <FaInfo style={{color:"#3270FC",marginLeft:20,marginRight:10}}/>
                <span style={{color:"#144273",fontSize:14}}>Basic Informations</span>
            </div>
            <div id="addnew-basic-info-mainbody">
                <div className="new-credentials-combo">
                    <div className="credential-title">Listing Title</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoBriefcaseOutline/></div>
                        <input type={"text"} placeholder="Name Of Your Business" className="credential-desc-input"/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Listing Title</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoBriefcaseOutline/></div>
                        <input type={"text"} placeholder="Name Of Your Business" className="credential-desc-input"/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Listing Title</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoBriefcaseOutline/></div>
                        <input type={"text"} placeholder="Name Of Your Business" className="credential-desc-input"/>
                    </div>
                </div>
                <div className="new-credentials-combo" id="option">
                    <div className="credential-title">Listing Title</div>
                    <div className="main-credential">
                        <div className="credential-desc-option">Categories</div>
                        <div className="credential-icon-option"><IoMdArrowDropdown/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
