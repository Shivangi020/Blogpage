import React from 'react';
import './style.css';
import CardItem from './Carditem';
import image1 from "../../images/image1.jpg"
import image2 from "../../images/image2.jpg"
import image3 from "../../images/image3.jpg"

function Cards() {
  return (<div>
    <div className='cards'>
      <h2>Data science & ML</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={image1}
              text='Why You Should Learn R for Data Science?'
              label='Competetive Programming'
              path=''
            />
            <CardItem
              src={image1}
              text='Top 30 Hadoop Interview Questions You Must Prepare'
              label='Code Studio'
              path=''
            />
             <CardItem
              src={image1}
              text='10 Data Scientist Skills You Need in 2021'
              label='Code Studio'
              path=''
            />
          </div>
          </div>
        </div>
      </div>
          <div className='cards'>
          <h2>Web development</h2>
          <div className='cards__container'>
            <div className='cards__wrapper'>

              
              <div className='cards__items'>
              
                <CardItem
                  src={image2}
                  text='Top Angular Interview Questions and Answers [Updated in 2021]'
                  label='Data Science & ML'
                  path='s'
                />
                <CardItem
                  src={image2}
                  text='HTML VS CSS: What’s The Difference?'
                  label='Data Science & ML'
                  path=''
                />
                <CardItem
                  src={image2}
                  text='Flask vs Django in 2021: Which Framework to Choose?'
                  label='Data Science & ML'
                  path=''
                />
              </div>
            
              
             
              </div>
            </div>
          </div>
          <div className='cards'>
          <h2>Interview Preparation</h2>
          <div className='cards__container'>
            <div className='cards__wrapper'>

              
              <div className='cards__items'>
              
                <CardItem
                  src={image3}
                  text='Top Angular Interview Questions and Answers [Updated in 2021]'
                  label='Interview'
                  path=''
                />
                <CardItem
                  src={image3}
                  text='Building A Good Resume Of A Programmer'
                  label='Code studio'
                  path=''
                />
                <CardItem
                  src={image3}
                  text='How To Crack Off-Campus Internships/Placements?'
                  label='Code studio'
                  path=''
                />
              </div>
            
              
             
              </div>
            </div>
          </div>
 </div>
 )

}

export default Cards;