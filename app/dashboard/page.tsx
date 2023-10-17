"use client";
import Main from "@/components/dashboard/main";
import addField from "@/lib/methods/addField";
import getUser from "@/lib/methods/getUser";
import { useEffect, useLayoutEffect, useState } from "react";
const Dashboard = () => {
  const [data, setData] = useState();
  const [userloaded, setUserLoaded] = useState(false);
  async function getuser() {
    const user = await getUser("afridayan01@gmail.com");
    // const addfield = await addField("afridayan01@gmail.com","jobData",{jobsCount:3,
    //   jobViewCount:200,
    //   jobViewGrowCount:21,
    //   jobAppliedGrowCount:34,
    //   jobAppliedCount:91,jobStatistics:[
    //     {month:"apr",data:19},
    //     {month:"may",data:49},
    //     {month:"jun",data:33},
    //     {month:"jul",data:22},
    //     {month:"aug",data:31}
    //   ]})
    const addfield = await addField("afridayan01@gmail.com", "employeeData", {
      employeeCount: 7,
      employeeSalary: 130,
      workingFormat: [
        { employeeCount: 2, name: "remote" },
        { employeeCount: 3, name: "hybrid" },
        { employeeCount: 2, name: "Native" },
      ],
      employeesGrowCount:16,
      employeesGrowSalary:13,
      employees: [
        {
          name: "Shaik Afrid",
          email:"afridayan01@gmail.com",
          online:true,
          attendence:"Late",
          unSeenMessagesCount:1,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/my.jpeg",
          role: "BackEnd Developer",
          status: "Working",
          
        },
        {
          name: "Shaik Ayesha",
          email:"ayesha438@gmail.com",
          online:false,
          attendence:"Absent",
          unSeenMessagesCount:0,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/ayesha.jpeg",
          role: "UI&UX Designer",
          status: "On Leave",
        },
        {
          name: "John Ripper ",
          email:"johnkali11@gmail.com",
          online:false,
          attendence:"Present",
          unSeenMessagesCount:0,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee2.jpg",
          role: "App Developer",
          status: "Working",
        },
        {
          name: "Neha Johnson",
          email:"nehalovely5@gmail.com",
          online:true,
          attendence:"Present",
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee3.jpg",
          role: "NodeJs Developer",
          status: "No Work",
        },
        {
          name: "Pooja Kerthi",
          email:"poojakerthi143@gmail.com",
          online:true,
          attendence:"Present",
          unSeenMessagesCount:0,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee4.jpg",
          role: "Angular Developer",
          status: "Working",
        },
        {
          name: "Robert",
          email:"robertjrfake@gmail.com",
          online:false,
          attendence:"Present",
          unSeenMessagesCount:2,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee5.jpg",
          role: "App Developer",
          status: "No Work",
        },
        {
          name: "Cris",
          email:"cris4301@gmail.com",
          online:true,
          attendence:"Present",
          unSeenMessagesCount:0,
          image:
            "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee6.jpeg",
          role: "React Developer",
          status: "Working",
        },
      ],
    });
    console.log(addfield);
    setData(user);
    setUserLoaded(true);
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
