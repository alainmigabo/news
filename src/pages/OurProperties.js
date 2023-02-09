import React from 'react';
import {RichNavigation} from '../components/richnavigation';
import "../styles/ourproperties.css";
import { PropertiesCard } from "../components/propertiescards";
import { Flexdisplay } from '../components/flexdisplay';
import { ChatSection } from "../components/chat";
import { Footer } from "../components/footer";

const cards = [{
    price: "$7,800,000",
    bedrooms: 6,
    bathrooms: 13,
    squareFeet: "9,125",
    mainAddress: "5528 La Crescenta",
    streetAddress: "Rancho Santa Fe, CA 92067",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "1 YEAR AGO"
},{
    price: "$4,980,000",
    bedrooms: 9,
    bathrooms: 8,
    squareFeet: "7,925",
    mainAddress: "8052 Camino De Arriba",
    streetAddress: "Rancho Santa Fe, CA 92067",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "9 MONTHS AGO"
},{
    price: "$4,980,000",
    bedrooms: 9,
    bathrooms: 8,
    squareFeet: "7,925",
    mainAddress: "8052 Camino De Arriba",
    streetAddress: "Rancho Santa Fe, CA 92067",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "9 MONTHS AGO"
},{
    price: "$2,900,000",
    bedrooms: 6,
    bathrooms: 4,
    squareFeet: "4,925",
    mainAddress: "12969 Guacamayo Ct",
    streetAddress: "San Diego, CA 92128",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "9 MONTHS AGO"
},{
    price: "$3,380,000",
    bedrooms: 5,
    bathrooms: 5,
    squareFeet: "3,990",
    mainAddress: "7808 Vista Lazanja",
    streetAddress: "San Diego, CA 92127",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "9 MONTHS AGO"
},{
    price: "$3,750,000",
    bedrooms: 4,
    bathrooms: 6,
    squareFeet: "4,485",
    mainAddress: "8173 Paseo Del Ocaso",
    streetAddress: "Rancho Santa Fe, CA 92067",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/1.jpg",
    owner: "Blair Owens",
    ownerImage: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-7.jpg",
    duration: "9 MONTHS AGO"
},
]
export const OurProperties = () => {
    const object = JSON.stringify(cards);
    localStorage.setItem("cardsarray",object);
    return (
        <div>
            <ChatSection/>
            <RichNavigation/>
            <Flexdisplay screen={"Our Properties"}/>
            <div className='cards-container'>
                <div className='inner-container'>
                {
                    cards.map((element)=>{
                        return(
                            <PropertiesCard price={element.price} bedrooms={element.bedrooms} bathrooms={element.bathrooms} squareFeet={element.squareFeet} mainAddress={element.mainAddress} streetAddress={element.streetAddress} duration={element.duration} owner={element.owner} properties={element} />
                        )
                    })
                }
                </div>
            </div>
            <Footer/>
        </div>
    )
}