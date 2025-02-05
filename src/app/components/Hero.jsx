import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="ml-6 mt-4 h-screen bg-gradient-to-t from-[#9BC3FF] via-[#2D81FF] via-[#1A4FCC] to-[#000000] p-8">
    <div className="text-white text-7xl font-bold ">
      Lorem ipsum
    </div>
    <div className="text-white text-7xl font-bold ">Lorem ipsum dolor </div>
    <div className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad, minima non aut ullam asperiores earum ab! Amet repellat, voluptas reprehenderit ratione neque dolores velit assumenda porro saepe repellendus quam aliquid maiores qui suscipit! Explicabo, optio.</div>
    <div className="flex gap-6 items-center mt-6  h-12">
        <button className="bg-white text-black py-1 px-3  rounded-2xl font-semibold">Start Free</button>
        <button className="bg-gray-800 text-white py-1 px-3 rounded-2xl fon">Watch Videos</button>
    </div>
    </div>
    </>
  )
}
