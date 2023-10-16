import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sfl from "@/utils/sfl";
import { FaArrowRight } from "react-icons/fa";


const Hero= ({scrollTo}) => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
  return (
    <>
      <section>
        <div ref={ref} className=" relative flex flex-col w-full h-[48vh] lg:h-[85vh] justify-center items-center  ">
          <div className="relative top-0 w-full">
            <img
              className="relative top-0 w-full h-[48vh]   lg:h-[85vh] "
              src="banner.webp"
            />
          </div>
          <motion.div            
            

            className="flex flex-col w-full h-[48vh]  justify-center items-center p-6 absolute top-0 
          lg:h-[85vh]"
          >
            <h1 
            style={{
                transform:isInView?"none":"translateX(-100vw)",
                transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1s"
              }}
            className="text-[21px] font-bold text-center  text-white lg:text-[34px] xl:text-[43px]">
              OFFSHORE Development &
              <span className="text-[26px] font-bold pl-[2px] lg:text-[42px] xl:text-[50px] animate-hero ">
                {" "}
                <br />IT Consultancy{" "}
              </span>{" "}
              Services
            </h1>
            <p
            style={{
                transform:isInView?"none":"translateX(-100vw)",
                transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1.3s"
              }}
              className=" text-[12px] text-gray-300 lg:text-gray-400 text-center mt-2 lg:text-[18px]
             lg:pl-36 lg:pr-36 xl:pl-72 xl:pr-72 lg:mt-10 md:pl-10 md:pr-10"
            >
              Our aim is to assist our clients in enhancing their productivity
              and efficiency by offering a range of services. We have a team of
              skilled resources who specialize in talent and can undertake
              projects of varying magnitudes, from small to large-scale.
            </p>
            <button onClick={()=>{
              scrollTo()
            }}
            style={{
                transform:isInView?"none":"translateX(-100vw)",
                transition:"all 0.9s cubic-bezier(0.6,0.01,0.05,0.95) 1.6s"
              }}
              className="flex text-center mt-8 text-sm  text-white items-center
                bg-o w-fit h-fit px-6 py-2 rounded-3xl lg:mt-10 lg:px-28 lg:py-6 lg:bg-transparent  
                lg:border-2 lg:border-o lg:hover:bg-o lg:text-xl transform ease-in duration-500"
            >
              ENQUIRY NOW
              <a className="pl-2 lg:pl-6">
                <FaArrowRight />
              </a>{" "}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Hero;
