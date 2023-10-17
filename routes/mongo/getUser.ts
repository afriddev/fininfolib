import connectMongoDb from "@/lib/mongoDB"
import hrModel from "@/models/hr"


const getUser = async(email)=>{
    try{
        connectMongoDb()
        const user =await hrModel.find({"email":email})
        if(user.length >=1 ){
            return user

        }
        else{
            return "userNotFound"
        }
    }
    catch{

    }

}


export default getUser