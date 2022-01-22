import express from "express";
const Router=express.Router();
import {reviewModel} from "../../database/allModels";


//getting all the reviews based on the restaurant_id
Router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const reviews=await reviewModel.findOne({restaurant:id});
        if(!reviews){
            res.status(404).json({reviews:"No reviews for this restaurant"});
        }
        res.status(200).json({reviews:reviews});
    }catch(error){
        res.status(500).json({error:error})
    }
});

//route for adding new review for this restaurant id
Router.post('/new',async(req,res)=>{
    try{
        const{reviews}=req.body;
        const rew=await reviewModel.create({...reviews});
        res.status(200).json({reviews:"Successfully added the review"});
    }catch(error){
        res.status(500).json({error:error});
    }
});

Router.delete("/new/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        const del_review=await reviewModel.findByIdAndDelete(id);
        res.status(200).json({reviews:"Successfully deleted the review"});
    }catch(error){
        res.status(500).json({error:error});
    }
})



export default Router;