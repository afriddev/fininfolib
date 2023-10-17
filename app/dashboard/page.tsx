"use client";
import Main from "@/components/dashboard/main";
import addField from "@/lib/methods/addField";
import getUser from "@/lib/methods/getUser";
import { useEffect, useLayoutEffect, useState } from "react";
const Dashboard = () => {
  const [data, setData] = useState();
  const [userloaded, setUserLoaded] = useState(false);
  async function getuser() {
    const user = await getUser("afridayan01@gmail.com")
    const addfield = await addField("afridayan01@gmail.com","jobData",{jobsCount:3,
      jobView:200,
      jobApplied:91})
    console.log(addfield)
    setData(user)
    setUserLoaded(true)
  }
  useLayoutEffect(() => {
    getuser();
  }, []);

  if (!userloaded) {
    return <div>adsas</div>;
  }
  return (
    <>
      <main className=" w-full h-[90vh] bg-white">
        <section>
          <Main userData={data} />
        </section>
      </main>
    </>
  );
};
export default Dashboard;
