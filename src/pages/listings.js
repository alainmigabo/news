import React, { useEffect } from "react";
import { RichNavigation } from "../components/richnavigation";
import "../styles/listings.css";
import { IoIosArrowForward } from "react-icons/io";
import { PropertiesCard } from "../components/propertiescards";
import { useDispatch, useSelector } from "react-redux";
import { GetPost, fetchSingleListing } from "../features/postSlice/createSlice";
import moment, { Moment } from "moment";
import { useParams } from "react-router-dom";


export const ListingItem = () => {

  const params = useParams();
  const {userId} = params
  console.log(params, "Params", userId, "user")

  const {posted, singleListing} = useSelector((state)=>state.create);
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(GetPost())
      dispatch(fetchSingleListing(userId))
  },[posted])

  let tobe_displayed_array = [];
  const properties = JSON.parse(localStorage.getItem("properties"));
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
          <div id="under-navigation-name">{singleListing?.mainAddress}</div>
        </div>
      </div>
      <div className="listing-top">
        <div id="listing-top-header">
          <div id="left">
            <div id="left-houseName">{singleListing?.location?.district}, {singleListing?.location?.province}</div>
            <div id="left-houseAddress">{singleListing?.location?.street}</div>
          </div>
          <div id="right">
            <button>{singleListing?.Status}</button>
            <div id="house-price">$ {singleListing?.price}</div>
            <div id="payment-duration">
              <span style={{ color: "grey" }}> Est. Payment</span> $28,492/mo
            </div>
          </div>
        </div>
        <div id="image-container">
          <div id="large-image" style={{
            background:`url(${singleListing?.image})`,
            backgroundPosition:"center",
            backgroundSize:"cover"
          }}></div>
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
              <div>{singleListing?.beds}</div>
            </div>
            <div className="description-key-value">
              <div>Bath</div>
              <div>{singleListing?.bath}</div>
            </div>
            <div className="description-key-value">
              <div>Sq Ft</div>
              <div>{singleListing?.SqFt}</div>
            </div>
            <div className="description-key-value">
              <div>Price per Sq Ft</div>
              <div>${singleListing?.price}/{properties.SqFt}</div>
            </div>
            <div className="description-key-value">
              <div>Year Built</div>
              <div>{singleListing?.yearbuilt}</div>
            </div>
            <div className="description-key-value">
              <div>Lot Size</div>
              <div>{singleListing?.lotsize} Acres</div>
            </div>
            <div className="description-key-value">
              <div>community</div>
              <div>Cielo</div>
            </div>
            <div className="description-key-value">
              <div>MLS#</div>
              <div>220007703</div>
            </div>
            <div id="deep-description">{singleListing?.Description}</div>
            <div id="description-narrator">
              <div className="key">Offered By:</div>
              <div className="value">{singleListing?.offeBy}</div>
            </div>
            <div id="dates">
              <div>
                <div className="key">Date Added:</div>
                <div className="value">{moment(singleListing).format('DD MMMM YYYY')} At {moment(singleListing).format('h:mm')}</div>
              </div>
              <div>
                <div className="key">Last Updated:</div>
                <div className="value">{moment(singleListing).format('DD MMMM YYYY')} At {moment(singleListing).format('h:mm')}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="cards-section">
          {
            tobe_displayed_array.map((item)=>{
              // if(item.id !== properties.id){
                return(
                  <PropertiesCard
                  price={item.price}
                  bedrooms={item.beds}
                  bathrooms={item.bath}
                  squareFeet={item.SqFt}
                  mainAddress={(item.location.province)+", "+(item.location.district)}
                  streetAddress={item.street}
                  duration={item.duration}
                  owner={item.offerBy}
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
