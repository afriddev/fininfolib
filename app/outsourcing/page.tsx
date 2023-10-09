import BottomFooter from "@/components/bottomFooter"

const OutsourcingServices: () => void = () => {


    return (
        <>
            <div>
                <div
                    className="flex flex-col space-y-4 text-white p-4 bg-gradient-to-b from-o1 to-o2 w-full h-fit">
                    <label className="text-white font-bold text-3xl mt-6 ">OutSourcing Services</label>
                    <p className="text-gray-100 text-sm ">As a leading IT outsourcing company, we are committed to helping businesses achieve their
                        goals by providing them with access to skilled and cost-effective resources that can improve
                        their efficiency. Whether you need to outsource a single task or an entire project, we can help
                        you find the right solution to meet your business needs.</p>
                    <p className="text-gray-100 text-sm ">We provide a dedicated team of tech employees to work on your projects
                        , ensuring that you have access to the right talent to complete your projects on
                        time and within budget. Our team of experts specializes in a wide range of technologies and can
                        help you develop custom software solutions, build websites
                        , manage your IT infrastructure, and more.</p>
                    <img className="p-6" src="outservices.webp" />
                </div>
                <div className="p-4 flex flex-col ">
                    <img src="techemployees.webp" />
                    <div className="flex flex-col pt-6 space-y-6">
                        <h2 className="font-bold text-3xl text-primaryGreen">Dedicated Tech Employees</h2>
                        <p className="font-light text-sm ">We provide dedicated tech employees to work on your projects,
                            ensuring that you have access to the right talent to complete your projects
                            on time and within budget. Our team of experts specializes in a wide range of
                            technologies and can help you develop custom software solutions, build websites,
                            manage your IT infrastructure, and more.
                        </p>
                    </div>
                </div>
                <div className="p-4 flex flex-col">
                    <div className="flex flex-col pt-6 space-y-6 ">
                        <h2 className="font-bold text-3xl text-primaryGreen">
                            We are commited to providing industry leading experts
                        </h2>
                        <p className="font-light text-sm ">We are committed to providing exceptional service to our customers.
                         We work closely with you to understand your
                         business needs and provide customized solutions to help you achieve your goals.
                        </p>
                    </div>
                    <img src="experts.webp" className="p-6"/>


                </div>
                <div className="flex flex-col justify-center items-center p-4 text-white space-y-6">
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="skilled.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 ">Skilled and Experienced Talent</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 ">Our tech employees are highly skilled and experienced in their respective fields.
                            ensuring that you have access to the right talent to complete your projects.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="effective.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 ">Cost-Effective Solution</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 ">
                            We provide cost-effective solution that can help you save money on your IT-related
                            projects.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="flex.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 ">Flexibility</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 ">
                        We offer flexible hiring models that allow you to hire a 
                        tech person on a full-time, part-time, or project basis, depending on your business needs.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
                        <img src="ongoing.png" className="w-20 h-16 mt-4 " />
                        <h3 className="mt-6 ">Ongoing Support</h3>
                        <p className="text-sm font-light mt-4 text-center mb-4 ">
                        We provide ongoing support to ensure that your tech person
                         is performing optimally and meeting your business needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <BottomFooter/>
            </div>
        </>
    )
}



export default OutsourcingServices