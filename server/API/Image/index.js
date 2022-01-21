import express from "express";
const Router = express.Router();
import cloudinary from "../../config/cloudinary.config";
import upload from "../../utils/multer";
import {imageModel} from "../../database/allModels";
Router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    let data ={
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    }
    console.log(data);
    // Create new user
    let user = await imageModel.create(data);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

export default Router;