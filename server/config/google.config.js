import googleOAuth from "passport-google-oauth20";
import passport from "passport";
import {userModel} from "../database/user";
import GoogleStrategy from googleOAuth.Strategy;
import { profile } from "console";
require('dotenv').config();
export default (passport)=>{
    passport.use(
        new GoogleStrategy(
            {
                //configuration
                client_id:process.env.google_client_id,
                client_secret:process.env.google_client_secret,
                //authorized callback to this URL
                callbackURL="http://localhost:8080/auth/google/callback"
            },
                async(accessToken,refreshToken,profile,done)=>{
                    //create a new user object
                    const NewUser={
                        fullname:profile.displayName,
                        email:profile.emails[0].value,
                        profile:profile.photos[0].value
                    }
            }
        )
    )
}