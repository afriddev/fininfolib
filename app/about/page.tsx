import NavBar from "@/components/navBar";

const About = () => {
    return (
        <>
            <div>
                <div className="flex w-full h-fit bg-gradient-to-t from-o1 to-o2 ">
                    <label className="py-4 text-3xl font-bold text-white pl-14 ">About us </label>
                </div>
                <div className="bg-lG m-2  h-fit relative">
                    <div className="absolute w-8 h-8 border right-0 top-0 border-gray-400 bg-white">
                        <div className="w-8  overflow-hidden ">
                            <div className="-mt-8 h-16 bg-primaryGreen -rotate-45 transform origin-bottom-right"></div>
                        </div>

                    </div>
                    <div>
                        <h2 className="pl-4 pr-4 pt-8 text-xl font-bold text-primaryGreen text-center pb-4 ">
                            We are passionate about serving our customers and leading-edge</h2>
                        <p className="pl-5 pt-2  text-gray-700 text-center pr-5 text-sm">Through years of hard work, we have earned a reputation for top-tier services.
                            At FinInfolib, we implement our strategy proactively. Our expert team makes it
                            their mission to maintain your business, allowing you to focus on your core
                            busines
                            As a comprehensive service provider, FinInfolib can handle all the details for
                            you.
                        </p>
                        <p className="pl-5 pt-6  text-gray-700 text-center pr-5 text-sm">
                            FinInfolib has been helping its customers achieve a promising future by collaborating with them to succeed.
                            We have achieved an award-winning reputation with cutting-edge technologies and industry knowledge
                            across all business sectors, establishing strong relationships with our customers. Being the best means
                            delivering products that customers can trust for unparalleled performance. FinInfolib is committed to
                            being the market leader you can rely on,
                            determined to blend your business with technology to accelerate progress.</p>

                    </div>

                </div>
                <div className="p-8">
                    <img src="partner_img.webp"/>
                </div>


            </div>
        </>
    )
}
export default About