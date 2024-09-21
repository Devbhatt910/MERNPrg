
const mongoose=require('mongoose');

const dbconnection=async () =>{
    const connection=await mongoose.connect("mongodb+srv://vishwa:4104@cluster0.iszyr.mongodb.net/")
    console.log("Db Connected")
    return connection
}
module.exports=dbconnection;