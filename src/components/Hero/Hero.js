import React from 'react'
import "./Hero.css"
import image1 from "../../images/image1.jpg"

/**
* @author Shivangi
* @function Hero
**/

const Hero = (props) => {
  return(
 <div className="header_container">
   <div className="div1"><div id="containr">
    <img src={image1} className="image1"/>
    <div class="example"><a>Recursion in Data Structure: How Does it Work, Types & When Used</a></div>
</div></div>
   <div className="div2">
    <div className="recent_card" id="container"><img src={image1} className="image2"/>
     <div className="text_overlay "><a>How to use the map function in JavaScript?</a></div></div>
     <div className="recent_card" id="container"><img src={image1} className="image2"/>
     <div className="text_overlay"><a>How to use the map function in JavaScript?</a></div></div></div>
</div>



  )

 }

export default Hero;


