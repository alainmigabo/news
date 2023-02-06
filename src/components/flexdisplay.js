import React from "react";
import '../styles/ourproperties.css';

export const Flexdisplay = ({screen}) =>{
    return(
        <div className="flexdisplay">
            <div id="left-properties">
                <div id='flexdisplay-owens'>
                    Blair Owens
                </div>
                <div id="flexdisplay-screen">
                    {screen}
                </div>
            </div>
            <div id="right-properties">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
            </div>
        </div>
    )
}