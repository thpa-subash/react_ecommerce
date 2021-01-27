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
        speed: 8000,
        autoplaySpeed: 7000,
        cssEase: "linear"
  
      };
    const [adsBanner] = useState([
        {
            'image': first,
            'text': 'Hello First',
        },
        {
            'image': second,
            'text' :'Hello Second',
        },
        {
            'image': third,
            'text' :'Hello Third',
        }

    ]);
   
    return (
        
        <Slider {...settings}>
            {
                adsBanner.map((banner, index) =>
                    
                        <div className="banner " key={index}>
                   
                    <img className="banner-img" src={banner.image} alt="Card image"/>
  
                    <h5 className="ctitle">{ banner.text}</h5>
</div>






                           
            )
            }
     
        
      
    </Slider>
    );
}
export default Banner;