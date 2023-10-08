import LetsTalk from "@/components/letsTalk";
import NavBar from "@/components/navBar";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <div
          className="flex text-white flex-col items-start bg-primary 
        h-1/2  w-full p-4  "
        >
          <h1 className=" font-ro  text-2xl ">
            Infolib Technology offers <br />
            the best{" "}
          </h1>
          <p className=" text-xs pt-4 pl-4">
            Cyber security,network security and End to End It services
          </p>
          <button
            className="flex items-start  h-fit w-fit px-6 py-2 text-md
        bg-lightBlue rounded-lg mt-4 mb-4  shadow-xl"
          >
            Reach Us{" "}
          </button>
          <div className="flex justify-center items-center mt-4">
            <div className="relative">
              <img
                className="relative left-[14vh] top-24  animate-pulse  w-6 flex"
                src="sliderHome.png"
              />
              <img
                className="relative left-10 top-8 animate-pulse  w-6 flex"
                src="sliderHome.png"
              />
            </div>
            <img src="home1.png" className="w-3/5 justify-center " />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center mt-10">
            <label
              className="bg-blue-50 px-6 py-1 rounded-md text-blue-800
           text-md
          "
            >
              Our Focus
            </label>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full">
            <label className="text-2xl text-green-800 ">
              Optimizing your IT infrastructure for maximum performance
            </label>
            <embed src="home3.webp" className="w-full p-4 mt-4  object-fill" />
            <p className="text-sm p-4 font-light ">
              INFOLIB is a renowned offshore development services provided
              commited to helping organizations accomplish their objectives by
              granting them access to skilled and cost-effective resources that
              can improve their efficiency.
            </p>
            <p className="text-sm pl-4 pr-4 font-light pb-4">
              We Recognize the difficulties that businesses encounter when
              searching for free
            </p>
            <p className="text-sm pl-4 pr-4 font-light">
              appropriate talent, which is why we provide an all-inclusive
              solution that incorporates a pool of proficient developers ,UI &
              UX designers,customer support and technical staff,along with a
              streamlined proccess management approach.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="m-4 text-xl font-bold text-orange-500">Our Services</h1>
          <div className="flex flex-col justify-center items-center space-y-10 mt-10">
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl 
         shadow-xl"
            >
              <div className="bg-orange-500 rounded-full w-14 p-3 ">
                <img src="itServices.png" className="" />
              </div>

              <h2 className="text-xl  m-4 ">DIGITAL IT SERVICES</h2>
              <p className="text-sm font-light ml-5 mr-5">
                Our team of experts is dedicated to providing top-tier IT
                services to help your business and succeed in the digital
                world..
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-orange-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl
         shadow-xl"
            >
              <div className="bg-cyan-500 rounded-full w-14 p-3 ">
                <img src="outsourcing.png" className="" />
              </div>

              <h2 className="text-xl  m-4 text-center">OUTSOURCING SERVICES</h2>
              <p className="text-sm font-light ml-5 mr-5">
                We provide dedicated tech employees to work on your projects.
                ensure that you have access to the right talent to complete your
                projects.
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-cyan-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl
         shadow-xl"
            >
              <div className="bg-purple-500 rounded-full w-14 p-3 ">
                <img src="support.png" className="" />
              </div>

              <h2 className="text-xl  m-4 ">CUSTOMER SUPPORT </h2>
              <p className="text-sm font-light ml-5 mr-5">
                Infolib has established partnership with clients to facilitate
                the smooth transition of critical business processes to our
                state-of-the-art.
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-purple-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex flex-col m-4 ">
            <h4 className="text-orange-500 text-xl font-bold ">INDUSTRIES & COMPANIES</h4>
            <h2 className="text-lg ml-2 mr-2 mt-2 text-green-700">Bridging tech gaps for companies of all scales</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex m-4">
              <img src="startup.png" className="w-20 h-14" />
              <div className="flex flex-col  ml-4">
                <label className="text-2xl text-green-700">Startup company</label>
                <p className="text-sm font-light ">we can help you get of the ground by providing the necessary support
                  and resources to help you grow and succees . Our team of experts can assist
                  you with everything from product drvelopment to marketing and sales.
                </p>
              </div>
            </div>
            <div className="flex m-4">
              <img src="manufacturing.png" className="w-20 h-14" />
              <div className="flex flex-col  ml-4">
                <label className="text-2xl text-green-700">Manufacturing company</label>
                <p className="text-sm font-light ">we can help you optimize your production processes and improve
                  your product quality to meet the demands of your customers.Our team of experts can assist you with
                  everything from proccess optimization to supply chain management to ensure that your operation run
                  smoothly and efficiently
                </p>
              </div>
            </div>
            <div className="flex m-4">
              <img src="productbased.png" className="w-20 h-14" />
              <div className="flex flex-col  ml-4">
                <label className="text-2xl text-green-700">Product-based company</label>
                <p className="text-sm font-light ">we can help you streamline your optimization and optimize your supply chain
                  to increase efficiency and reduce costs. We can also assist you with product design, prototypin, and testing
                  to ensure that your products. meet the highest standards of quality and functionality.
                </p>
              </div>
            </div>
            <div className="flex m-4">
              <img src="saascompany.png" className="w-20 h-14" />
              <div className="flex flex-col  ml-4">
                <label className="text-2xl text-green-700">A SAAS company</label>
                <p className="text-sm font-light ">We can help you develop and implement innovative solutions
                  to help you stand out in a crowded market. We can assist you with everything from software
                  development to customer support to help you grow and scale your business.
                </p>
              </div>
            </div>
            <div className="flex m-4">
              <img src="serviesbased.png" className="w-20 h-14" />
              <div className="flex flex-col  ml-4">
                <label className="text-2xl text-green-700">Services-based company</label>
                <p className="text-sm font-light ">We can help you develop and implement innovative solutions to
                  help you stand out in a competitive market. We can assist you with everything from marketing and sales to
                  customer support to help you grow and scale your business.

                </p>
              </div>
            </div>


          </div>
        </div>
        <div className="relative mt-6 w-full h-full bg-gradient-to-r from-lightGreen to-lightOrange ">
          <div className="absolute right-0 w-4/6 bg-darkBlue h-full rounded-bl-[200px]">
          </div>
          <div className="relative h-full w-full pb-14 mb-4">
            <div className="relative h-full w-full " >
              <div className="flex flex-col text-white 
              space-y-5">
                <div>
                  <h3 className="text-3xl font-bold text-orange-500 mt-4 ml-20">About Us </h3>
                </div>
                <div className="flex flex-col justify-center items-center m-4">
                  <label className=" text-4xl m-5">We help cliennts invent their future.</label>
                  <div className="ml-6 mr-6 flex flex-col space-y-10">
                    <p className="">
                      At INFOLIB , we are committed to delivering exceptional customer service
                      and producing high-quality work. Our team is dedicated to providing tailored
                      solutions that meet your specific requirements and preferences.
                    </p>
                    <p>We work closely with our clients to ensure that their projects are
                      completed within
                      their specified timeframe, budget, and to the highest standards.
                    </p>

                    <div className="w-full flex justify-center items-center">
                      <button className=" flex 
                  bg-orange-500 h-fit w-fit px-10 py-3 text-xl items-center rounded-3xl
                  shadow-xl ">Read More
                        <span className="pl-2 text-2xl"><AiOutlineArrowRight /></span></button>

                    </div>

                  </div>
                </div>
              </div>

              <div className="flex ">
                <img className=" absolute bottom-0 left-[-100px] opacity-70" src="about-dot.png" />

              </div>

            </div>

          </div>


        </div>

       <LetsTalk/>
      </div>

    </>
  );
}
