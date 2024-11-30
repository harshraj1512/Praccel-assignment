import React from 'react';
import Stu from "../assets/dash.png";

const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-6 px-4 flex flex-col md:flex-row my-10">
        <div className='w-full  md:w-1/2'>
            <img src={Stu} className='w-85 h-85' alt="student" />
        </div>

        <div className='w-full md:w-1/2 mt-12 md:mt-32  '>
            <div className=" ml-24 mt-10">
            <h1 className="text-4xl font-bold mb-4">You <span className="text-pink-500">Read Aloud</span> App</h1>
            <p className="text-xl">
              Get short reading passages in English regularly.
            </p>
            <p className="text-xl">
              Read, get feedback, improve your reading.
            </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner