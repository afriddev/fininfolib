import { BiSolidDashboard } from "react-icons/bi"
import { BsInbox } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { HiOutlineInboxArrowDown } from "react-icons/hi2"
import { IoSettingsOutline } from "react-icons/io5"

const Sidepanel = ({ setindex, index }) => {
    return (
        <>
            <section className=" w-fit pr-16 overflow-hidden">
                <div className=" w-fit  h-[90vh] bg-white px-10 py-4 border-r border-zinc-400 shadow-lg">
                    <div className="flex flex-col gap-y-32 pt-10 ">
                        <div onClick={
                            () => { setindex(0) }
                        } className={index == 0 ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full" :
                            "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"}>
                            <a className=" text-3xl "><BiSolidDashboard /></a>
                            <label className="text-2xl pt-1  font-mono text-center   ">Dashboard</label>
                        </div>
                        <div onClick={
                            () => { setindex(1) }
                        } className={index == 1 ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full" :
                            "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"}>
                            <a className=" text-3xl "><BsInbox /></a>
                            <label className="text-2xl pt-1  font-mono text-center   ">Inbox</label>
                        </div>
                        <div onClick={
                            () => { setindex(2) }
                        } className={index == 2 ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full" :
                            "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"}>
                            <a className=" text-3xl "><BiUser /></a>
                            <label className="text-2xl pt-1  font-mono text-center   ">Employees</label>
                        </div>
                        <div onClick={
                            () => { setindex(3) }
                        } className={index == 3 ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full" :
                            "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"}>
                            <a className=" text-3xl "><HiOutlineInboxArrowDown /></a>
                            <label className="text-2xl pt-1  font-mono text-center   ">Jobs</label>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )

}
export default Sidepanel