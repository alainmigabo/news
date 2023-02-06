import React from 'react';
import Navigation from '../components/navigation';
import '../styles/homepage.css';
import { ChatSection } from "../components/chat";
import { Footer } from "../components/footer";

export const Homepage = () => {
    return (
        <div>
            <ChatSection/>
            <Navigation />
            <div className="home-intro">
                <div className="home-intro-left">
                    <p>Luxury Real Estate</p>
                    <div>IT'S TIME TO FIND YOUR LUXURY HOME</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid alor the old familer olfre idunt ut labore ellt.</p>
                </div>
                <div className="home-intro-right"></div>
            </div>
            <Footer/>
        </div>
    )
};
