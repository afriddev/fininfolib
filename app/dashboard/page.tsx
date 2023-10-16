import DashboardMain from "@/components/dashboard/dashboardMain"
import InboxMain from "@/components/dashboard/inboxMain"
import Sidepanel from "@/components/dashboard/sidepanel"

const Dashboard = () => {
    return (
        <>
            <main className=" w-full h-[90vh] bg-white">
                <section>
                    <div className="flex">
                        <Sidepanel />
                        <InboxMain/>
                        
                        {/* <DashboardMain /> */}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Dashboard