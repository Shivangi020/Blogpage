import React from 'react';
import { Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import like from "../../images/like-16.png";
import user from "../../images/user.png";
import date from "../../images/date.png"



function CardItem(props) {
  return (
    
      <div className='cards__item'>
        <a className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}
           style={{ marginRight: 0,
            marginLeft: 0 ,marginTop:0}}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className="info-icons">
            
            <div className=" icon-size"><img className="start-icon" src={user}/><span className="icon-name" >name </span></div>
            <div className=" icon-size"><img className="start-icon" src={like}/><span className="icon-name" >33 </span></div>
            <div className=" icon-size"><img className="start-icon" src={date}/><span className="icon-name" >Date </span></div>
         
         </div>
          <div className='cards__item__info'>
            <a className='cards__item__text' href={props.text}>{props.text}</a>
            <div className="tab">
                <span className="round-tab">{props.tag}</span>
                <span className="round-tab">{props.tag}</span>
                <span className="round-tab">{props.tag}</span> 
            </div>
            <div className="btn"><button>Read more</button></div>

          </div>
        </a>
      </div>
   
  );
}

export default CardItem;