import express from "express";
import passport from "passport";

import {orderModel} from "../../database/order";
import ValidateUser from "../../config/validateUser";
//passport.authenticate("jwt") -> makeing the route private and authorised

const Router=express.Router();

Router.get("/:_id",passport.authenticate("jwt"),async(req,res)=>{
    try{
        console.log("inside");
        await ValidateUser(req, res);
        console.log("Back");
        const{_id}=req.params;
        const getorders=await orderModel.findOne({user:_id});
        //console.log(!getorders);
        if(!getorders){
            return res.status(400).json({ error: "User not found" });
        }else{
            return res.status(200).json({ orders: getorders });;
        }
    }catch(error){
        return res.status(500).json({ errors: error.message});
    }
});

Router.post("/add_order/:id",async(req,res)=>{
    const{id}=req.params;
    const{orderDetails}=req.body;
    try{
    const addNeworder=await orderModel.findOneAndUpdate({
        user:id
    },{
        $push:{orderDetails:orderDetails}
    },{new:true});

    }catch(error){
        res.status(500).json({error:error})
    }
});


export default Router;