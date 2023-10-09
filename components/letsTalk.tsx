export default function LetsTalk(){
    return (
    <>
    <div className=" flex flex-col ">
          <div className="flex flex-col m-4 space-y-4">
            <h2 className="text-xl text-primaryGreen font-bold  ">We have handpicked developers ready to work for your projects</h2>
            <p className="flex font-light">We know that hiring remote developers can be a daunting process.
              We’ve made it as easy as possible for you to find the perfect candidate</p>
          </div>
          <div className="m-4 ">
            <img src="form_img.webp"  className="mb-6"/>
            <div className="flex">
            <label className="font-bold text-2xl border-b border-lightOrange" >
                Get in </label>
                <a className="font-bold text-2xl pl-1">touch</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-4 mt-6">
          <div className ="flex flex-col justify-start items-start  space-y-4 ">
            <div className="flex flex-col w-full">
              <label className="font-bold">Full name <span className="text-red text-xl">*</span></label>
              <input type="text" placeholder="Enter your name" className=" p-2 outline-none border-b border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-bold">Email <span className="text-red text-xl">*</span></label>
              <input type="text" placeholder="Enter your email" className="p-2 outline-none border-b border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-bold">Message <span className="text-red text-xl">*</span></label>
              <textarea placeholder="Message" className=" m-2 outline-none border-b border-gray-600 justify-start
            w-5/6 ml-4"></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-o1 text-white h-fit w-fit
               px-8 py-2 text-xl rounded-3xl ml-4">Submit</button>

            </div>
            
          </div>
        </div>

    </>
    )
}