import BottomFooter from "@/components/bottomFooter"
import LetsTalk from "@/components/letsTalk"

const IteServices: () => void = () => {
    return (
        <>
            <div>
                <div className=" p-6 bg-gradient-to-b  from-o1 to-o2 w-full h-fit flex justify-between lg:grid lg:grid-cols-2
                lg:justify-between lg:items-center">
                    <div className="lg:p-14">
                        <h1 className="font-bold text-2xl text-white
                    mt-10  lg:text-4xl " >Digital IT services</h1>
                        <p className="text-gray-200 p-4 text-sm lg:text-lg ">Our team of experts is dedicated to providing top-tier It services
                            to help your business grow and succees in the digital world. We offer a wide range
                            of services to meet your business needs. from website design and development to software
                            development and digital marketing.
                        </p>
                        <button className="flex justify-center items-center rounded-3xl mt-8 h-fit w-fit py-2 px-8 text-lg 
                        text-white bg-darkBlue lg:text-xl lg:py-3 lg:px-14">Contact Us </button>

                    </div>
                    <div className="hidden lg:block pl-36 pr-36 p-8">
                        <img src="digitalban.webp" />

                    </div>
                </div>

                <div className="p-4 mt-10 relative lg:grid lg:grid-cols-2">
                    <div className="absolute hidden lg:block top-0 right-0 w-24">
                        <img src="ark1.png" />
                    </div>
                    <div className="lg:p-20">
                        <img src="webdesign.webp" />

                    </div>
                    <div className="mt-10 lg:p-20">
                        <h2 className="font-bold text-2xl text-pH lg:text-4xl">
                            Website Design and Development</h2>
                        <p className="p-4 font-light text-sm lg:text-md">
                            Despite having a fully functional website, often business firms fail to make a
                            significant mark among their targeted market. Investing in the right areas will certainly lead your
                            business towards a promising success and help you climb higher on the ladder of market competition.
                            With FinInfocom, hitting the right note and making an impressive web presentation is possible
                            through our exclusive services. Being a web application service provider in this domain for many
                            years, we have the right blend of talent and industry insight to make your business flourish and
                            emerge stronger. We feel pride to we have a wide range of business firms from various types of
                            industries as our clients.
                        </p>
                    </div>
                </div>
                <div className="mb-6 p-4 lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
                    <div className="mt-10 lg:p-20">
                        <h2 className="font-bold text-2xl text-pH lg:text-4xl ">
                            Our expertise in Web Application Development</h2>
                        <p className="p-4 font-light text-sm lg:text-md">
                            We understand that a website is the face of your business in the digital world.
                            That's why we provide professional website design and development services to
                            help you create a stunning and user-friendly website that engages your customers
                            and drives sales. Our team of designers and developers work closely with you to
                            create a website that meets your business requirements and reflects your brand
                            image.


                        </p>

                    </div>
                    <div className="lg:p-20">
                        <img src="applications.png" />
                    </div>

                </div>
                <div className="flex flex-col p-4 pt-6 w-full justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-lg text-pH lg:text-4xl font-bold ">Working Process</h4>
                        <h2 className="mt-2 font-bold text-2xl text-center text-red lg:text-3xl">Industry Best Practices to the Core</h2>
                    </div>
                    <div className="mt-10 flex flex-col gap-y-10 w-full gap-x-20 justify-center lg:grid lg:grid-cols-6 relative   ">
                        <div className="absolute overflow-auto w-5/6 hidden lg:block ">
                            <img src="line.png"  />
                        </div>

                        <div className="">
                            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">01</a>
                            </div>
                            <div className="relative mt-6 ">
                                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                                </div>
                                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                                    <h2 className="text-2xl font-bold ">Discovery</h2>
                                    <p className="text-xs font-light mt-2">We recognize the significance and value of constucting an application
                                        based on a thorough  understanding of their business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:-mt-[3vh]">
                            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">02</a>
                            </div>
                            <div className="relative mt-6 ">
                                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                                </div>
                                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                                    <h2 className="text-2xl font-bold ">Planning</h2>
                                    <p className="text-xs font-light mt-2">in order to estimate the time, cos ,resources,and
                                        other factory , we engage in through project planning and prepare a project scope document.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">03</a>
                            </div>
                            <div className="relative mt-6 ">
                                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                                </div>
                                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                                    <h2 className="text-2xl font-bold ">Design</h2>
                                    <p className="text-xs font-light mt-2">To meet our customer's specific business
                                        needs. we leverage AI and various other tools to develop the application
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:-mt-[2vh]">
                            <div className="w-20 ml-10 h-20 rounded-full bg-white  shadow-2xl flex justify-center items-center">
                                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">04</a>
                            </div>
                            <div className="relative mt-6 ">
                                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                                </div>
                                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                                    <h2 className="text-2xl font-bold ">Testing</h2>
                                    <p className="text-xs font-light mt-2">Before progressing to the production phase, each development phase must
                                        successfully pass multiple testing scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">05</a>
                            </div>
                            <div className="relative mt-6 ">
                                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                                </div>
                                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                                    <h2 className="text-2xl font-bold ">Project Delivery</h2>
                                    <p className="text-xs font-light mt-2">Upon receiving approval from our quality assurance team, we will
                                        proceed with deploying the project to the Live environment.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-10  lg:gap-x-10 lg:p-10  mt-10 m-4 lg:grid lg:grid-cols-4">
                    <div className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
                        <label className="text-2xl font-bold text-pH">IT Consulting</label>
                        <p className="font-light text-sm mt-4 lg:pb-10">Our IT consulting services are designed to help you make informed decisions about your IT infrastructure
                            and technology investments. We provide expert advice and guidance on a wide range of IT-related topics,
                            including cybersecurity, cloud computing, software development, and digital transformation.</p>
                    </div>
                    <div className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
                        <label className="text-2xl font-bold text-pH">Digital Marketing</label>
                        <p className="font-light text-sm mt-4 ">To succeed in the digital world, your business needs a strong online presence. Our digital
                            marketing services are designed to help you increase your
                            online visibility and attract more customers to your business. We provide a wide range of digital
                            marketing services, including search engine optimization (SEO), social media marketing, email marketing,
                            and content marketing.</p>
                    </div>
                    <div className="rounded-md shadow-xl p-4 hover:shadow-2xl  ">
                        <label className="text-2xl font-bold text-pH">Software Development</label>
                        <p className="font-light text-sm mt-4 ">Our software development services are designed to help you develop custom software solutions
                            that streamline your business operations and improve your efficiency. We have a team of experienced
                            developers
                            who specialize in developing software solutions that are tailored to your business needs.</p>
                    </div>
                    <div className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
                        <label className="text-2xl font-bold text-pH">Cloud Services</label>
                        <p className="font-light text-sm mt-4 ">Our cloud services are designed to help you move your business to the cloud, giving you access
                            to a wide range of benefits, including increased flexibility, scalability, and security.
                            Our team of experts will help you migrate your business
                            to the cloud and provide ongoing support to ensure that your business runs smoothly.</p>
                    </div>


                </div>
            </div>
            <div className="mt-10">
                <LetsTalk />
            </div>
            <div className="mt-10">
                <BottomFooter />
            </div>
        </>
    )
}


export default IteServices