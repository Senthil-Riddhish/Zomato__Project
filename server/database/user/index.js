import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

const saltRounds = 5;
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

//Methods
UserSchema.methods.jwtToken =function(){
  return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
}

//Statics
UserSchema.statics.findByEmailAndPassword = async({ email,phoneNumber })=>{
  console.log("inside findByEmailAndPassword");
  const checkbyEmail =await UserModel.findOne({ email });
  const checkbyPhone =await UserModel.findOne({ phoneNumber });
  if (checkbyEmail || checkbyPhone) {
    throw new Error("User already registered !!");
  }
  console.log("no problem");
  return false;
}

UserSchema.pre("save",async function(next){
  console.log("inside save");
  //if(!user.isModified("password"));
  try{
    let hashPassword = await bcrypt.hash(this.password, saltRounds);
    this.password=hashPassword;
    console.log("no problem");
    return next();
  }catch(error){
    return next(error);
  }
});



export const UserModel = mongoose.model("Users", UserSchema);

  //Statics and Methods
/**
 * Methods: needs to be instanciated to a variable and then used || able to access the data in the process ||
 * able to access the data in the instance inbetwen the process
 */

  //Statics: need not be instanciated