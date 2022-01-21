import cloudinary from "cloudinary";
cloudinary.v2;
require("dotenv").config();
//configurations 
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.API_Key,
    api_secret:process.env.API_Secret
});

module.exports=cloudinary;