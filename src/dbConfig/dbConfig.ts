import mongoose from "mongoose";


export async function connect(){
    try {
         mongoose.connect(process.env.MONGO_URL!)
         const connection=mongoose.connection;
         connection.on('connected',()=>{
            console.log("MongoDb connected sucessfully")
         })
    
         connection.on('error',(err)=>{
            console.log("MongoDB connection error. please make sure mongoDB is running",err)
            process.exit();
         })        
    } catch (error) {
        console.log("Something went wrong ")
        console.log(error)
        
    }
}