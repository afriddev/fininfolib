import BottomFooter from "@/components/re/bottomFooter"

const OutsourcingServices: () => void = () => {


    return (
        <>
            <div>
                <div
                    className="flex flex-col space-y-4 text-white p-4 bg-gradient-to-b from-o1 to-o2 w-full h-fit
                    lg:grid lg:grid-cols-2">
                    <div className="lg:p-20 lg:justify-center lg:items-center">
                        <label className="text-white font-bold text-3xl mt-6 lg:text-4xl  ">OutSourcing Services</label>
                        <p className="text-gray-100 text-sm lg:text-lg lg:pt-16 ">As a leading IT outsourcing company, we are committed to helping businesses achieve their
                            goals by providing them with access to skilled and cost-effective resources that can improve
                            their efficiency. Whether you need to outsource a single task or an entire project, we can help
                            you find the right solution to meet your business needs.</p>
                        <p className="text-gray-100 text-sm lg:text-lg ">We provide a dedicated team of tech employees to work on your projects
                            , ensuring that you have access to the right talent to complete your projects on
                            time and within budget. Our team of experts specializes in a wide range of technologies and can
                            help you develop custom software solutions, build websites
                            , manage your IT infrastructure, and more.</p>

                    </div>
                    <div className="lg:p-20 ">
                        <img className="p-6" src="outservices.webp" />
                    </div>

                </div>
                <div className="p-4 flex flex-col lg:grid lg:grid-cols-2  ">
                    <img src="techemployees.webp" className="lg:p-20" />
                    <div className="flex flex-col pt-6 space-y-6 lg:p-20 lg:justify-center lg:items-center">
                        <h2 className="font-bold text-3xl text-pH lg:text-4xl ">Dedicated Tech Employees</h2>
                        <p className="font-light text-sm lg:text-lg">We provide dedicated tech employees to work on your projects,
                            ensuring that you have access to the right talent to complete your projects
                            on time and within budget. Our team of experts specializes in a wide range of
                            technologies and can help you develop custom software solutions, build websites,
                            manage your IT infrastructure, and more.
                        </p>
                    </div>
                </div>
                <div className="p-4 flex flex-col lg:justify-center lg:items-center lg:grid lg:grid-cols-2">
                    <div className="flex flex-col pt-6 space-y-6 lg:p-20">
                        <h2 className="font-bold text-3xl text-pH lg:text-4xl">
                            We are commited to providing industry leading experts
                        </h2>
                        <p className="font-light text-sm lg:text-lg">We are committed to providing exceptional service to our customers.
                            We work closely with you to understand your
                            business needs and provide customized solutions to help you achieve your goals.
                        </p>
                    </div>
                    <img src="experts.webp" className="p-6 lg:p-20"/>


                </div>
                <div className="flex flex-col justify-center items-center p-4 text-white gap-y-6 lg:gap-x-10 lg:p-12 lg:grid lg:grid-cols-2 lg:grid-rows-2">
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="skilled.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 lg:text-xl ">Skilled and Experienced Talent</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg">Our tech employees are highly skilled and experienced in their respective fields.
                            ensuring that you have access to the right talent to complete your projects.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="effective.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 lg:text-xl">Cost-Effective Solution</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg lg:pb-8">
                            We provide cost-effective solution that can help you save money on your IT-related
                            projects.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="flex.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 lg:text-xl">Flexibility</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg">
                            We offer flexible hiring models that allow you to hire a
                            tech person on a full-time, part-time, or project basis, depending on your business needs.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="ongoing.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 lg:text-xl ">Ongoing Support</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg lg:pb-8">
                            We provide ongoing support to ensure that your tech person
                            is performing optimally and meeting your business needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <BottomFooter />
            </div>
        </>
    )
}



export default OutsourcingServices