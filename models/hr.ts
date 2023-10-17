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
        },
        role:{
            type:Number
        },
        roleName:{
            type:String

        },
        employeeData:{
            type:{
            },
            default:{
                employeeCount:7
            }
        },
        jobData:{
            type:{
  
            },
            default:{
                jobsCount:3
            }

        }

    }
)
const hrModel = models.hr || mongoose.model("hr",hrSchema)
export default hrModel