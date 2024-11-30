import React from 'react';
import Lear from "../assets/learn.png";

const Learn = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-6 flex flex-col md:flex-row mt-32 my-10">
        <div className='w-full  md:w-1/2 px-10'>
            <img src={Lear} className='' alt="student" />
        </div>

        <div className='w-full md:w-1/2 mt-12 md:mt-32  '>
            <div className=" ml-24 mt-10">
            <h1 className="text-4xl font-bold mb-4">Get Feedback</h1>
            <p className="text-xl">
            The app will highlight the <span className="bg-yellow-300 text-black p-1 rounded">mistakes</span> and give you a score
            </p>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Learn