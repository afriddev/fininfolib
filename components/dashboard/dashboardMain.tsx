"use client";
import { GrNotification } from "react-icons/gr";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { VictoryBar, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
import { useState } from "react";

const DashboardMain = () => {
  const data = [
    { x: "apr 03", y: 43 },
    { x: "may 03", y: 72 },
    { x: "jun 03", y: 22 },
    { x: "july 03", y: 96 },
    { x: "aug 03", y: 104 },
  ];
  const [label, setLabel] = useState(false);
  const data1 = [
    { x: " ", y: 120 },
    { x: " ", y: 120 },
    { x: " ", y: 120 },
  ];

  return (
    <>
      <main className="w-full h-[90vh] bg-lightBlue overflow-auto ">
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
                        Job Applied
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

            <div className="p-6 flex justify-evenly">
              <div className="flex flex-col  w-fit h-[40vh] rounded-xl shadow-xl bg-white ">
                <div>
                  <label className=" flex text-zinc-900 text-2xl pt-10 pl-10  ">
                    Job Statistics
                  </label>
                </div>
                <div className="pl-10 pr-10 flex gap-x-6">
                  <div className="flex  rotate-180 justify-center items-center">
                    <label
                      style={{ writingMode: "vertical-rl" }}
                      className="flex  rotate-180 "
                    >
                      # No of candidates
                    </label>
                  </div>
                  <div>
                    <VictoryChart
                      minDomain={0}
                      domainPadding={{ x: 20 }}
                      width={600}
                      height={240}
                    >
                      <VictoryBar
                        style={{ data: { fill: "#2de80c" } }}
                        cornerRadius={{
                          bottom: () => 5,
                          top: () => 5,
                        }}
                        y0={(d) => d.y - (d.y - 3)}
                        data={data}
                        animate={{
                          onEnter: {
                            duration: 1500,
                          },
                        }}
                      />
                    </VictoryChart>
                  </div>
                </div>
                <div className="flex justify-center items-center p-6">
                  <div className="flex justify-center items-center gap-x-4">
                    <a className="w-4 h-4 rounded-full bg-green"></a>
                    <label className="text-xl text-center">Job Interview</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  rounded-xl shadow-xl w-fit pl-6 pr-20 h-[40vh]  bg-white">
                <div className=" pr-6 pt-6">
                  <label className="text-xl  text-zinc-800">Working Format</label>
                </div>
                <div className="pl-20">
                  <VictoryPie
                    padAngle={({ datum }) => 6}
                    animate={{
                      duration: 2000,
                    }}
                    innerRadius={(val) => {
                      return 120;
                    }}
                    width={280}
                    height={280}
                    colorScale={["#8142f5", "#2de80c", "#f5e945"]}
                    data={data1}
                  />
                </div>
                <div className="flex justify-between pt-4">
                  <div className="flex gap-x-2 text-gray-700">
                    <div className="w-4 rounded-full h-4 bg-g">
                    </div>
                    <label>Hybrid</label>
                  </div>
                  <div className="flex gap-x-2 text-gray-700">
                    <div className="w-4 rounded-full h-4 bg-p">
                    </div>
                    <label>Hybrid</label>
                  </div>
                  <div className="flex gap-x-2 text-gray-700">
                    <div className="w-4 rounded-full h-4 bg-y">
                    </div>
                    <label>Hybrid</label>
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
