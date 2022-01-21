//libraries
import express from "express";
import { restaurantModel } from "../../database/allModels";
const Router = express.Router();
/**
 * Route : Public 
 * Description  : Getting all the restaurant data based on the city name
 */
Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        const restaurant_city = await restaurantModel.find({ city });
        res.json({ restaurant: restaurant_city });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
});
/**
 * Route : public
 * description : Get the restaurant based on the id
 */

Router.get("/restaurant/:id", async (req, res) => {
    const { _id } = req.headers;
    try {
        const restaur_detail = await restaurantModel.findById(_id);
        res.json({ restaurants: restaur_detail });
    } catch (error) {
        res.status(500).json("Unable to provide the service");
    }
})

/**
 * Route : Public
 * Description :Get the restaurant based on the search
 */
Router.get("/search/", async (req, res) => {
    try {
        console.log("inside");
        const { restaurant } = req.query;
        const search_restaurant =await restaurantModel.find( {name:{ $regex:restaurant, $options: 'i'} } )        ;
        if (search_restaurant.length === 0) { res.status(404).json({ message: "No restaurant found" }) }
        else { res.status(200).json({ message: search_restaurant }) }
    } catch (error) {
        res.status(500).json(error);
    }
})

//create_restaurant
Router.post("/create_restaurant", async (req, res) => {
    try {
        const restaurant = await restaurantModel.create({ ...req.body.credentials });
        res.json({ restaurant: restaurant });
    } catch (error) {
        res.status(500).json(error);
    }
});

export default Router;