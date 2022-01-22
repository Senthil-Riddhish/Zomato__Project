import exp from "constants";
import express from "express";
import { read } from "fs";
const Router=express.Router();
import {orderModel} from "../../database/order";

Router.get("/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        const getorders=await orderModel.findOne({user:id});
        if(!getorders){
            return res.status(404).json({message:"No order found"});
        }
        return res.status(200).json({order:getorders});
    }catch(error){
        res.status(500).json({error:error})
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