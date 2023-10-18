"use client";

import { useLayoutEffect, useState } from "react";

const JobsMain = ({ userData }) => {
  let [jobs, setJobs] = useState(true);
  let [jobsData, setJobsData] = useState([]);
  function setjobs() {
    setJobs(true);
  }
  function getJobs() {
    setJobsData(userData.jobData.jobs);
  }
  function addJob(object: object) {
    setJobsData((e) => [...e, object]);
  }
  useLayoutEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <main className=" overflow-auto w-full bg-lightBlue p-6">
        <section>
          <div className="flex flex-col relative w-full gap-x-6 gap-y-6  ">
            <div
              onClick={() => {
                setJobs(false);
              }}
              className="absolute top-0 shadow-lg right-10 bg-p rounded-xl w-fit h-fit py-2 px-10"
            >
              <label className="text-xl  text-white">Post A Job </label>
            </div>
            <div></div>
            <div className="grid grid-cols-2 w-4/6 gap-x-6 gap-y-6 ">
              {jobs ? (
                <RenderJobs userData={jobsData} />
              ) : (
                <CreateJob setjob={setJobs} addJob={addJob} />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
function CreateJob({ setjob, addJob }) {
  let [role, setRole] = useState("");
  let [status, setStatus] = useState("");
  let [messagee, setMessage] = useState("");
  let [count, setCount] = useState("");
  return (
    <>
      <section className="w-full bg-white rounded-xl shadow-lg h-fit">
        <div className="flex flex-col gap-y-4 p-6">
          <div className="flex flex-col p-4 space-y-6">
            <label className="text-3xl text-black pl-4">Job Role</label>
            <div className="pl-6 pr-4">
              <input
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                type="text"
                placeholder="javaSpring Developer "
                className=" text-xl border-none outline-none pl-6 w-full p-4 h-fit rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <label className="text-3xl text-black pl-4">status</label>
            <div className="pl-6 pr-4">
              <input
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                type="text"
                placeholder="Urgent "
                className=" text-xl border-none outline-none pl-6 w-full p-4 h-fit rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <label className="text-3xl text-black pl-4">count</label>
            <div className="pl-6 pr-4">
              <input
                onChange={(e) => {
                  setCount(e.target.value);
                }}
                type="text"
                placeholder="Urgent "
                className=" text-xl border-none outline-none pl-6 w-full p-4 h-fit rounded-xl shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col p-4 space-y-6">
            <label className="text-3xl text-black pl-4">Message</label>
            <div className="pl-6 pr-4">
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Need Staff for Java Spring developer who have minimum 3 years experience "
                className=" text-xl border-none outline-none pl-6 w-full p-4 h-32 pt-4 rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div
            onClick={() => {
              if (
                window.confirm(
                  "This Is A Test Project Not in Production For Some reasons You Can't ADD This Item In Database But You Can Add Locally ,Really Want To Add?"
                )
              ) {
                if (
                  role === undefined ||
                  messagee === undefined ||
                  status === undefined ||
                  count === undefined
                ) {
                  window.alert("all fields need to be fill");
                } else {
                  const object = {
                    role: role,
                    content: messagee,
                    status: status,
                    count: count,
                  };
                  console.log(object);
                  addJob(object);
                  setjob(true);
                }
              } else {
                setjob(true);
              }
            }}
            className="w-2/5 ml-10 text-xl font-bold rounded-xl p-4 flex justify-center items-center text-p bg-purple-50"
          >
            <label>Add</label>
          </div>
        </div>
      </section>
    </>
  );
}

function RenderJobs({ userData }) {
  return (
    <>
      {userData.map((e) => {
        return (
          <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 w-full h-[24vh]">
            <h1 className="text-xl text-p border-b border-p w-fit h-fit ml-6 pt-2 ">
              {e.role}
            </h1>
            <p className="p-6 text-md text-gray-700">{e.content}</p>
            <div className="w-full flex justify-between pl-10 pr-10">
              <div className="flex gap-x-2">
                <h2 className="text-black text-md">Count :</h2>
                <label className="text-md text-gray-700">{e.count}</label>
              </div>
              <div className="flex gap-x-2">
                <h2 className="text-black text-md">Status :</h2>
                <label
                  className={
                    e.status.toLowerCase() === "urgent"
                      ? "text-md text-red"
                      : "text-md text-pureGreen"
                  }
                >
                  {e.status}
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default JobsMain;
