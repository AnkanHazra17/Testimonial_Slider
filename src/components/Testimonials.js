
import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Testimonials = (props) => {

    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftShiftHhandlar(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHhandlar(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandlar(){
        let randomInd = Math.floor(Math.random() * reviews.length);
        setIndex(randomInd);
    }

  return (
    <div className='max-w-[670px] bg-white mt-5 pt-5 px-9 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-200 rounded-md'>
        <Card review={reviews[index]}></Card>

        <div className="mt-4 flex gap-4 text-violet-300">
            <button onClick={leftShiftHhandlar}><FiChevronLeft className="text-[28px] font-extrabold hover:text-violet-600 transition-all duration-200"></FiChevronLeft></button>
            <button onClick={rightShiftHhandlar}><FiChevronRight className="text-[28px] font-extrabold hover:text-violet-600 transition-all duration-200"></FiChevronRight></button>
        </div>

        <div className="mb-6 mt-4">
            <button onClick={surpriseHandlar} className="py-2 px-6 bg-violet-400 hover:bg-violet-600 transition-all duration-200 rounded-md font-extrabold text-white">Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials