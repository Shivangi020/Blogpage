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
   <div className="div1"><img src={image1} className="image1"/></div>
   <div className="div2">
    <div style={{background:"red"}}className="recent_card"><img src={image1} className="image2"/>
     <div className="text_overlay"><a></a></div></div>
     <div style={{background:"red"} }className="recent_card"><img src={image1} className="image2"/>
     <div className="text_overlay"><a></a></div></div></div>
</div>



  )

 }

export default Hero;