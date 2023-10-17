import connectMongoDb from "@/lib/mongoDB";
import hrModel from "@/models/hr";
import mongoose from "mongoose";

const addField = async (email,key,value) => {

    await connectMongoDb()
    const a = await hrModel.updateOne({ "email": email },
    [ {$set : {key:value} } ])
    console.log(a)
    const hr = await hrModel.find({ "email": email })
}
export default addField