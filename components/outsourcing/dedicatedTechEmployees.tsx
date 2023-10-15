"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DedicatedTechEmployees = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <>
            <section>
                <div  className="p-4 flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  ">
                    <img ref={ref} style={{
                transform:isInView?"none":"scale(0.7)",
                transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
              }} src="techemployees.webp" className="lg:p-20 md:p-10 " />
              <Text/>

                </div>
            </section>
        </>
    )
}
function Text() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return <div ref={ref} style={{
        transform:isInView?"none":"scale(0.7)",
        transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
      }} className="flex flex-col pt-6 space-y-6 lg:p-10 lg:justify-center lg:items-center">
        <h2 className="font-bold text-3xl text-pH lg:text-4xl ">Dedicated Tech Employees</h2>
        <p className="font-light text-sm lg:text-md xl:text-lg ">We provide dedicated tech employees to work on your projects,
            ensuring that you have access to the right talent to complete your projects
            on time and within budget. Our team of experts specializes in a wide range of
            technologies and can help you develop custom software solutions, build websites,
            manage your IT infrastructure, and more.
        </p>
    </div>

}


export default DedicatedTechEmployees