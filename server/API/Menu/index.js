import express from "express";
const Router=express.Router();
import { menuModel } from "../../database/allModels";
import { imageModel } from "../../database/allModels";

//Each restaurant may have multiple menus
/**
 * Route : Public 
 * Description  : get all the menus based on the restaurant id
 */
Router.get("/menu/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await menuModel.findById(id);
        if (!menu) {
            res.status(404).json({ error: "No menu is present for this restaurant" })
        }
        res.status(200).json({ menu: menu });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});
//Each restaurant may have multiple menus
/**
 * Route : Public 
 * Description  : get all the images based on the res_id
 */
Router.get("/images/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const menusImages = await imageModel.find(id);
        //TODO if needed provide that no image is present there in the restaurant
        res.status(200).json({ Images:menusImages});
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});

export default Router;