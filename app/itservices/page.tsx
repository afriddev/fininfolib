const IteServices: () => void = () => {
    return (
        <>
            <div>
                <div className=" p-6 bg-gradient-to-b from-o1 to-o2 w-full h-fit flex flex-col">
                    <h1 className="font-bold text-2xl text-white
                    mt-10" >Digital IT services</h1>
                    <p className="text-gray-200 p-4 text-sm ">Our team of experts is dedicated to providing top-tier It services
                        to help your business grow and succees in the digital world. We offer a wide range
                        of services to meet your business needs. from website design and development to software
                        development and digital marketing.
                    </p>
                    <button className="flex justify-center items-center rounded-3xl mt-8 h-fit w-fit py-2 px-8 text-lg text-white bg-darkBlue ">Contact Us </button>
                </div>
                <div className="p-4 mt-10">
                    <img src="webdesign.webp" />
                    <div className="mt-10">
                        <h2 className="font-bold text-2xl text-primaryGreen">
                            Website Design and Development</h2>
                        <p className="p-4 font-light text-sm">
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
                <div className="mt-6 mb-6 p-4">
                    <div className="mt-10">
                        <h2 className="font-bold text-2xl text-primaryGreen">
                            Our expertise in Web Application Development</h2>
                        <p className="p-4 font-light text-sm">
                            We understand that a website is the face of your business in the digital world.
                            That's why we provide professional website design and development services to
                            help you create a stunning and user-friendly website that engages your customers
                            and drives sales. Our team of designers and developers work closely with you to
                            create a website that meets your business requirements and reflects your brand
                            image.


                        </p>

                    </div>
                    <img src="applications.png" />


                </div>
                <div className="p-4 pt-6 ">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-lg text-primaryGreen ">Working Process</h4>
                        <h2 className="mt-2 font-bold text-2xl text-center text-primaryGreen">Industry Best Practices to the Core</h2>
                    </div>
                    <div className="mt-10 flex flex-col ">

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
                    </div>
                </div>
            </div>
        </>
    )
}


export default IteServices