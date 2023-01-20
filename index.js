import express from "express";
import mongoose from "mongoose";
import authRouter from "./authRouter.js"


const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);


(() => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB)
        app.listen(PORT || 3001, () => {
            console.log("Server has been connected in " + HOST + PORT)
        })
    } catch (err) {
        console.log(err);
    }
})();