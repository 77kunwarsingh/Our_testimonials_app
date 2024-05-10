import React from 'react'
import Card from './Card'
import {useState} from 'react';
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
  return (
    <div className='testimonials'>
      <Card review={reviews[index]}></Card>
      <div className='btn'>
        <button onClick={leftShiftHandler} className='button'>
        <MdArrowBackIos />
        </button>
        <button onClick={rightShiftHandler} className='button'>
        <MdArrowForwardIos />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className='surprise'>Surprise Me!!</button>
      </div>
    </div>
  )
}

export default Testimonials
