"use client"
import Sidepanel from "@/components/dashboard/sidepanel"
import DashboardMain from "@/components/dashboard/dashboardMain"
import EmployeeMain from "@/components/dashboard/employeeMain."
import InboxMain from "@/components/dashboard/inboxMain"
import JobsMain from "@/components/dashboard/jobsMain"
import { useState } from "react"
const Main = ({userData}) => {
    const [index, setIndex] = useState(0)
    function setindex(val: number) {
        setIndex(val)
    }
    return (
        <>
            <div className="flex">
                <Sidepanel index={index} setindex={setindex} />
                {
                    index == 0
                        ? <DashboardMain userData={userData} />
                        : index == 1
                            ? <InboxMain userData={userData} />
                            : index == 2
                                ? <EmployeeMain />
                                : index == 3
                                    ? <JobsMain />
                                    : null
                }
            </div>
        </>
    )
}
export default Main