import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
const HomeLayout=({props,children})=>{
    return(
        <div>
            <Navbar/>
            <FoodTab/>
            <div className="container mx-aut px-4 lg:px-20">{children}</div>
        </div>
    )
}
export default HomeLayout;