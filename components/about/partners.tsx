"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const Partners = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <section>
                <div ref={ref} className="relative ">
                    <div className="hidden  lg:block absolute top-0 right-0 w-20 h-36">
                        <img src="ark1.png" />
                    </div>
                    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                        <div className="m-6 mt-12 lg:m-20">
                            <img style={{
                                transform: isInView ? "none" : "scale(0.7)",
                                transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 0.9s"
                            }} src="partner_img.webp" />
                        </div>
                        <div className="flex flex-col p-4 pt-8 space-y-4 lg:justify-center lg:items-center lg:p-16">
                            <h3 className="font-bold text-xl text-pH lg:text-4xl  "
                                style={{
                                    transform: isInView ? "none" : "translateX(-10vh)",
                                    transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
                                }} >Partner with us for customized solutions</h3>
                            <p style={{
                                transform: isInView ? "none" : "translateX(-10vh)",
                                transition: "all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1.3s"
                            }} className="pb-2 text-light text-gray-700 lg:text-xl ">At FIN Infolib, we are committed to delivering exceptional customer service
                                and producing high-quality work. Our team is dedicated to providing tailored
                                solutions that meet your specific requirements
                                and preferences. We work closely with our clients to ensure that their projects
                                are completed within their specified timeframe, budget, and to the highest
                                standards.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )


}


export default Partners