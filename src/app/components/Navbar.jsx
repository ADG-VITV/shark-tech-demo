import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex text-white justify-between items-center h-14">
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.5833 64.5H44.4167M29.6667 48.75H49.3333M22.2917 35.25C22.2917 31.0728 24.1047 27.0668 27.3319 24.1131C30.5591 21.1594 34.9361 19.5 39.5 19.5C44.0639 19.5 48.4409 21.1594 51.6681 24.1131C54.8953 27.0668 56.7083 31.0728 56.7083 35.25C56.7104 37.786 56.0404 40.2846 54.7559 42.5316C53.4715 44.7786 51.6107 46.707 49.3333 48.1515L48.0009 53.925C47.8245 54.9892 47.2372 55.9602 46.3455 56.662C45.4538 57.3638 44.3168 57.7498 43.1408 57.75H35.8592C34.6832 57.7498 33.5462 57.3638 32.6545 56.662C31.7628 55.9602 31.1755 54.9892 30.9991 53.925L29.6667 48.1762C27.3885 46.7267 25.5277 44.7938 24.2434 42.5427C22.9591 40.2917 22.2894 37.7895 22.2917 35.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <div className="flex gap-10">
      <Link href="">ABOUT</Link>
      <Link href="">CONTACT</Link>
      <Link href="">FAQ</Link>
      <Link href="">SUPPORT</Link>
      </div>
      <div className="flex gap-4">
        <Link href="">Login</Link>
        <button className="bg-white text-black p-1 px-3  rounded-2xl font-semibold">Signup</button>
      </div>
     
    </div>
  )
}
