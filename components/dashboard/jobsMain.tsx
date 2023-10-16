const JobsMain = () => {


    return (
        <>
            <main className=" overflow-auto w-full bg-lightBlue p-6">
                <section>
                    <div className="flex flex-col relative w-full gap-x-6 gap-y-6  ">
                        <div className="absolute top-0 shadow-lg right-10 bg-p rounded-xl w-fit h-fit py-2 px-10">
                            <label className="text-xl  text-white">Post A Job </label>

                        </div>
                        <div className="flex gap-x-6">
                            <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 w-1/3 h-[24vh]">
                                <h1 className="text-xl text-p border-b border-p w-fit h-fit ml-6 pt-2 ">Android Developer </h1>
                                <p className="p-6 text-md text-gray-700">Need Android Developer Staff Based on Java, Flutter with
                                    minimum 2 years Experience</p>
                                <div className="w-full flex justify-between pl-10 pr-10">
                                    <div className="flex gap-x-2">
                                        <h2 className="text-black text-md">Count :</h2>
                                        <label className="text-md text-gray-700">2</label>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <h2 className="text-black text-md">Status :</h2>
                                        <label className="text-md text-red">Urgent</label>
                                    </div>

                                </div>

                            </div>
                            <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 w-1/3 h-[24vh]">
                                <h1 className="text-xl text-p border-b border-p w-fit h-fit ml-6 pt-2 ">Node JS Developer </h1>
                                <p className="p-6 text-md text-gray-700">Need Node JS Developer Staff Based on JavaScript TypeScript  with
                                    minimum 2 years Experience ,TypeScript Developers Have More Priority </p>
                                <div className="w-full flex justify-between pl-10 pr-10">
                                    <div className="flex gap-x-2">
                                        <h2 className="text-black text-md">Count :</h2>
                                        <label className="text-md text-gray-700">1</label>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <h2 className="text-black text-md">Status :</h2>
                                        <label className="text-md text-red">Urgent</label>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 w-1/3 h-[24vh]">
                            <h1 className="text-xl text-p border-b border-p w-fit h-fit ml-6 pt-2 ">Lead Developer</h1>
                            <p className="p-6 text-md text-gray-700">Need Software Developer Staff Based on Java,python,JavaScript with
                                minimum 2 years Experience</p>
                            <div className="w-full flex justify-between pl-10 pr-10 mb-4">
                                <div className="flex gap-x-2">
                                    <h2 className="text-black text-md">Count :</h2>
                                    <label className="text-md text-gray-700">1</label>
                                </div>
                                <div className="flex gap-x-2">
                                    <h2 className="text-black text-md">Status :</h2>
                                    <label className="text-md text-pureGreen">Less Then 1 Month</label>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </>
    )

}



export default JobsMain