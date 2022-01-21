import googleOAuth from "passport-google-oauth20";//google plugin
import passport from "passport";
import {UserModel} from "../database/user";
const GoogleStrategy = googleOAuth.Strategy;
require('dotenv').config();
export default (passport) => {
    passport.use(
        //onject creation of the instance google Strategy
        new GoogleStrategy(
            {
                //configuration
                clientID: process.env.google_client_id,
                clientSecret: process.env.google_client_secret,
                //authorized callback to this URL
                callbackURL: "http://localhost:8080/auth/google/callback"
            },
            async (accessToken, refreshToken, profile, done) => {
                //create a new user object
                const NewUser = {
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profile: profile.photos[0].value
                }
                try {
                    //check if the user exists
                    const checkbyEmail = await UserModel.findOne({email:NewUser.email });
                    if (checkbyEmail) {
                        //generate token
                        const token = checkbyEmail.jwtToken();
                        //return user
                        done(null, {checkbyEmail, token });
                    } else {
                        //create the new user 
                        const user = await UserModel.create(NewUser);
                        const token = user.jwtToken();
                        done(null, { user, token });
                    }
                } catch (error) {
                    done(error, null)
                }
            }
        )
    );
    //configurations
    passport.serializeUser((userData, done) => done(null, { ...userData }));
    passport.deserializeUser((id, done) => done(null, id));
}