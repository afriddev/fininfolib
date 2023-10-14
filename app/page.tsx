"use client";
import BottomFooter from "@/components/bottomFooter";
import LetsTalk from "@/components/letsTalk";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import op from "../utils/op";
import { useEffect, useRef } from "react";
import Hero from "@/components/home/hero";
import Optimizing from "@/components/home/optimizing";
import KeyDifference from "@/components/home/keyDifference";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={op}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
      >
        <Hero />
        <Optimizing/>
        <KeyDifference />
        <div className="flex flex-col bg-lG mt-6 justify-center items-center relative">
          <div>
            <img
              src="ark3.png"
              className="absolute w-20 h-32 lg:w-32 lg:h-52 top-4 left-0"
            />
          </div>
          <div className="mt-6 lg:mb-14 lg:pt-14">
            <label className="text-2xl font-bold text-pH lg:text-5xl ">
              Our Service{" "}
            </label>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-y-14 m-10 w-full lg:grid lg:grid-cols-3 lg:grid-row-1 lg:pb-14 
            xl:px-14"
          >
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center"
                >
                  <img src="itServices.png" className="h-10 w-10" />
                </div>
              </div>

              <div className="w-[2px] h-12 bg-gray-800"></div>

              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div
                  className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
                >
                  <label className=" py-2 text-white text-md font-bold">
                    DIGITAL IT SERVICES
                  </label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl  "
                >
                  <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm text-gray-300 lg:mt-4 ml-5 mr-5 pt-20 ">
                      Our team of experts is dedicated to providing top-tier IT
                      services to help your business and succeed in the digital
                      world.
                    </p>
                    <a
                      className="flex justify-center mt-4  items-center mb-4
          w-fit h-fit px-8  bg-lt rounded-xl text-white "
                    >
                      More{" "}
                      <span className="pl-2 ">
                        <AiOutlineArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-o1 to-o2
                flex justify-center items-center"
                >
                  <img src="outsourcing.png" className="h-10 w-10" />
                </div>
              </div>
              <div className="w-[2px] h-12 bg-gray-800"></div>
              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div
                  className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
                >
                  <label className=" py-2 text-white text-md font-bold">
                    OUTSOURCING SERVICES
                  </label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl "
                >
                  <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm text-gray-300 ml-5 mr-5  pt-20 ">
                      We provide dedicated tech employees to work on your
                      projects. ensure that you have access to the right talent
                      to complete your projects.
                    </p>
                    <a
                      className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-8  bg-o1 rounded-xl text-white"
                    >
                      More{" "}
                      <span className="pl-2">
                        <AiOutlineArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center"
                >
                  <img src="support.png" className="h-10 w-10" />
                </div>
              </div>

              <div className="w-[2px] h-12 bg-gray-800"></div>
              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div
                  className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
                >
                  <label className=" py-2 text-white text-md font-bold">
                    CUSTOMER SUPPORT
                  </label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl "
                >
                  <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm text-gray-300 ml-5 mr-5 pt-20 ">
                      Fin infolib has established partnership with clients to
                      facilitate the smooth transition of critical business
                      processes to our state-of-the-art.
                    </p>
                    <a
                      className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-8  bg-lt rounded-xl text-white"
                    >
                      More{" "}
                      <span className="pl-2">
                        <AiOutlineArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**
         *
         */}

        <div className="flex flex-col mt-6 relative">
          <div className="">
            <div className="flex flex-col m-4  lg:justify-center lg:items-center lg:mb-10">
              <h4 className="text-pH text-xl font-bold lg:text-5xl lg:pt-10 lg:pl-14">
                INDUSTRIES & COMPANIES
              </h4>
              <h2 className="text-xl ml-2 mr-2 mt-2 text-red lg:text-4xl lg:pl-14 lg:pt-6">
                Bridging tech gaps for companies of all scales
              </h2>
            </div>
            <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:px-10">
              <div className="flex m-4  lg:shadow-xl hover:shadow-2xl hover:rounded-lg p-4 lg:p-4 lg:rounded-xl">
                <img src="startup.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-lg font-bold text-primaryGreen">
                    Startup company
                  </label>
                  <p className="text-sm font-light pt-2">
                    we can help you get of the ground by providing the necessary
                    support and resources to help you grow and succees . Our
                    team of experts can assist you with everything from product
                    drvelopment to marketing and sales.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="manufacturing.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4 ">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Manufacturing company
                  </label>
                  <p className="text-sm font-light pt-2 ">
                    we can help you optimize your production processes and
                    improve your product quality to meet the demands of your
                    customers.Our team of experts can assist you with everything
                    from proccess optimization to supply chain management to
                    ensure that your operation run smoothly and efficiently
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="productbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Product-based company
                  </label>
                  <p className="text-sm font-light pt-2">
                    we can help you streamline your optimization and optimize
                    your supply chain to increase efficiency and reduce costs.
                    We can also assist you with product design, prototypin, and
                    testing to ensure that your products. meet the highest
                    standards of quality and functionality.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="saascompany.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    A SAAS company
                  </label>
                  <p className="text-sm font-light pt-2 ">
                    We can help you develop and implement innovative solutions
                    to help you stand out in a crowded market. We can assist you
                    with everything from software development to customer
                    support to help you grow and scale your business.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="serviesbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Services-based company
                  </label>
                  <p className="text-sm font-light pt-2">
                    We can help you develop and implement innovative solutions
                    to help you stand out in a competitive market. We can assist
                    you with everything from marketing and sales to customer
                    support to help you grow and scale your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 w-full h-full bg-gradient-to-r from-lightGreen to-lightOrange ">
          <div className="hidden lg:block absolute right-0 w-4/6 bg-darkBlue h-[100vh] rounded-bl-[70%] ">
            <img
              src="about-background.jpg"
              className="absolute  w-full h-[100vh] rounded-bl-[70%]"
            />
          </div>
          <div className="absolute justify-center  right-0 w-4/6 bg-darkBlue h-[100vh] rounded-bl-full lg:rounded-bl-[70%] lg:opacity-90">
            <img
              src="about-rightimage.png"
              className="hidden lg:block absolute right-0 top-[20%]  opacity-85"
            />
            <img
              src="about-rightcircle.png"
              className="hidden lg:block absolute top-[85%] right-[15vh] opacity-85"
            />
          </div>
          <div className="relative h-[100vh] w-full pb-14 mb-4 ">
            <div className="relative h-full w-full ">
              <div
                className="flex flex-col text-white  lg:absolute lg:right-0 lg:w-4/6 lg:h-full lg:justify-center lg:items-center
              "
              >
                <div className="flex justify-start items-start lg:justify-center lg:items-center">
                  <h3 className="text-2xl mt-5 font-bold pl-16 text-orange-500 lg:mr-40 ">
                    About Us{" "}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center m-4 ">
                  <label className=" text-4xl lg:pl-48 lg:pr-40">
                    We help clients invent their future.
                  </label>
                  <div className=" flex flex-col space-y-8 ml-10 lg:ml-48 lg:mr-44 mr-4 mt-8 text-gray-300">
                    <p className="text-md ">
                      At Fin infolib , we are committed to delivering
                      exceptional customer service and producing high-quality
                      work. Our team is dedicated to providing tailored
                      solutions that meet your specific requirements and
                      preferences.
                    </p>
                    <p>
                      We work closely with our clients to ensure that their
                      projects are completed within their specified timeframe,
                      budget, and to the highest standards.
                    </p>
                    <div className="w-full flex justify-center items-center">
                      <button
                        className=" flex 
                  bg-o1 h-fit w-fit mt-6 px-10 py-3 text-xl items-center rounded-3xl
                  shadow-xl "
                      >
                        Read More
                        <span className="pl-2 text-2xl">
                          <AiOutlineArrowRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <img
                  className=" absolute bottom-0 left-[-100px] opacity-50 lg:top-20 lg:left-4 lg:opacity-95"
                  src="about-dot.png"
                />
                <img
                  className=" absolute top-[20%] left-[10%] opacity-50 hidden lg:block  lg:opacity-95 w-2/6 
                 rounded-tr-[20%]  rounded-bl-[20%]  rounded-br-[20%]  "
                  src="about-image1.jpg"
                />
                <img
                  className=" absolute bottom-[10vh] left-[25%] hidden lg:block opacity-50 lg:opacity-95 
                rounded-tl-[20%]  rounded-bl-[20%]  rounded-br-[20%]  w-1/5 xl:bottom-0"
                  src="about-image2.jpg"
                />
                <img
                  className=" absolute bottom-[70%] left-[38%] hidden lg:block opacity-50 lg:opacity-95  w-32"
                  src="about-imagecircle.png"
                />
                <div className=" absolute bottom-[73%] left-[38%] hidden lg:block opacity-50 lg:opacity-95  w-32">
                  <div className="flex flex-col p-4 justify-center items-center">
                    <h2 className="text-white text-xl font-bold">15 +</h2>
                    <p className="text-center text-white font-bold text-sm">
                      Years Of Experience
                    </p>
                  </div>
                </div>

                <img
                  className=" absolute opacity-50 hidden lg:block lg:top-[55%] lg:left-[2%] lg:opacity-95"
                  src="about-leftcircle.png"
                />
                <img
                  className=" absolute  opacity-50 hidden lg:block 
                 lg:top-[70%] lg:left-[-25%] lg:opacity-95"
                  src="about-layer.png"
                />
              </div>
            </div>
          </div>
        </div>

        <LetsTalk />
        <div className="mt-6">
          <BottomFooter />
        </div>
      </motion.div>
    </>
  );
}
