import mongoose, { Schema, model, models } from "mongoose";


const hrSchema = new Schema(
    {
        name:{
            type:String,
            min:3,
            required:true
        },
        email:{
            type:String,
            immutable:true,
            min:7
        }
    }
)
const hrModel = models.hr || mongoose.model("hr",hrSchema)
export default hrModel