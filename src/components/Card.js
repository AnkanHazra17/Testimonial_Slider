
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"



import React from 'react'

const Card = (props) => {

    let review = props.review;

  return (
    <div className="flex flex-col items-center relative gap-3">
        <div className="absolute -top-20 left-0 z-10">
            <img src={review.image} alt='' className="w-[140px] h-[140px] rounded-full z-30"></img>
            <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute -top-2 left-2 z-[-1] "></div>
        </div>

        <div className="mt-7">
            <p className="font-bold text-2xl text-center tracking-wider">{review.name}</p>
            <p className="text-center text-violet-300 uppercase text-sm">{review.job}</p>
        </div>

        <div>
            <FaQuoteLeft className="text-violet-300"></FaQuoteLeft>
        </div>

        <div>
            <p className="text-center text-slate-500">{review.text}</p>
        </div>

        <div>
            <FaQuoteRight className="text-violet-300"></FaQuoteRight>
        </div>

        
        
    </div>
  )
}

export default Card
