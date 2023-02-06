import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import { Flexdisplay } from "../components/flexdisplay";
import { ChatSection } from "../components/chat";
import { Footer } from "../components/footer";

export const Contact = () => {
    return (
        <div>
            <ChatSection/>
            <RichNavigation/>
            <Flexdisplay screen={"Contact Us"}/>
            <Footer/>
        </div>
    )
}