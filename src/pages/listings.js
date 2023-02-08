import React from "react";
import { RichNavigation } from "../components/richnavigation";
import "../styles/listings.css";
import { IoIosArrowForward } from "react-icons/io";

export const ListingItem = () => {
    let houseName = "8052 Camino De Arriba";
    let houseAddress = "Rancho Santa Fe, CA 92067";
    let housePrice = "$4,980,000";
  return (
    <div>
      <RichNavigation />
      <div id="under-navigation">
        <div id="under-navigation-left">Listings</div>
        <div id="under-navigation-right">
          <div className="right-links">Home</div>
          <div className="right-links-separator">
            <IoIosArrowForward />
          </div>
          <div className="right-links">Listings</div>
          <div className="right-links-separator"><IoIosArrowForward/></div>
          <div id="under-navigation-name">{houseName}</div>
        </div>
      </div>
      <div className="listing-top">
        <div id="listing-top-header">
            <div id="left">
                <div id="left-houseName">{houseName}</div>
                <div id="left-houseAddress">{houseAddress}</div>
            </div>
            <div id="right">
                <button>For Sale</button>
                <div id="house-price">{housePrice}</div>
                <div id="payment-duration"><span style={{color: "grey"}}> Est. Payment</span> $28,492/mo</div>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
