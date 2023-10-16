import DashboardMain from "@/components/dashboard/dashboardMain"
import EmployeeMain from "@/components/dashboard/employeeMain."
import InboxMain from "@/components/dashboard/inboxMain"
import Sidepanel from "@/components/dashboard/sidepanel"

const Dashboard = () => {
    return (
        <>
            <main className=" w-full h-[90vh] bg-white">
                <section>
                    <div className="flex">
                        <Sidepanel />
                        {/* <InboxMain/> */}
                        <EmployeeMain/>
                        {/* <DashboardMain /> */}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Dashboard