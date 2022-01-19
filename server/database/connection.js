//database Connection 
const mongoose=require('mongoose');
require("dotenv").config()

try{
    mongoose.connect(process.env.URL,{
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log("Database Connected...");
}catch(error){
    console.log("Database Not Connected...");
}
const db=mongoose.connection;
module.exports={db};