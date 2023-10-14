"use client";
import { useInView } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className=" mb-[-2px]">
        <nav className="flex justify-between m-4 items-center ">
          <label className="text-primaryGreen font-bold text-2xl ">
            FIN INFOLIB
          </label>
          <a className="">
            <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
          </a>{" "}
        </nav>
      </div>

      {
        isOpen
          ? <MobileNav setopen={() => { setOpen(false) }} />
          : null
      }
    </>
  );
}



function MobileNav({ setopen }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100vw)",
          transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
        }}
        className="absolute flex flex-col  z-50 w-[100vw] h-[35vh] bg-white top-[11vh] right-0  p-4">
        <div className="flex flex-col h-[35vh] justify-between pl-10 pr-4">
          <li className=" list-none flex flex-col gap-y-4 text-lg  justify-center items-center ">
            <Link onClick={setopen} className=" border-b border-gray-700"
            style={{
              transform: isInView ? "none" : "translateX(-100vw)",
              transition: "all 0.7s cubic-bezier(0.6,0.01,0.05,0.95) 1.3s"
            }} href={'/'}>Home</Link>
            <Link onClick={setopen} className=" border-b border-gray-700"
            style={{
              transform: isInView ? "none" : "translateX(-100vw)",
              transition: "all 0.7s cubic-bezier(0.6,0.01,0.05,0.95) 1.6s"
            }} href={'/about'}>About</Link>
            <Link onClick={setopen} className=" border-b border-gray-700"
            style={{
              transform: isInView ? "none" : "translateX(-100vw)",
              transition: "all 0.7s cubic-bezier(0.6,0.01,0.05,0.95) 1.9s"
            }} href={'/contact'}>Contact</Link>
            <Link onClick={setopen} className=" border-b border-gray-700"
            style={{
              transform: isInView ? "none" : "translateX(-100vw)",
              transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 2.2s"
            }} href={'/itservices'}>It Services</Link>
            
          </li>
          <label className="text-[15px] font-light text-gray-600 text-center ">Employee ?
           <span className="text-[17px] text-pH font-normal"> Login</span></label>
        </div>


      </div>

    </>
  )
}