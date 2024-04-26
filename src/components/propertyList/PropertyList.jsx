import React from 'react'
import "./PropertyList.css";
import hotels from "../../assets/images/property_list/hotels.jpg"
import resorts from "../../assets/images/property_list/resorts.jpg"
import apartments from "../../assets/images/property_list/apartment.jpg"
import villas from "../../assets/images/property_list/villas.jpg"
import beachhouses from "../../assets/images/property_list/beachhouses.jpg"
import cottages from "../../assets/images/property_list/cottages.jpg"
function PropertyList() {
  return (
    <div className="propertyList">
        <div className="propertyList__Item">
            <img src={apartments} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Apartments</h1>
                <h2>50 apartments</h2>
            </div>
        </div>
        <div className="propertyList__Item">
            <img src={hotels} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Hotels</h1>
                <h2>200 hotels</h2>
            </div>
        </div>
        <div className="propertyList__Item">
            <img src={resorts} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Resorts</h1>
                <h2>175 resorts</h2>
            </div>
        </div>
        <div className="propertyList__Item">
            <img src={villas} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Villas</h1>
                <h2>50 villas</h2>
            </div>
        </div>
        <div className="propertyList__Item">
            <img src={cottages} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Cottages</h1>
                <h2>30 cottages</h2>
            </div>
        </div>
        <div className="propertyList__Item">
            <img src={beachhouses} alt="" className="propertyList__Img" />
            <div className="propertyList__Titles">
                <h1>Beach Houses</h1>
                <h2>15 houses</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList