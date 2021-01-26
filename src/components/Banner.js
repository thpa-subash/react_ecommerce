import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
const Banner =()=>{
    const settings = {
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
  
      };
    const [adsBanner, setAdsBanner] = useState([
        {
            image: 'first',
            text:'hello first'
        },
        {
            'image': 'second',
            text:'hello second'
        },

    ]);
   
    return (
        
        <Slider {...settings}>
      <div className="card text-white">
        <img className="card-img" src={first} alt="Card image"/>
        <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
        </div>
        </div>
        <div className="card bg-dark text-white">
        <img className="card-img" src={second} alt="Card image"/>
        <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
        </div>
        </div>
        <div className="card bg-dark text-white">
        <img className="card-img" src={third} alt="Card image"/>
        <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
        </div>
        </div>
      
    </Slider>
    );
}
export default Banner;