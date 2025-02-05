import React from 'react';

export default function Hero() {
  return (
    <>
    <div className=""></div>
      <div className=" px-8 mt-4 h-[80vh]  "  style={{background: 'linear-gradient(to top, #2D81FF 26%, #0066FF 48%, rgba(0, 0, 0, 0) 76%)',}} >
        <div className="text-white text-7xl font-bold">
          Lorem ipsum
        </div>
        <div className="text-white text-7xl font-bold ">Lorem ipsum dolor</div>
        <div className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad, minima non aut ullam asperiores earum ab! Amet repellat, voluptas reprehenderit ratione neque dolores velit assumenda porro saepe repellendus quam aliquid maiores qui suscipit! Explicabo, optio.
        </div>
        <div className="flex gap-6 items-center mt-6 h-12">
          {/* Start Free Button */}
          <button className="bg-white text-black py-1 px-3 rounded-2xl font-semibold hover:scale-105 transition-transform ease-in-out duration-300">
            Start Free
          </button>
          
          {/* Watch Videos Button */}
          <button className="bg-gray-800 text-white py-1 px-3 rounded-2xl font-semibold hover:scale-105 transition-transform ease-in-out duration-300">
            Watch Videos
          </button>
        </div>
      </div>
    </>
  );
}
