import mongoose from "mongoose";
import mongoURI from "./credentials";


const connectMongoDb = ()=>{
    mongoose.connect(mongoURI).then(()=>{console.log("connected")}).catch((e)=>{console.log(e)})
}
export default connectMongoDb