import React from 'react';
import heroSectionImage from './Images/hero2.jpg';

function HeroSection() {
  return (
    <div className="" 
    style={{
      background: "rgb(221,255,232)",
      background: "linear-gradient(90deg, rgba(221,255,232,1) 0%, rgba(240,235,235,1) 51%, rgba(220,243,255,1) 100%)"
    }}
    >
      <div className="flex flex-col justify-center font-serif items-center py-16 w-1/2 m-auto text-center">
        <div className="">
          <h1 className='text-5xl font-bold'>
            Calm Circle <br /> Your Safe Space for Peace of Mind
          </h1>
        </div>

        <div className="text-gray-600 py-4 text-md">Jon the supportive online community that is dedicated to promoting mental wellness through connection, anonymous sharing, and access to valuable resources.</div>

        <div className="flex items-center justify-center">
          <div className="mr-4">
            <button className='py-2 px-4 rounded-xl bg-green-500 text-white'>Create Account</button>
          </div>
          <div className="">
            <button className='border py-2 px-4 rounded-xl border-green-500'>Lean More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// style={{ backgroundImage: `url(${heroSectionImage})` }}
// style={{
//   background: "rgb(188,247,207)",
//   background: "linear-gradient(90deg, rgba(188,247,207,1) 0%, rgba(240,235,235,1) 51%, rgba(157,215,244,1) 100%)"
// }}