//Library
import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
//Models
import { UserModel } from "../../database/allModels";

//create the routers
const Router = express.Router();
const saltRounds = 5;
/**
 * Router  --signup
 * descrip : Register new users
 * Params  : none
 * Access  : Public
 * Method  : POST
 */
console.log("inside");
Router.post("/signup", async (req, res) => {
    try {
        console.log("inside");
        const { fullname, email, password, address, phoneNumber } = req.body.credentials;
        console.log({ fullname, email, password, address, phoneNumber });
        const checkbyEmail = await UserModel.findOne({ email });
        const checkbyPhone = await UserModel.findOne({ phoneNumber });
        console.log(checkbyEmail,checkbyPhone);
        if (checkbyEmail || checkbyPhone) {
            return res.json({ user: "User already registered!" });
        }

        //hashing the password
        let hashPassword = await bcrypt.hash(password, saltRounds);

        await UserModel.create({ ...req.body.credentials, password: hashPassword }).then((respond) => {
            //creating the jwt token
            var token = jwt.sign({
                data: { fullname, email }
            }, 'Zomato_App', { expiresIn: '1h' });
            res.status(200).json({ token: token });
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;