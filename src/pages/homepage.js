import React from 'react';
import Navigation from '../components/navigation';
import '../styles/homepage.css';
import { ChatSection } from "../components/chat";
import { Footer } from "../components/footer";
import {AiOutlineSearch} from "react-icons/ai";
import { Homecard } from "../components/homecard";

export const Homepage = () => {
    return (
        <div id='homepage'>
            <ChatSection/>
            <Navigation/>
            <div className="home-intro">
                <div className="home-intro-left">
                    <div className='home-paragraph'>Luxury Real Estate</div>
                    <div id='hometitle'>IT'S TIME TO FIND YOUR LUXURY HOME</div>
                    <div className='home-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid alor the old familer olfre idunt ut labore ellt.</div>
                    <div id='home-search'>
                        <input type={"text"} id='home-input-search'/>
                        <button id='home-search-button'><AiOutlineSearch/></button>
                    </div>
                </div>
                <div className="home-intro-right"></div>
            </div>
            <div id='home-underintro'>
                <div id='left'>
                We Offer The Highest Level Of Expertise, Service, And Integrity.
                </div>
                <div id='right'>
                Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, selad do eiusmod tempor tolos dolor the old she roltoy incid idunt labore ellt dolore magna the alora aliqua.
                </div>
            </div>
            <div id='featured'>
                <div id='paragraph'>
                    Luxury At Its Finest
                </div>
                <div id='heading'>
                    Featured Communities
                </div>
                <div id='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incid idunt ut labore ellt dolore magna the alora aliqua alora<br/> the tolda on fouter.
                </div>
            </div>
            <div id='home-cards-holder'>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
                <Homecard placename={"Marriot"} placeaddress={"Kigali"} placeimage={"https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg"}/>
            </div>
            <div id='home-explorer'>
                Explore More
            </div>
            
            <Footer/>
            <div id='footer-cover'></div>
        </div>
    )
};
