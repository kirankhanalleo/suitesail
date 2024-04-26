import React from 'react';
import "./SearchItem.css";
import image from "../../assets/images/featured_properties/fp2.jpg";
function SearchItem() {
  return (
    <div className="SearchItem">
      <img src={image} alt="" className="SearchItem__img" />
      <div className="SearchItem__desc">
        <h1 className="SearchItem__title">Parkview Plaza</h1>
        <span className="SearchItem__distance">500m from lakeside</span>
        <span className="SearchItem__taxiOptions">Free airport taxi</span>
        <span className="SearchItem__subtitle">Studio Plaza with Air Conditioning</span>
        <span className="SearchItem__feature">
          Entire studio &#8226; 1 bathroom &#8226; 21m<sup>2</sup> full bed
        </span>
        <span className="SearchItem__cancelOptions">Free cancellation</span>
        <span className="cancelOptionsSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="SearchItem__details">
        <div className="SearchItem__rating">
          <span>Excellent</span>
          <button>4.7</button>
        </div>
        <div className="SearchItem__detailTexts">
          <span className="SearchItem__price">Rs. 2100</span>
          <span className="SearchItem__taxOptions">Includes taxes and fees</span>
          <button className="SearchItem__seeAvailability">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem