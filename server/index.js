require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

import {db} from "./database/connection";
//Importiing the API's 
import Auth from "./API/Auth";

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());

//Application Routes
zomato.use("/auth", Auth);

//Listening to the server
zomato.listen(process.env.port,()=>{
    console.log("Server is connected to the port 8080");
});
