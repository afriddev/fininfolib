import connectMongoDb from "@/lib/mongoDB";
import hrModel from "@/models/hr";

async function createTest(hrInfo){
    await connectMongoDb()
    try{
        const hr = await hrModel.create(hrInfo)
        console.log(hr)
    }
    catch(e){
        console.log(e)
    }


}
export default createTest