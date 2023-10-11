import BottomFooter from "@/components/bottomFooter";
import LetsTalk from "@/components/letsTalk";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight } from 'react-icons/fa'
export default function Home() {
  return (
    <>

      <div>
        <div className=" relative flex flex-col w-full h-[52vh] lg:h-[75vh] justify-center items-center  ">
          <div className="relative top-0 w-full">
            <img className="relative top-0 w-full h-[52vh]   lg:h-[75vh]" src="banner.webp" />
          </div>
          <div className="flex flex-col w-full h-[52vh]  justify-center items-center p-6 absolute top-0 
          lg:h-[75vh]">
            <h1 className="text-[23px] font-bold text-center  text-white lg:text-[43px]">OFFSHORE Development &
              <span className="text-[26px] font-bold pl-[2px] lg:text-[50px] " > IT<br /> Consultancy  </span> Services</h1>
            <p className=" text-[12px] text-gray-300 lg:text-gray-400 text-center mt-2 lg:text-[18px] lg:pl-72 lg:pr-72 lg:mt-10">Our aim is to assist our clients in enhancing their productivity
              and efficiency by
              offering a range of services. We have a team of skilled resources who specialize in talent and can
              undertake projects of varying magnitudes, from small to large-scale.</p>
            <button className="flex text-center mt-8 text-sm  text-white items-center
                bg-o w-fit h-fit px-6 py-2 rounded-3xl lg:mt-10 lg:px-28 lg:py-6 lg:bg-transparent  
                lg:border-2 lg:border-o lg:hover:bg-o lg:text-xl">ENQUIRY NOW<a className="pl-2 lg:pl-6"><FaArrowRight /></a> </button>
          </div>
        </div>
        <div>
          <div className="  ml-3 mt-6 lg:block lg:mt-10 relative">
            <img src="ark1.png" className=" absolute w-26 h-32 lg:w-22 lg:h-52  right-0 top-0" />

          </div>
          <div className="flex flex-col justify-center items-center pl-2 pt-2 pr-2 pb-2 w-full">
            <label className="text-2xl text-pH font-bold text-center lg:text-5xl">
              Optimizing your IT infrastructure
            </label>
            <div className=" flex flex-col  lg:grid lg:grid-cols-2 lg:p-8 lg:pt-14
              relative ">
              <div className="">
                <embed src="home3.webp" className="w-full p-4 mt-4  object-fill " />

              </div>
              <div className="lg:pt-10">
                <p className="text-sH p-4 font-light text-center lg:text-gray-800 lg:text-md lg:text-left ">
                  Fininfolib is a renowned offshore development services provided
                  commited to helping organizations accomplish their objectives by
                  granting them access to skilled and cost-effective resources that
                  can improve their efficiency.
                </p>
                <p className="text-sH pl-4 pr-4 font-light pb-4 text-center lg:text-gray-800 lg:text-md lg:text-left">
                  We Recognize the difficulties that businesses encounter when
                  searching for free
                </p>
                <p className="text-sH pl-4 pr-4 font-light text-center lg:text-gray-800 lg:text-md lg:text-left">
                  appropriate talent, which is why we provide an all-inclusive
                  solution that incorporates a pool of proficient developers ,UI &
                  UX designers,customer support and technical staff,along with a
                  streamlined proccess management approach.
                </p>

              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-4 mt-14 mb-20 ">
          <div className="flex justify-center items-center ">
            <label className="text-3xl  text-lightBlue font-bold text-center lg:text-5xl lg:mb-10 mb-10">
              Our key differentiators
            </label>
          </div>
          <div className="flex flex-col gap-y-10 lg:grid lg:grid-cols-3 lg:grid-rows-3">
            <div className="flex   m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 ">
              <img src="01.png" className="w-14 h-12 mt-6 " />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">End-to-End Solution</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">We offer complete package of it solutions and security services from end point of
                  Data center.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4">
              <img src="02.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold ">Cost Effective</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">By reducing the deployment cost and effective
                  network design we off low price solutions.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4">
              <img src="03.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">Proactive</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">We manage your network 24x7 to identify issues and address
                  them before it affect your routine tasks.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 ">
              <img src="04.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">Customer friendly</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">Customer services is the experience we deliver
                  to the customers and we facilitate them.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 ">
              <img src="05.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">Quick response </h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">We alot dedicated line with our engineers so that issue
                  can be addressed without delay.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 ">
              <img src="06.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4 ml-2">
                <h1 className="text-xl text-darkBlue font-bold">Vibrant team</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">We have vibrant team of engineers with multi-domin
                  expertise who meet your needs.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4">
              <img src="08.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">Highly secure</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">We remotly secure your facility on space internet,data transfers
                  and end points protection with NGFW.
                </p>
              </div>
            </div>
            <div className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4">
              <img src="09.png" className="w-14 h-12 mt-6" />
              <div className="flex flex-col mt-4">
                <h1 className="text-xl text-darkBlue font-bold">Highly scalable</h1>
                <p className="font-light ml-2 mt-4 text-darkBlue ">Our cloud services, container services,
                  DB services and storage services are highly scalable.
                </p>
              </div>
            </div>


          </div>
        </div>
        <div className="flex flex-col bg-lG mt-6 justify-center items-center relative">
          <div>
            <img src="ark3.png" className="absolute w-20 h-32 lg:w-32 lg:h-52 top-4 left-0" />
          </div>
          <div className="mt-6 lg:mb-14">
            <label className="text-2xl font-bold text-pH lg:text-5xl ">
              Our Service </label>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-14 m-10 w-full lg:grid lg:grid-cols-3 lg:grid-row-1 lg:pb-14">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center">
                  <img src="itServices.png" className="h-10 w-10" />
                </div>
              </div>

              <div className="w-[2px] h-12 bg-gray-800">
              </div>

              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl ">
                  <label className=" py-2 text-white text-md font-bold">DIGITAL IT SERVICES</label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl  ">
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
            {
            }
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-o1 to-o2
                flex justify-center items-center">
                  <img src="outsourcing.png" className="h-10 w-10" />
                </div>
              </div>
              <div className="w-[2px] h-12 bg-gray-800">
              </div>
              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl ">
                  <label className=" py-2 text-white text-md font-bold">OUTSOURCING SERVICES</label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl ">
                  <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm text-gray-300 ml-5 mr-5  pt-20 ">
                      We provide dedicated tech employees to work on your projects.
                      ensure that you have access to the right talent to complete your
                      projects.
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
            {

            }
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center">
                  <img src="support.png" className="h-10 w-10" />
                </div>
              </div>

              <div className="w-[2px] h-12 bg-gray-800">
              </div>
              <div className="flex flex-col w-4/5 justify-center items-center relative ">
                <div className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl ">
                  <label className=" py-2 text-white text-md font-bold">CUSTOMER SUPPORT</label>
                </div>
                <div className="absolute top-14 flex justify-between w-full">
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="w-6  overflow-hidden inline-block">
                    <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl ">
                  <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm text-gray-300 ml-5 mr-5 pt-20 ">
                      Fin infolib has established partnership with clients to facilitate
                      the smooth transition of critical business processes to our
                      state-of-the-art.
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
        {
          /**
           * 
           */
        }

        <div className="flex flex-col mt-6 relative">
          <div className="">
            <div className="flex flex-col m-4  ">
              <h4 className="text-pH text-xl font-bold lg:text-5xl lg:pt-10 lg:pl-14">INDUSTRIES & COMPANIES</h4>
              <h2 className="text-xl ml-2 mr-2 mt-2 text-red lg:text-4xl lg:pl-14 lg:pt-6">Bridging tech gaps for companies of all scales</h2>
            </div>
            <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:grid-rows-3">
              <div className="flex m-4  lg:shadow-xl hover:shadow-2xl hover:rounded-lg p-4 lg:p-4 lg:rounded-xl">
                <img src="startup.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-lg font-bold text-primaryGreen">Startup company</label>
                  <p className="text-sm font-light pt-2">we can help you get of the ground by providing the necessary support
                    and resources to help you grow and succees . Our team of experts can assist
                    you with everything from product drvelopment to marketing and sales.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="manufacturing.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4 ">
                  <label className="text-2xl text-primaryGreen font-bold">Manufacturing company</label>
                  <p className="text-sm font-light pt-2 ">we can help you optimize your production processes and improve
                    your product quality to meet the demands of your customers.Our team of experts can assist you with
                    everything from proccess optimization to supply chain management to ensure that your operation run
                    smoothly and efficiently
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="productbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">Product-based company</label>
                  <p className="text-sm font-light pt-2">we can help you streamline your optimization and optimize your supply chain
                    to increase efficiency and reduce costs. We can also assist you with product design, prototypin, and testing
                    to ensure that your products. meet the highest standards of quality and functionality.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="saascompany.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">A SAAS company</label>
                  <p className="text-sm font-light pt-2 ">We can help you develop and implement innovative solutions
                    to help you stand out in a crowded market. We can assist you with everything from software
                    development to customer support to help you grow and scale your business.
                  </p>
                </div>
              </div>
              <div className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="serviesbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">Services-based company</label>
                  <p className="text-sm font-light pt-2">We can help you develop and implement innovative solutions to
                    help you stand out in a competitive market. We can assist you with everything from marketing and sales to
                    customer support to help you grow and scale your business.

                  </p>
                </div>
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
              ">
                <div className="flex justify-start items-start">
                  <h3 className="text-2xl mt-5 font-bold pl-16 text-orange-500 ">About Us </h3>
                </div>
                <div className="flex flex-col justify-center items-center m-4">
                  <label className=" text-4xl">We help cliennts invent their future.</label>
                  <div className=" flex flex-col space-y-8 ml-10 mr-4 mt-8 text-gray-300">
                    <p className="text-md ">
                      At Fin infolib , we are committed to delivering exceptional customer service
                      and producing high-quality work. Our team is dedicated to providing tailored
                      solutions that meet your specific requirements and preferences.
                    </p>
                    <p>We work closely with our clients to ensure that their projects are
                      completed within
                      their specified timeframe, budget, and to the highest standards.
                    </p>

                    <div className="w-full flex justify-center items-center">
                      <button className=" flex 
                  bg-o1 h-fit w-fit mt-6 px-10 py-3 text-xl items-center rounded-3xl
                  shadow-xl ">Read More
                        <span className="pl-2 text-2xl"><AiOutlineArrowRight /></span></button>

                    </div>

                  </div>
                </div>
              </div>

              <div className="flex ">
                <img className=" absolute bottom-0 left-[-100px] opacity-50" src="about-dot.png" />

              </div>

            </div>

          </div>


        </div>

        <LetsTalk />
        <div className="mt-6">
          <BottomFooter />
        </div>
      </div>

    </>
  );
}
