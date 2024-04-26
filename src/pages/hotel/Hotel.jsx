import {React,useState} from 'react'
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {FaLocationArrow} from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
function Hotel() {
  const[slideNumber, setSlideNumber]=useState(0);
  const[openSlide, setOpenSlide]=useState(false);

  const images=[
    {
      src:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      src:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      src:"https://images.unsplash.com/photo-1605346475807-2088e0897b2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
  ]
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpenSlide(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 2 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === 2 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          {openSlide &&<div className="slider">
            <AiFillCloseCircle className='closeBtn' onClick={()=>setOpenSlide(false)}/>
            <BsFillArrowLeftSquareFill className='arrow' onClick={()=>handleMove('l')}/>
            <div className="sliderWrapper">
              <img src={images[slideNumber].src} alt="" className='sliderImage' />
            </div>
            <BsFillArrowRightSquareFill className='arrow' onClick={()=>handleMove('r')}/>
            </div>}
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Lakeview Plaza</h1>
          <div className="hotelAddress">
            <FaLocationArrow/>
            <span>Lekhnath 123 Pokhara Lakeside</span>
          </div>
          <span className="hotelDistance">
            Excellent location -  50 meters from lake
          </span>
          <span className="hotelPriceHighlights">
            Book a stay over Rs. 20000 at this property
            and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {images.map((image,i)=>(
              <div className="hotelImageWrapper">
                <img src={image.src} onClick={()=>handleOpen(i)} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelDetailsText__title">Stay in heart of Pokhara</h1>
              <p className="hotelDetailsText__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Neque repudiandae amet assumenda quos? Itaque vitae doloribus 
                at dicta ducimus temporibus vero dolores, cumque, quae totam 
                molestias autem? Iure dolorem, quae consequuntur quas nulla 
                dignissimos veritatis sapiente autem atque. Dolore vitae veniam,
                 unde dolores laudantium excepturi recusandae quae deleniti. 
                 Velit tempora perferendis voluptas modi, similique asperiores 
                 odit praesentium aliquam nemo nulla iusto neque libero. Animi 
                 rem mollitia quas porro error doloribus accusamus, vel, 
                 molestias incidunt temporibus qui minima? Temporibus dolore 
                 officia corrupti unde explicabo perspiciatis iure perferendis 
                 repudiandae enim! At optio voluptatem culpa earum ab natus 
                 quis iste doloremque cumque perspiciatis?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a week stay</h1>
              <span>
                Located in heart of pokhara, this property has an excellent location
                score of 9.5!
              </span>
              <h2>
                <b>Rs. 35000 </b>(7 nights)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer className="footer"/>
      </div>
    </div>
  )
}

export default Hotel