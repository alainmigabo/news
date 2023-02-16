import React from "react";
import { RichNavigation } from "../components/richnavigation";
import "../styles/listings.css";
import { IoIosArrowForward } from "react-icons/io";
import { PropertiesCard } from "../components/propertiescards";

export const ListingItem = () => {
  let tobe_displayed_array = [];
  const cardsarray = JSON.parse(localStorage.getItem("cardsarray"));
  const cardproperties = JSON.parse(localStorage.getItem("cardproperties"));
  for(let i=0;i<2;i++){
    if (cardsarray[i] == cardproperties) {
      i--;
    }
    else{
      tobe_displayed_array[i] = cardsarray[i];
    }
  }
  let deep_desc =
    "Nestled in the exclusive, guard-gated community of Cielo in Rancho Santa Fe, this extraordinary custom-built estate offers panoramic views encompassing mountain, ocean & city light vistas. Drive up to the home with a private, elegant driveway showcasing gorgeous landscape, front yard lawn & expansive motor court. Enjoy a bright open airy floor plan from the moment you walk in the front door. With soaring ceilings & an abundance of natural light, this single-level masterpiece offers an ideal floor plan with not a single step in the whole house! On one wing of the house, you will find the master bedroom suite, stunning movie theater, beautiful office & powder bathroom. On the other wing, you will find 3 spacious en-suite secondary bedrooms, another powder bathroom, laundry room & access to the 4 car garage. Above the 4 car garage, there is a guest house with full family room, bedroom & bathroom. The backyard of this home is what makes it a show stopper! Enjoy sprawling lawn space, outdoor BBQ / kitchen, vanishing edge pool with jacuzzi & expansive covered loggia space right outside of the kitchen & family room. Do not miss this opportunity!";
  return (
    <div id="more-on-listings">
      <RichNavigation />
      <div id="under-navigation">
        <div id="under-navigation-left">Listings</div>
        <div id="under-navigation-right">
          <div className="right-links">Home</div>
          <div className="right-links-separator">
            <IoIosArrowForward />
          </div>
          <div className="right-links">Listings</div>
          <div className="right-links-separator">
            <IoIosArrowForward />
          </div>
          <div id="under-navigation-name">{cardproperties.mainAddress}</div>
        </div>
      </div>
      <div className="listing-top">
        <div id="listing-top-header">
          <div id="left">
            <div id="left-houseName">{cardproperties.mainAddress}</div>
            <div id="left-houseAddress">{cardproperties.streetAddress}</div>
          </div>
          <div id="right">
            <button>For Sale</button>
            <div id="house-price">{cardproperties.price}</div>
            <div id="payment-duration">
              <span style={{ color: "grey" }}> Est. Payment</span> $28,492/mo
            </div>
          </div>
        </div>
        <div id="image-container">
          <div id="large-image"></div>
          <div id="small-images">
            <div className="right-images"></div>
            <div className="right-images"></div>
          </div>
        </div>
      </div>
      <div id="listing-rest">
        <div id="description-section">
          <div id="inner-description">
            <div className="description-key-value" id="first-key">
              <div>Bed</div>
              <div>{cardproperties.bedrooms}</div>
            </div>
            <div className="description-key-value">
              <div>Bath</div>
              <div>{cardproperties.bathrooms}</div>
            </div>
            <div className="description-key-value">
              <div>Sq Ft</div>
              <div>{cardproperties.squareFeet}</div>
            </div>
            <div className="description-key-value">
              <div>Price per Sq Ft</div>
              <div>$674.80</div>
            </div>
            <div className="description-key-value">
              <div>Year Built</div>
              <div>2009</div>
            </div>
            <div className="description-key-value">
              <div>Lot Size</div>
              <div>1.01 Acres</div>
            </div>
            <div className="description-key-value">
              <div>community</div>
              <div>Cielo</div>
            </div>
            <div className="description-key-value">
              <div>MLS#</div>
              <div>220007703</div>
            </div>
            <div id="deep-description">{deep_desc}</div>
            <div id="description-narrator">
              <div className="key">Offered By:</div>
              <div className="value">Pacific Sotheby’s Int’l Realty</div>
            </div>
            <div id="dates">
              <div>
                <div className="key">Date Added:</div>
                <div className="value">4/4/22 at 7:00 am</div>
              </div>
              <div>
                <div className="key">Last Upddate:</div>
                <div className="value">8/24/22 at 12:27 am</div>
              </div>
            </div>
          </div>
        </div>
        <div id="cards-section">
          {
            tobe_displayed_array.map((item)=>{
              // if(item.id !== cardproperties.id){
                return(
                  <PropertiesCard
                  price={item.price}
                  bedrooms={item.bedrooms}
                  bathrooms={item.bathrooms}
                  squareFeet={item.squareFeet}
                  mainAddress={item.mainAddress}
                  streetAddress={item.streetAddress}
                  duration={item.duration}
                  owner={item.owner}
                  properties={item}
                  />
                )
              // }
            })
          }
        </div>
      </div>
    </div>
  );
};
