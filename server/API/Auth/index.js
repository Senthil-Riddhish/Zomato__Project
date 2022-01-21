//Library
import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import passport from "passport";
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
        await UserModel.findByEmailAndPassword({ ...req.body.credentials });
        const create_User = await UserModel.create({ ...req.body.credentials });
        const token = create_User.jwtToken();
        res.json({ token: token, status: 400 });
        /*
        let hashPassword = await bcrypt.hash(password, saltRounds);

        await UserModel.create({ ...req.body.credentials, password: hashPassword }).then((respond) => {
            //creating the jwt token
            var token = jwt.sign({
                data: { fullname, email }
            }, 'Zomato_App', { expiresIn: '1h' });
            res.status(200).json({ token: token });
        });
        */

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

Router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body.credentials;
        const checkByEmail = await UserModel.findOne({ email });
        if (!checkByEmail) { res.status(500).json({ user: "Eial not found" }) }
        bcrypt.compare(password, checkByEmail.password).then(function (result) {
            const token=checkByEmail.jwtToken();
            if (result) { res.status(200).json({ token:token,message: "Successfully loggedin" }) }
        });
    } catch (error) {

    }
})

/**
 * Router  : /google
 * descrip : google route
 * Params  : none
 * Access  : Public
 * Method  : GET
 */

Router.get("/google",passport.authenticate("google",{
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ]
}));

/**
 * Router  : /google/callback
 * descrip : google route
 * Params  : none
 * Access  : Public
 * Method  : GET
 */
Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
    (req,res)=>{
        return res.status(200).json({token:req.session.passport.user.token,status:"success"})
    }
)
export default Router;