import connectMongoDb from "@/lib/mongoDB"
import hrModel from "@/models/hr"
import { NextResponse } from "next/server"

export async function POST(req){
    await connectMongoDb()
    const user = await hrModel.find()
    return NextResponse.json(user)
}