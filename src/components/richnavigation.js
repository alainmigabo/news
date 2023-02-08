import React from 'react';
import Navigation from './navigation';
import '../styles/richnavigation.css';
import {CiSearch} from "react-icons/ci";

export const RichNavigation = () => {
    return(
        <div id='richnavigation'>
            <Navigation/>
            <form action='/' id='additional-navigation'>
                <div id='search-container'>
                    <CiSearch id='icon'/>
                    <input type="text" id="search" placeholder='Street, City, State or Zip' />
                </div>
                <select>
                    <option>All Statuses</option>
                </select>
                <select>
                    <option>All cities</option>
                </select>
                <select>
                    <option>All Zipcodes</option>
                </select>
                <button id='search-button'>
                    Search
                </button>
                <button id='more-button'>
                    More
                </button>
            </form>
        </div>
    )
}