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
import reviews from "./API/reviews";
import user from "./API/User";
import order from "./API/Orders";
googleConfig(passport);
//imporint the configurations
import googleConfig from "./config/google.config";
//importing private configurations 
import privateRouteConfig from "./config/router.confing";
privateRouteConfig(passport);
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
zomato.use("/image",image);4
zomato.use("./reviews",reviews);
zomato.use("./user",user);
zomato.use("/order",order);
//Listening to the server
zomato.listen(process.env.port,()=>{
    console.log("Server is connected to the port 8080");
});
