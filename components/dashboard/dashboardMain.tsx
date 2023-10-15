
import { GrNotification } from 'react-icons/gr'
const DashboardMain = () => {

    return (
        <>
            <main className="w-full h-[90vh] ">
                <section>
                    <div>
                        <div className="p-6 flex w-full justify-between items-center ">
                            <div>
                                <label className="text-3xl text-zinc-800 font-bold font-poppins">DashBoard</label>
                            </div>
                            <div className='flex items-center justify-center gap-x-8'>
                                <div>
                                    <a>
                                        <GrNotification />
                                    </a>
                                </div>
                                <div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h3>Shaik Afrid</h3>
                                        <h3>Lead HR</h3>
                                    </div>
                                </div>
                                <div>
                                        <div className='h-14 w-14 rounded-full bg-red'></div>
                                    </div>
                            </div>

                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}


export default DashboardMain