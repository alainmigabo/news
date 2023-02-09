import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { TfiClipboard } from "react-icons/tfi";
import '../styles/propertiescard.css';
import { Link } from 'react-router-dom';
import { ListingItem } from '../pages/listings';

export const PropertiesCard = ({price,bedrooms,bathrooms,squareFeet,mainAddress,streetAddress,image,owner,ownerImage,duration,properties}) =>{
    return(
        <div className="card">
            <div className="card-image">
                <div className="card-image-top">
                    <div className='sale'>For Sale</div>
                    <div className='after-sale'></div>
                    <div className='tour'>
                        <div>Virtual</div>
                        <div>Tour</div>
                    </div>
                </div>
                <div className='card-image-bottom'>
                    <div className='home'><AiOutlineHome/></div>
                    <div className='plus'><AiOutlinePlusSquare/></div>
                    <div className='heart'><AiOutlineHeart/></div>
                </div>
            </div>
            <div className='card-section1'>
                <Link to="listings" element={<ListingItem/>}><button className='view-button' onClick={()=>{
                    const object = JSON.stringify(properties);
                    localStorage.setItem("cardproperties",object);
                }}>
                    <div>VIEW</div>
                    <div className='view-icon'><IoIosArrowForward/></div>
                </button></Link>
                <div className='price'>{price}</div>
                <div className='key-value'>
                    <span className='key'>Bed </span>{bedrooms}<span className='key'> Bath </span>{bathrooms}<span className='key'> Sq Ft </span>{squareFeet}
                </div>
                <div className='upper-address'>{mainAddress}</div>
                <div className='lower-address'>{streetAddress}</div>
            </div>
            <div className='card-section2'>
                <div className='save'><TfiClipboard/></div>
                <div className='duration'>{duration}</div>
            </div>
            <div className='card-section3'>
                <div className='owner'>{owner}</div>
                <div className='owner-image'></div>
            </div>
            <div className='card-section4'>
                <div className='card-section4-left'>Listing Office</div>
                <div className='card-section4-right'>Pacific Sotheby’s Int’l Realty</div>
            </div>
        </div>
    )
}
