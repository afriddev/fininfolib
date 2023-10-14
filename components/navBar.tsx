"use client";
import { useInView } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
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
          ?<MobileNav/>
          :null
      }
    </>
  );
}



const MobileNav = ()=>{
    const ref = useRef(null);
  const isInView = useInView(ref);
    return(
        <>
        <div
        ref={ref}
        style={{
          transform:isInView?"none":"translateX(-100vw)",
          transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
        }}
         className="absolute z-50 w-[100vw] h-[50vh] bg-white top-[11vh] right-0">
        
        </div>

        </>
    )
}