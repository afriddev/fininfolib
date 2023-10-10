import BottomFooter from "@/components/bottomFooter"

const Accessibility:()=>void = ()=>{
    return (
        <>
            <div className="text-gray-700">
                <div className="flex h-fit bg-gradient-to-b from-o1 to-o2">
                    <label className="text-2xl pl-6 text-white font-bold
                    py-4">Accessibility</label>
                </div>
                <div className="flex flex-col space-y-4 m-2 pl-4 mt-2 bg-bg2">
                    <h2 className="text-primaryGreen text-xl font-bold pt-4 ">Accessibility </h2>
                    <p className="text-sm">
                    Fin InfoLIB Website provides its users with disabilities who find difficult 
                    or even impossible to access the information that is available to all our 
                    other customers.
                     We have adopted and have used the techniques to make the website simpler. 
                    </p>
                    <p className="text-sm pb-4">
                    We have designed our website to meet the Web Accessibility Initiative 
                    (WAI) Content Accessibility Guidelines set by the World Wide Web
                     Consortium (W3C). We have implemented 'Double-A' standards wherever possible,
                      if you come across a part of our
                     site which is difficult to access please let us inform about it.

                    </p>
                    
                </div>
            </div>
            <div className="mt-4">
                <BottomFooter/>
            </div>
        </>
    )
}
export default Accessibility