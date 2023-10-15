"use client"; 
import { useInView } from "framer-motion";
import { useRef } from "react";
const OurExpertise = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <>
            <section>
                <div className=" p-4 lg:grid lg:grid-cols-2 lg:justify-center lg:items-center md:justify-center 
                md:items-center md:grid md:grid-cols-2">
                    <div ref={ref} style={{
                        transform: isInView ? "none" : "translateY(10vh)",
                        transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
                    }} className=" lg:p-10">
                        <h2 className="font-bold text-2xl text-pH lg:text-3xl xl:text-4xl ">
                            Our expertise in Web Application Development</h2>
                        <p className="p-4 font-light text-sm lg:text-md xl:text-lg md:text-xs">
                            We understand that a website is the face of your business in the digital world.
                            That's why we provide professional website design and development services to
                            help you create a stunning and user-friendly website that engages your customers
                            and drives sales. Our team of designers and developers work closely with you to
                            create a website that meets your business requirements and reflects your brand
                            image.
                        </p>
                    </div>
                    <Img/>

                </div>
            </section>
        </>
    )
}
function Img() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return <div ref={ref} style={{
        transform: isInView ? "none" : "scale(0.7)",
        transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
    }} className="lg:p-10 md:p-6">
        <img src="applications.png" />
    </div>

}
export default OurExpertise