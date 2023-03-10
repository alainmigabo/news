import React, { useEffect, useState } from "react";
import "../styles/addnew.css";
import {FaInfo} from 'react-icons/fa';
import {IoBriefcaseOutline} from 'react-icons/io5';
import {IoMdArrowDropdown} from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { CreatePost } from "../features/postSlice/createSlice";
import {TbBed} from 'react-icons/tb';
import {FaBath} from 'react-icons/fa';
import {BsFillPatchQuestionFill} from 'react-icons/bs';
import {FaDollarSign} from 'react-icons/fa';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {RiLandscapeFill} from 'react-icons/ri';
import {MdAreaChart} from 'react-icons/md';
import { GetPost } from "../features/postSlice/createSlice";
import { EditListing } from "../features/postSlice/editSlice";

export const Edit = () => {
    const obj = JSON.parse(localStorage.getItem("props"));
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    useEffect(()=>{
        setlistingTitle(obj.title)
        setlistingProvince(obj.location.province)
        setlistingStatus(obj.Status)
        setlistingLotsize(obj.lotsize)
        setlistingYearbuilt(obj.yearbuilt)
        setlistingBathrooms(obj.bath)
        setlistingBeds(obj.beds)
        setlistingPrice(obj.price)
        setlistingStreet(obj.location.street)
        setlistingDistrict(obj.location.district)
        setlistingDescription(obj.Description)
        setHouseOwner(obj.offerBy)
        setHouseSqft(obj.SqFt)
    },[])
    const [listingTitle,setlistingTitle] = useState("");
    const [listingProvince,setlistingProvince] = useState("");
    const [listingStatus,setlistingStatus] = useState("");
    const [listingLotsize,setlistingLotsize] = useState("");
    const [listingYearbuilt,setlistingYearbuilt] = useState("");
    const [listingBathrooms,setlistingBathrooms] = useState("");
    const [listingBeds,setlistingBeds] = useState("");
    const [listingPrice,setlistingPrice] = useState("");
    const [listingStreet,setlistingStreet] = useState("");
    const [listingDistrict,setlistingDistrict] = useState("");
    const [listingHouseImage,setlistingHouseImage] = useState("");
    const [listingDescription,setlistingDescription] = useState("");
    const [listingOwner,setHouseOwner] = useState("");
    const [listingSqft,setHouseSqft] = useState("");
    const [listingProfile,setOwnerImage] = useState("");
    const data = new FormData();
    data.append("title",listingTitle);
    data.append("Description",listingDescription);
    data.append("Status",listingStatus);
    data.append("location[province]",listingProvince);
    data.append("location[street]",listingStreet);
    data.append("location[district]",listingDistrict);
    data.append("price",listingPrice);
    data.append("image",listingHouseImage);
    data.append("beds",listingBeds);
    data.append("bath",listingBathrooms);
    data.append("yearbuilt",listingYearbuilt);
    data.append("lotsize",listingLotsize);
    data.append("profilePicture",listingProfile);
    data.append("SqFt",listingSqft);
    data.append("offerBy",listingOwner);
    const dispatch = useDispatch();
    return (
    <div>
        <h2 style={{marginLeft:80,color:"#144273"}}>Edit Listing</h2>
        <div id="addnew-body">
            <div id="addnew-basic-info-title">
                <FaInfo style={{color:"#3270FC",marginLeft:20,marginRight:10}}/>
                <span style={{color:"#144273",fontSize:14}}>Needed Informations</span>
            </div>
            <div id="addnew-basic-info-mainbody">
                <div className="new-credentials-combo">
                    <div className="credential-title">Listing Title</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoBriefcaseOutline/></div>
                        <input type={"text"} value={listingTitle} className="credential-desc-input" onChange={(event)=>{
                            setlistingTitle(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Address ( Province )</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoLocationSharp/></div>
                        <input type={"text"} value={listingProvince} className="credential-desc-input" onChange={(event)=>{
                            setlistingProvince(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Address ( District )</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoLocationSharp/></div>
                        <input type={"text"} value={listingDistrict} className="credential-desc-input" onChange={(event)=>{
                            setlistingDistrict(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo" id="option">
                    <div className="credential-title">Provide Your house's Image</div>
                    <div className="main-credential">
                        <div className="credential-desc-option"><input type={"file"} onChange={(e)=>{
                            setlistingHouseImage(e.target.files[0]);
                        }}/></div>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Bedrooms</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><TbBed/></div>
                        <input type={"text"} value={listingBeds} className="credential-desc-input" onChange={(event)=>{
                            setlistingBeds(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Bathrooms</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><FaBath/></div>
                        <input type={"text"} value={listingBathrooms} className="credential-desc-input" onChange={(event)=>{
                            setlistingBathrooms(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's Status (either for sale or rent)</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><BsFillPatchQuestionFill/></div>
                        <input type={"text"} value={listingStatus} className="credential-desc-input" onChange={(event)=>{
                            setlistingStatus(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's Price in Dollars($)</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><FaDollarSign/></div>
                        <input type={"text"} value={listingPrice} className="credential-desc-input" onChange={(event)=>{
                            setlistingPrice(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's Street Address</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><IoLocationSharp/></div>
                        <input type={"text"} value={listingStreet} className="credential-desc-input" onChange={(event)=>{
                            setlistingStreet(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Year your house was built</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><BsFillCalendarDateFill/></div>
                        <input type={"text"} value={listingYearbuilt} className="credential-desc-input" onChange={(event)=>{
                            setlistingYearbuilt(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's Lot Size</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><RiLandscapeFill/></div>
                        <input type={"text"} value={listingLotsize} className="credential-desc-input" onChange={(event)=>{
                            setlistingLotsize(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's owner</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><BsFillPatchQuestionFill/></div>
                        <input type={"text"} value={listingOwner} className="credential-desc-input" onChange={(event)=>{
                            setHouseOwner(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">House's Square Feet</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><MdAreaChart/></div>
                        <input type={"text"} value={listingSqft} className="credential-desc-input" onChange={(event)=>{
                            setHouseSqft(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="new-credentials-combo" id="option">
                    <div className="credential-title">Provide Your Image Here</div>
                    <div className="main-credential">
                        <div className="credential-desc-option"><input type={"file"} onChange={(e)=>{
                            setOwnerImage(e.target.files[0]);
                        }}/></div>
                    </div>
                </div>
                <div className="new-credentials-combo">
                    <div className="credential-title">Your Description</div>
                    <div className="main-credential">
                        <div className="credential-icon-input"><BsFillPatchQuestionFill/></div>
                        <input type={"text"} value={listingDescription} className="credential-desc-input" onChange={(event)=>{
                            setlistingDescription(event.target.value);
                        }}/>
                    </div>
                </div>
            </div>
            <button id="submit-credentials-button" onClick={(event)=>{
                event.preventDefault();
                dispatch(EditListing(id, token, data))
            }}>
                Edit Listing
            </button>
        </div>
    </div>
    );
};
