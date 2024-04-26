import React from 'react'
import "./FeaturedProperties.css";
import {IoMdStar, IoMdStarHalf} from "react-icons/io";
import fp1 from "../../assets/images/featured_properties/fp1.jpg"
import fp2 from "../../assets/images/featured_properties/fp2.jpg"
import fp3 from "../../assets/images/featured_properties/fp3.jpg"
import fp4 from "../../assets/images/featured_properties/fp4.jpg"
import fp5 from "../../assets/images/featured_properties/fp5.jpg"
function FeaturedProperties() {
  return (
    <div className='featuredProperties'>
        <div className="featuredProp__Items">
            <img src={fp1} alt="" className="featuredProp__Img" />
            <div className="featuredProp__details">
                <div className="fp_details_first">
                    <div className="fp__Name">Lakeside hideaway</div>
                    <div className="fp__Price">$990</div>
                </div>
                <div>
                    <div className="fp__Location">Pokhara</div>
                </div>
                <hr />
                <div className="fp__Rating">
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating">(50)</span>
                </div>
            </div>
        </div>
        <div className="featuredProp__Items">
            <img src={fp2} alt="" className="featuredProp__Img" />
            <div className="featuredProp__details">
                <div className="fp_details_first">
                    <div className="fp__Name">Parkview Plaza</div>
                    <div className="fp__Price">$799</div>
                </div>
                <div>
                    <div className="fp__Location">Pokhara</div>
                </div>
                <hr />
                <div className="fp__Rating">
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating">(43)</span>
                </div>
            </div>
        </div>
        <div className="featuredProp__Items">
            <img src={fp3} alt="" className="featuredProp__Img" />
            <div className="featuredProp__details">
                <div className="fp_details_first">
                    <div className="fp__Name">Serenity hill</div>
                    <div className="fp__Price">$965</div>
                </div>
                <div>
                    <div className="fp__Location">Helambu</div>
                </div>
                <hr />
                <div className="fp__Rating">
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStarHalf/></span>
                    <span className="rating">(36)</span>
                </div>
            </div>
        </div>
        <div className="featuredProp__Items">
            <img src={fp4} alt="" className="featuredProp__Img" />
            <div className="featuredProp__details">
                <div className="fp_details_first">
                    <div className="fp__Name">Rosemont hall</div>
                    <div className="fp__Price">$799</div>
                </div>
                <div>
                    <div className="fp__Location">Lomanthang</div>
                </div>
                <hr />
                <div className="fp__Rating">
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStarHalf/></span>
                    <span className="rating">(33)</span>
                </div>
            </div>
        </div>
        <div className="featuredProp__Items">
            <img src={fp5} alt="" className="featuredProp__Img" />
            <div className="featuredProp__details">
                <div className="fp_details_first">
                    <div className="fp__Name">Heritage home</div>
                    <div className="fp__Price">$665</div>
                </div>
                <div>
                    <div className="fp__Location">Dhankuta</div>
                </div>
                <hr />
                <div className="fp__Rating">
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStar/></span>
                    <span className="rating__icon"><IoMdStarHalf/></span>
                    <span className="rating">(30)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties