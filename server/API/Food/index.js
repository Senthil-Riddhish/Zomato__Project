import express from "express";
import { foodModel } from "../../database/food";
const Router = express.Router();

/**
 * Route : Public 
 * Description  : getting all the foods based on the restaurant id
 */
Router.get("/getfoods_restaurant/:id", async (req, res) => {
    try {
        const { id } = req.body;
        const foods = await foodModel.find({ restaurant: id });
        res.status(200).json({ foods: foods });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});

/**
 * Route : Public 
 * Description  : Getting all the foods based on the category
 */
Router.get("/category/:category", async (req, res) => {
    try {
        const { category } = req.headers;
        const foods = await foodModel.find({ category: category });
        res.status(200).json({ foods: foods });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});

/**
 * Route : Public 
 * Description  : getting the specific food based on the id
 */
Router.get("/:id", async (req, res) => {
    try {
        const { id } = req.headers;
        const foods = await foodModel.findById(id);
        res.status(200).json({ foods: foods });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});
/**
 * Route : Public 
 * Description  : create the food
 */
Router.post("/create_foods", async (req, res) => {
    try {
        const foods = await foodModel.create(req.body.credentials);
        res.status(200).json({ food: foods });
    } catch (error) {
        res.status(500).json(error);
    }
});

export default Router;