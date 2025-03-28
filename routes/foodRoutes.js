import express from "express";
import foodModel from "../models/food.js";

const app = express.Router();

app.get("/foods", async (_request, response) => {
    const foods = await foodModel.find({});
    try {
        response.status(200).send(foods);  
    } catch (error) {
        response.status(500).send(error);  
    }
});

app.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
    try {
        await food.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/food/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndUpdate(request.params.id, request.body, { new: true });  
        if (!food) {
            return response.status(404).send('Food not found');
        }
   //     await foodModel.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/food/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndDelete(request.params.id);
        if (!food) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

export default app;  