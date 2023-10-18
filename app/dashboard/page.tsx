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
    // const addfield = await addField("afridayan01@gmail.com","projectData",{
    //   completedProjects:21,
    //   pendingProjects:14,
    //   onGoingProjects:6
    // })
    const addfield = await addField("afridayan01@gmail.com","jobData",{
      jobs:[
        {
          role:"Android Developer",
          count:2,
          status:"Urgent",
          content:"Need Android Developer Staff Based on Java, Flutter with minimum 2 years Experience"
        },
        {
          role:"NodeJS Developer",
          count:1,
          status:"Urgent",
          content:"Need Node JS Developer Staff Based on JavaScript TypeScript with minimum 2 years Experience ,TypeScript Developers Have More Priority"
        },
        {
          role:"Software Developer",
          count:1,
          status:"Less then 1 Month",
          content:"Need Software Developer Staff Based on Java,python,JavaScript with minimum 2 years Experience"
        },
        

      ]
    })
    // const addfield = await addField("afridayan01@gmail.com", "employeeData", {
    //   employeeCount: 7,
    //   employeeSalary: 130,
    //   workingFormat: [
    //     { employeeCount: 2, name: "remote" },
    //     { employeeCount: 3, name: "hybrid" },
    //     { employeeCount: 2, name: "Native" },
    //   ],
    //   employeesGrowCount:16,
    //   employeesGrowSalary:13,
    //   employees: [
    //     {
    //       name: "Shaik Afrid",
    //       email:"afridayan01@gmail.com",
    //       online:true,
    //       attendance:"Late",
    //       unSeenMessagesCount:1,
    //       gender:"male",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/my.jpeg",
    //       role: "BackEnd Developer",
    //       status: "Working",
    //       currentLeaveDays:0,
    //       totalLeaveDays:3
          
    //     },
    //     {
    //       name: "Shaik Ayesha",
    //       email:"ayesha438@gmail.com",
    //       online:false,
    //       attendance:"Absent",
    //       unSeenMessagesCount:0,
    //       gender:"female",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/ayesha.jpeg",
    //       role: "UI&UX Designer",
    //       status: "On Leave",

    //       currentLeaveDays:2,
    //       totalLeaveDays:3
    //     },
    //     {
    //       name: "John Ripper ",
    //       email:"johnkali11@gmail.com",
    //       online:false,
    //       attendance:"Present",
    //       unSeenMessagesCount:0,
    //       gender:"male",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee2.jpg",
    //       role: "App Developer",
    //       status: "Working",

    //       currentLeaveDays:0,
    //       totalLeaveDays:0
    //     },
    //     {
    //       name: "Neha Johnson",
    //       email:"nehalovely5@gmail.com",
    //       online:true,
    //       attendance:"Present",
    //       unSeenMessagesCount:0,
    //       gender:"female",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee3.jpg",
    //       role: "NodeJs Developer",
    //       status: "No Work",

    //       currentLeaveDays:0,
    //       totalLeaveDays:1
    //     },
    //     {
    //       name: "Pooja Kerthi",
    //       email:"poojakerthi143@gmail.com",
    //       online:true,
    //       attendance:"Present",
    //       unSeenMessagesCount:0,
    //       gender:"female",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee4.jpg",
    //       role: "Angular Developer",
    //       status: "Working",

    //       currentLeaveDays:0,
    //       totalLeaveDays:0
    //     },
    //     {
    //       name: "Robert",
    //       email:"robertjrfake@gmail.com",
    //       online:false,
    //       attendance:"Present",
    //       unSeenMessagesCount:2,
    //       gender:"male",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee5.jpg",
    //       role: "App Developer",
    //       status: "No Work",

    //       currentLeaveDays:0,
    //       totalLeaveDays:0
    //     },
    //     {
    //       name: "Cris",
    //       email:"cris4301@gmail.com",
    //       online:true,
    //       attendance:"Present",
    //       unSeenMessagesCount:0,
    //       gender:"male",
    //       image:
    //         "https://raw.githubusercontent.com/afriddev/fininfolib/main/public/employee6.jpeg",
    //       role: "React Developer",
    //       status: "Working",

    //       currentLeaveDays:0,
    //       totalLeaveDays:0
    //     },
    //   ],
    // });
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
