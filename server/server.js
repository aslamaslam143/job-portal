import './config/instrument.js'
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';


// initialize express app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());


await connectDB()

// route
app.get('/', (req, res) => {
    res.send("API Working");
});
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)


// port setup
const PORT = process.env.PORT || 3000;
Sentry.setupExpressErrorHandler(app);


// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});