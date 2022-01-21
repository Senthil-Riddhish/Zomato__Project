require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import {db} from "./database/connection";

//Importiing the API's 
import Auth from "./API/Auth";
import Restaurant from "./API/restaurant";
import food from "./API/Food";
import menu from "./API/Menu";
import image from "./API/Image";
googleConfig(passport);
//imporint the configurations
import googleConfig from "./config/google.config";
const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
//zomato.use(passport.session());

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/foods",food);
zomato.use("/menu",menu); 
zomato.use("/image",image);
//Listening to the server
zomato.listen(process.env.port,()=>{
    console.log("Server is connected to the port 8080");
});
