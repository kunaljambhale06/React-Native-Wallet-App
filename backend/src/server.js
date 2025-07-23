import express from "express";
import rateLimit from 'express-rate-limit';
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js";

dotenv.config();
const app = express()

if(process.env.NODE_ENV == "production") job.start(); // Start the cron job only in production environment
const PORT = process.env.PORT || 5001;

//Rate limit by express
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 70, // Only 70 requests allowed per minute
    message: "Rate limit exceeded. Please Try After SomeTime!",
});
app.use(limiter); // Apply to all routes
//middleware
app.use(express.json())

//custom middleware
//app.use((req, res, next) => {
//console.log("Hey we hit a req, the method is", req.method);
//  next();
//})

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
})

app.get("/", (req, res) => {
    res.send("Currently backend is on PORT :5001")
});

app.use("/api/transactions",transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Backend running on PORT", PORT);
    });
})

/*<<<<<<< HEAD:src/server.js

=======
>>>>>>> 1ea1ab1 (Restructured project: added mobile frontend and organized backend):backend/src/server.js*/