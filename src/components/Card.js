import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
  return (
    <div className='testimonial'> 
        <div className='img'>
        <img className='image' height="140px" width="140px" src={review.image} alt=""></img>
        <div className='round'></div>
        </div>
      
      <div className='name'>
        <p className='name-in'>{review.name}</p>
      </div>
      <div className='job'>
        <p className='job-in'>{review.job}</p>
      </div>
      <div className='Fa'>
      <FaQuoteLeft size={10}/>
      </div>
      <div className='text'>
        <p>{review.text}</p>
      </div>
      <div className='Fa'>
      <FaQuoteRight size={10}/>
      </div>
    </div>
  )
}

export default Card
