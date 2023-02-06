import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import { ChatSection } from "../components/chat";
import { Footer } from '../components/footer';

export const Services = () => {
    return (
        <div>
            <ChatSection/>
            <RichNavigation/>
            <Footer/>
        </div>
    )
}