import Main from "@/components/dashboard/main";
import createTest from "@/create/main";
import connectMongoDb from "@/lib/mongoDB";
const Dashboard = () => {
    createTest({"name":"shaik arid","email":"afridayan01@gmail.com"})
    return (
        <>
            <main className=" w-full h-[90vh] bg-white">
                <section>
                    <Main />
                </section>
            </main>
        </>
    )
}
export default Dashboard