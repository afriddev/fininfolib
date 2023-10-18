const JobsMain = ({ userData }) => {
  return (
    <>
      <main className=" overflow-auto w-full bg-lightBlue p-6">
        <section>
          <div className="flex flex-col relative w-full gap-x-6 gap-y-6  ">
            <div className="absolute top-0 shadow-lg right-10 bg-p rounded-xl w-fit h-fit py-2 px-10">
              <label className="text-xl  text-white">Post A Job </label>
            </div>
            <div></div>
            <div className="grid grid-cols-2 w-4/6 gap-x-6 gap-y-6 ">
              <RenderJobs userData={userData} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

function RenderJobs({ userData }) {
  return (
    <>
      {userData.jobData.jobs.map((e) => {
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
