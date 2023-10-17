import connectMongoDb from "@/lib/mongoDB"
import hrModel from "@/models/hr"


const getUser = async(email)=>{
    try{
        await connectMongoDb()
        const user = await hrModel.find()

        if(user.length >=1 ){
            return user

        }
        else{
            return "userNotFound"
        }
    }
    catch{
        console.log("getUserError")
        return "sa"

    }

}


export default getUser