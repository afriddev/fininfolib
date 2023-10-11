import BottomFooter from "@/components/bottomFooter"
import LetsTalk from "@/components/letsTalk"

const Contact: () => void = () => {
    return (
        <>
            <div>
                <div className="flex w-full h-fit bg-gradient-to-t from-o1 to-o2 ">
                    <label className="py-4 text-3xl font-bold text-white pl-14 lg:py-8 lg:text-4xl lg:pl-20">
                        Contact us </label>
                </div>

            </div>
            <div className="mt-10">
                <LetsTalk />
            </div>
            <div className="mt-20">
                <BottomFooter />
            </div>
        </>
    )
}
export default Contact