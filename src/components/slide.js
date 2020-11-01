import React from 'react';
import {Fade }  from 'react-slideshow-image';

import prev from './../assets/prev.jpg';
import next from './../assets/next.jpg';


const Slide = () => {
    const slideImages = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
       "4.jpg",
       "5.jpg",
    ];
  
    const properties = {
      duration: 5000,
      transitionDuration: 500,
     // indicators: true,
      scale: 0.4,
      indicators: i => (<div className="indicator"></div>),
      infinite: true,
      prevArrow: <div  style={{width: "30px", marginRight: "-30px"}}>
          <img className="prev-slide" src={prev} alt="prev slide"/>
          </div>,
      nextArrow: <div  style={{width: "30px", marginLeft: "-30px"}}>
           <img className="next-slide" src= {next} alt="next slide"/>
              </div>
    };
  
    return (
        <Fade {...properties}>
            { slideImages.map((each, index) =>
             <img key={index} style={{width: "100%"}} src={"slide/" + each} alt="next slide"/>) 

}
        </Fade>        
      );
    };
  export default Slide;
