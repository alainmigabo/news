import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import { ChatSection } from "../components/chat";
import { Footer } from "../components/footer";

export const About = () => {
    return (
        <div id='about-page'>
            <ChatSection/>
            <RichNavigation/>
            <Footer/>
        </div>
    )
}