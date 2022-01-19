//database Connection 
const mongoose=require('mongoose');


try{
    mongoose.connect("mongodb+srv://riddhishwar:Mayurie@zomato-master.joubs.mongodb.net/Foody?retryWrites=true&w=majority",{
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log("Database Connected...");
}catch(error){
    console.log("Database Not Connected...");
}
const db=mongoose.connection;
module.exports={db};