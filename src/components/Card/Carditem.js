import React from 'react';
import { Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function CardItem(props) {
  return (
    // <Router>
      <div className='cards__item'>
        <a className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}
           style={{ marginRight: 0,
            marginLeft: 0}}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <a className='cards__item__text' href={props.text}>{props.text}</a>
            {/* <p>logo</p><span>date</span> */}
          </div>
        </a>
      </div>
    // </Router>
  );
}

export default CardItem;