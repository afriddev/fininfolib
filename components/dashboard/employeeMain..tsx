import { FaUserTie } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";

const EmployeeMain = () => {
  return (
    <>
      <main className="bg-lightBlue w-full p-6">
        <section>
          <div>
            <div className="pl-10">
              <label className="text-2xl text-sH">Emplyee Management</label>
            </div>
            <div className="flex w-full pt-6 gap-x-6">
              <div className=" flex flex-col  w-1/2 h-[80vh]  bg-white rounded-xl p-6">
                <div className="flex pl-10 gap-x-4">
                  <label className="text-2xl  text-sH">Total Employees</label>
                  <a className="text-2xl ">
                    <FaUserTie />
                  </a>
                </div>
                <div className="w-full m-4 p-4 flex justify-between gap-x-4">
                  <div className="flex w-1/3 justify-center items-center flex-col">
                    <label className="text-xl text-black">Name</label>
                    <div className="flex flex-col justify-center items-center">
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">Shaik Afrid</h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">John Ripper</h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">
                          Richard Daniel
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-center items-center flex-col ">
                    <label className="text-xl text-black">Role</label>
                    <div className="flex flex-col justify-center items-center">
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">
                          Web Developer
                        </h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">
                          App Developer
                        </h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-zinc-700 ">
                          BackEnd Developer
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-center items-center flex-col ">
                    <label className="text-xl text-black">Status</label>
                    <div className="flex flex-col justify-center items-center">
                      <div className="pt-6">
                        <h1 className="text-lg text-p bg-purple-100 h-fit w-fit px-6 py-1  rounded-lg ">
                          Late
                        </h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-pureGreen bg-green-100 h-fit w-fit px-6 py-1  rounded-lg ">
                          Logined
                        </h1>
                      </div>
                      <div className="pt-6">
                        <h1 className="text-lg text-red bg-orange-100 h-fit w-fit px-6 py-1  rounded-lg ">
                          Absent
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2  flex flex-col ">
                <div className="flex gap-x-4 w-full">
                  <div
                    className="flex flex-col  
                      w-1/2 bg-white rounded-xl shadow-xl p-4"
                  >
                    <h2 className="text-xl text-sH pl-4">Total Attendence</h2>
                    <p className=" pt-4 font-bold text-3xl pl-6 ">32</p>
                    <p className="pt-2 text-md pl-6 text-gray-700">
                      Employees In building
                    </p>
                  </div>
                  <div
                    className="flex flex-col  
                      w-1/2 bg-white rounded-xl shadow-xl p-4"
                  >
                    <h2 className="text-xl text-sH pl-4">
                      Today's Performance
                    </h2>
                    <div className="flex w-full justify-between pr-6 items-center pt-2">
                      <p className=" pt-4 font-bold text-3xl pl-6 ">32%</p>
                      <p className="text-pureGreen gap-x-2 text-xl flex pt-4">
                        <span className="text-pureGreen text-2xl">
                          <GrUpgrade />
                        </span>
                        18%
                      </p>
                    </div>
                    <p className="pt-2 text-md pl-6 text-gray-700">
                      vs Previous Day
                    </p>
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
export default EmployeeMain;
