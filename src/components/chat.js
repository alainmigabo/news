import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/chatstyles.css";
import { IoIosSend } from "react-icons/io";

export const ChatSection = () => {
    return (
        <div className="arrow-chat-section">
            <div className="arrow-section">
                <div className="arrow" id="back-arrow">
                    <IoIosArrowBack/>
                </div>
                <div className="arrow" id="forward-arrow">
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="chat-section">
                <div className="chat-image"></div>
                <div className="chat-top"></div>
                <div className="chat-input">
                    <div className="chat-messanger">
                        Riley Harper from Blair Owens
                    </div>
                    <div className="chat-help">
                        Looking for something in particular? I’m here to help!
                    </div>
                    <div id="chat-message">
                        <input type="text" id="chat-message" placeholder="Reply To Riley Harper" />
                        <button id="chat-send-button">
                            <IoIosSend/>
                        </button>
                    </div>
                </div>
            </div>
            <div id="chat-hider">
                
            </div>
        </div>
    )
}