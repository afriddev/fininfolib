"use client";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react"

export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className=' mb-[-2px]'>
            <nav className='flex justify-between m-4 items-center '>
                <label className='text-primaryGreen font-bold text-2xl '>FIN INFOLIB</label>

                <a className=''>
                     <Hamburger toggled={isOpen} size={22} toggle={setOpen} /></a>                </nav>
        </div>
    )

}