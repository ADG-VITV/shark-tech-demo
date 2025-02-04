import Image from "next/image";
import './globals.css'
import Navbar from "./components/Navbar";
import New from "./components/New";
import Hero from "./components/Hero";
export default function Home() {
  return (
   <>
   <Navbar/>
   <New/>
   <Hero/>
   </>
  );
}
