"use client"
import Main from "@/components/dashboard/main";
import addField from "@/create/addField";
import createTest from "@/create/main";
import connectMongoDb from "@/lib/mongoDB";
import getUser from "@/routes/mongo/getUser";
import { useEffect, useState } from "react";
const Dashboard = async () => {
  const [data, setData] = useState("");
  async function test() {
    const res = await fetch("api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
        }),
      });
      const user = await res.json()
    console.log(user[0])
  }
  useEffect(() => {
    test();
  },[]);

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
