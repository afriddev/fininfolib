"use client"
import Main from "@/components/dashboard/main";
import addField from "@/create/addField";
import createTest from "@/create/main";
import connectMongoDb from "@/lib/mongoDB";
import getUser from "@/routes/mongo/getUser";
import { useState } from "react";
const Dashboard =  () => {
    const [data,setData] = useState("")
   async function getuser(){
    const user = await getUser("afridayan01@gmail.com")
    console.log(user)
    setData(user[0])
    

   }
   getuser()


    return (
        <>
            <main className=" w-full h-[90vh] bg-white">
                <section>
                    <Main userData={data} />
                </section>
            </main>
        </>
    )
}
export default Dashboard