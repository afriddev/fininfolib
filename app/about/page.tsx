import BottomFooter from "@/components/bottomFooter";
import LetsTalk from "@/components/letsTalk";
import NavBar from "@/components/navBar";

const About = () => {
    const technologies = [
        {
            name: "Android",
            image: 'brand-icon-1.png'
        },
        {
            name: "Codeigniter",
            image: 'brand-icon-2.png'
        },
        {
            name: "Flutter",
            image: 'brand-icon-3.png'
        },
        {
            name: "NodeJs",
            image: 'brand-icon-4.png'
        },
        {
            name: "python",
            image: 'brand-icon-5.png'
        },
        {
            name: "React",
            image: 'brand-icon-6.png'
        },
        {
            name: "MYSQL",
            image: 'brand-icon-7.png'
        },
        {
            name: "Angular",
            image: 'brand-icon-8.png'
        },
        {
            name: "Salesforce",
            image: 'brand-icon-9.png'
        },
        {
            name: "Java",
            image: 'brand-icon-10.png'
        }, {
            name: "UI/UX",
            image: 'brand-icon-11.png'
        }, {
            name: "Larvel",
            image: 'brand-icon-12.png'
        },

    ]
    return (
        <>
            <div>
                <div className="flex w-full h-fit bg-gradient-to-t from-o1 to-o2 ">
                    <label className="py-4 text-3xl font-bold text-white pl-14 lg:py-8 lg:pl-20 ">About us </label>
                </div>
                <div className="bg-bg2 m-2  h-fit relative lg:justify-center lg:items-center lg:mt-20 lg:mb-20 lg:ml-32 lg:mr-32">
                    <div className="absolute w-8 h-8 border right-0 top-0 border-gray-400 bg-white">
                        <div className="w-8  overflow-hidden ">
                            <div className="-mt-8 h-16 bg-primaryGreen -rotate-45 transform origin-bottom-right"></div>
                        </div>

                    </div>
                    <div className="lg:pl-[5%] lg:pr-[5%] lg:gap-y-8 lg:justify-center
                     lg:items-center">
                        <h2 className="pl-4 pr-4 pt-8 text-xl font-bold text-pH text-center pb-4 lg:text-4xl lg:text-center ">
                            We are passionate about serving our customers and leading-edge</h2>
                        <p className="pl-5 pt-2  text-gray-700 text-center pr-5 text-sm lg:text-lg">Through years of hard work, we have earned a reputation for top-tier services.
                            At FinInfolib, we implement our strategy proactively. Our expert team makes it
                            their mission to maintain your business, allowing you to focus on your core
                            busines
                            As a comprehensive service provider, FinInfolib can handle all the details for
                            you.
                        </p>
                        <p className="pl-5 pt-6 pb-6 text-gray-700 text-center pr-5 text-sm lg:text-lg lg:pb-12">
                            FinInfolib has been helping its customers achieve a promising future by collaborating with them to succeed.
                            We have achieved an award-winning reputation with cutting-edge technologies and industry knowledge
                            across all business sectors, establishing strong relationships with our customers. Being the best means
                            delivering products that customers can trust for unparalleled performance. FinInfolib is committed to
                            being the market leader you can rely on,
                            determined to blend your business with technology to accelerate progress.</p>

                    </div>

                </div>
                <div className="relative ">
                    <div className="hidden lg:block absolute top-0 right-0 w-20 h-36">
                        <img src="ark1.png" />
                    </div>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="m-6 mt-12 lg:m-20">
                            <img src="partner_img.webp"  />
                        </div>
                        <div className="flex flex-col p-4 pt-8 space-y-4 lg:justify-center lg:items-center lg:p-16">
                            <h3 className="font-bold text-xl text-pH lg:text-4xl ">Partner with us for customized solutions</h3>
                            <p className="pb-2 text-light text-gray-700 lg:text-xl ">At FIN Infolib, we are committed to delivering exceptional customer service
                                and producing high-quality work. Our team is dedicated to providing tailored
                                solutions that meet your specific requirements
                                and preferences. We work closely with our clients to ensure that their projects
                                are completed within their specified timeframe, budget, and to the highest
                                standards.</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center p-4 pt-10 ">
                    <h3 className="font-bold text-pH text-xl lg:text-4xl "> Technologies We Use</h3>
                    <div className="flex flex-col gap-y-6 lg:gap-y-10 lg:gap-x-10 w-full pt-10 lg:grid lg:grid-cols-3 lg:p-20 ">
                        {
                            technologies.map(a => {
                                return <div className=" w-full h-fit bg-gray-100 rounded-lg flex hover:shadow-2xl lg:bg-white lg:shadow-md
                                 justify-start items-center">
                                    <img src={a.image} className="w-12 h-12 m-4 p-2 rounded-lg shadow-xl bg-white 
                                    "/>
                                    <label className="pl-3 text-lg font-bold text-gray-700 lg:text-xl">{a.name}</label>

                                </div>
                            })
                        }
                    </div>
                </div>


            </div>
            <div className="mt-8">
                <LetsTalk />
            </div>
            <div className="mt-12">
                <BottomFooter />
            </div>


        </>
    )
}
export default About