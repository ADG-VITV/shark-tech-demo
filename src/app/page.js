import Image from "next/image";
import './globals.css'
import Navbar from "./components/Navbar";
import New from "./components/New";
import Hero from "./components/Hero";
import About from "./components/About"
import Footer from "./components/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <New/>
   <div className="">
   <Hero/>
   </div>
   <About/>
   <Footer/>
   </>
  );
}
