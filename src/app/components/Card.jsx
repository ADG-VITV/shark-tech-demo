import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#323332] p-4 rounded-3xl shadow-lg h-96 w-72 text-white text-center 
                      hover:scale-105 transition-transform ease-in-out duration-300">
        {/* You can add content inside this div if needed */}
      </div>
      <h1 className="text-white text-center font-inter font-semibold text-2xl mt-4 
                     hover:scale-105 transition-transform ease-in-out duration-300">
        100% Lorem ipsum
      </h1>
    </div>
  );
};

export default Card;
