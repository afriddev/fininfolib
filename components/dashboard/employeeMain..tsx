"use client";
import { FaUserTie } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { VictoryPie } from "victory";

const EmployeeMain = () => {
  const data1 = [
    { x: " ", y: 120 },
    { x: " ", y: 180 },
  ];
  const data2 = [
    { x: " ", y: 180 },
    { x: " ", y: 130 },
    { x: " ", y: 50 },
  ];

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
                <div className="flex w-full pt-6 gap-x-6">
                  <div className="flex flex-col  rounded-xl shadow-xl w-1/2 pl-6 pr-20 h-[30vh]  bg-white">
                    <div className=" pl-6 pt-6">
                      <label className="text-2xl  text-zinc-800">
                        Gender Diversity
                      </label>
                    </div>
                    <div className="">
                      <VictoryPie
                        padAngle={({ datum }) => 6}
                        animate={{
                          duration: 2000,
                        }}
                        innerRadius={(val) => {
                          return 30;
                        }}
                        width={200}
                        height={140}
                        colorScale={["#8142f5", "#2de80c"]}
                        data={data1}
                      />
                    </div>
                    <div className="flex justify-evenly pb-4">
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-g"></div>
                        <label>Male</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-p"></div>
                        <label>Female</label>
                      </div>

                    </div>
                  </div>
                  <div className="flex flex-col  rounded-xl shadow-xl w-1/2 pl-6 pr-20 h-[30vh]  bg-white">
                    <div className=" pl-6 pt-6">
                      <label className="text-2xl  text-zinc-800">
                        Total Projects
                      </label>
                    </div>
                    <div className="">
                      <VictoryPie
                        padAngle={({ datum }) => 6}
                        animate={{
                          duration: 2000,
                        }}
                        innerRadius={(val) => {
                          return 30;
                        }}
                        width={200}
                        height={140}
                        colorScale={["#2de80c", "#007bff", "#ff0000"]}
                        data={data2}
                      />
                    </div>
                    <div className="grid grid-cols-2  pb-4 w-full">
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-g"></div>
                        <label>Completed</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-pH"></div>
                        <label>Working</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-red"></div>
                        <label>Pending</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4  w-full mt-4 bg-white h-[30vh] rounded-xl shadow-xl">
                  <div className="w-full ">
                    <div className="pl-6">
                      <label className="text-sH text-2xl">Employees On  Leave</label>
                    </div>
                    <div className="flex justify-between gap-x-4 pt-2 h-[27vh]w-full overflow-auto no-scrollbar">
                      <div className="w-1/3 flex flex-col justify-center items-center ">
                        <h1 className="text-xl text-black">Name</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                          <label className="text-md text-gray-700">Shaik Afrid</label>
                          <label className="text-md text-gray-700">John Ripper</label>
                          <label className="text-md text-gray-700">Richard Daniel</label>
                          <label className="text-md text-gray-700">Shaik Ayesha</label>
                        </div>
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-black">Role</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                          <label className="text-md text-gray-700">Web Developer</label>
                          <label className="text-md text-gray-700">App Developer</label>
                          <label className="text-md text-gray-700">BackEnd Developer</label>
                          <label className="text-md text-gray-700">UI & UX Designer</label>
                        </div>
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-black">Days</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                          <label className="text-md text-gray-700">2 Days</label>
                          <label className="text-md text-gray-700">1 Days</label>
                        <label className="text-md text-gray-700">4 Days</label>
                          <label className="text-md text-gray-700">5 Days</label>
                        </div>
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
export default EmployeeMain;
