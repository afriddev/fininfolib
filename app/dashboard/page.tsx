"use client";
import DashboardMain from "@/components/dashboard/dashboardMain"
import EmployeeMain from "@/components/dashboard/employeeMain."
import InboxMain from "@/components/dashboard/inboxMain"
import JobsMain from "@/components/dashboard/jobsMain"
import Sidepanel from "@/components/dashboard/sidepanel"
import { useState } from "react"

const Dashboard = () => {
    const [index,setIndex] = useState(0)
    function setindex(val:number){
        setIndex(val)

    }
    return ( 
        <>
            <main className=" w-full h-[90vh] bg-white">
                <section>
                    <div className="flex">
                        <Sidepanel index={index} setindex={setindex} />
                        {
                            index == 0
                            ? <DashboardMain /> 
                            :index == 1
                            ?<InboxMain/>
                            :index==2
                            ?<EmployeeMain/>
                            :index == 3
                            ?<JobsMain/>
                            :null
                        }
                        
                        
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default Dashboard