import React, {useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
const Banner =(props)=>{
    const settings = {
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 9000,
        cssEase: "linear"
  
      };
   
   
    return (
        
        <Slider {...settings}>
            {
                props.slider.map((banner, index) =>
                    
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