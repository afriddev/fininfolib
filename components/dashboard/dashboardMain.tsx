import { GrNotification } from "react-icons/gr";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
const DashboardMain = () => {
  return (
    <>
      <main className="w-full h-[90vh] bg-lightBlue ">
        <section>
          <div>
            <div className="p-6 flex w-full justify-between items-center ">
              <div>
                <label className="text-3xl text-zinc-800 font-bold font-poppins">
                  DashBoard
                </label>
              </div>
              <div className="flex items-center justify-center gap-x-8">
                <div>
                  <div className="relative ">
                    <div
                      className="flex absolute top-[-7px] right-[-3px] justify-center items-center bg-red
                                         w-4 h-4 rounded-full "
                    >
                      <a className="text-white text-[10px] text-center ">3</a>
                    </div>
                    <a className="text-3xl">
                      <GrNotification />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-x-2 justify-start items-end">
                    <h3 className="text-xl font-bold">Shaik Afrid</h3>
                    <h3 className="text-md ">Lead HR</h3>
                  </div>
                </div>
                <div>
                  <div className="h-14 w-14 rounded-full object-cover">
                    <img src="my.jpeg" className="rounded-full object-cover " />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div>
                <div className="flex space-x-10 justify-evenly items-center">
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black">
                        Total Employees
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl ">256</a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl">16%</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black">
                        Job View{" "}
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl ">1000</a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl">19%</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black">
                        Total Employees
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl ">623</a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl">23%</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black">
                        Salary
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl ">$200</a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-orange-100 w-fit h-fit ">
                        <li className="text-red text-xl">
                          <AiOutlineFall />
                        </li>
                        <a className="text-red text-xl">13%</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashboardMain;
