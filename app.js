import express from "express";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// JNkOvzbwhle4bfSu
// mongodb+srv://<db_username>:<db_password>@cluster0.ffvd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// hgg 6M1iJfeiSDxEFKID

mongoose.connect(
    "mongodb+srv://hgg:6M1iJfeiSDxEFKID@cluster0.ffvd8.mongodb.net/exx-app?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());

app.use(foodRouter);

app.listen(port, () => {
    console.log("Server is running...");
});
