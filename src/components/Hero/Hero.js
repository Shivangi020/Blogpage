import React from 'react'
import "./Hero.css"
import image1 from "../../images/image1.jpg"

/**
* @author Shivangi
* @function Hero
**/

const Hero = (props) => {
  return(
    <div class="header_container">
        <div className="div1">
          <div className="image_header"><img src={image1}/>
        </div>
        </div>
        <div className="div2">fig2</div>
</div>
  )

 }

export default Hero;