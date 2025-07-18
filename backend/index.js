//import express from "express";
//import connectDB from "./lib/connectDB.js";
//import userRouter from "./routes/user.route.js";
//import postRouter from "./routes/post.route.js";
//import commentRouter from "./routes/comment.route.js";
//import webhookRouter from "./routes/webhook.route.js";
//import { GoogleGenerativeAI } from '@google/generative-ai';
//import { clerkMiddleware, requireAuth } from "@clerk/express";
//import cors from "cors";
//
//const app = express();
//
//app.use(cors(process.env.CLIENT_URL));
//app.use(clerkMiddleware());
//app.use("/webhooks", webhookRouter);
//app.use(express.json());
//
//
//
//app.use(function (req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content-Type, Accept"
//  );
//  next();
//});
//
//// app.get("/test",(req,res)=>{
////   res.status(200).send("it works!")
//// })
//
//// app.get("/auth-state", (req, res) => {
////   const authState = req.auth;
////   res.json(authState);
//// });
//
//// app.get("/protect", (req, res) => {
////   const {userId} = req.auth;
////   if(!userId){
////     return res.status(401).json("not authenticated")
////   }
////   res.status(200).json("content")
//// });
//
//// app.get("/protect2", requireAuth(), (req, res) => {
////   res.status(200).json("content")
//// });
//
//app.use("/users", userRouter);
//app.use("/posts", postRouter);
//app.use("/comments", commentRouter);
//
//app.use((error, req, res, next) => {
//  res.status(error.status || 500);
//
//  res.json({
//    message: error.message || "Something went wrong!",
//    status: error.status,
//    stack: error.stack,
//  });
//});
//
///************************************************ */
//app.listen(3000, () => {
//  connectDB();
//  console.log("Server is running!");
//});
//

import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const _dirname = path.resolve();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));
app.use(clerkMiddleware());
app.use(express.json());

// Routes
app.use("/webhooks", webhookRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

// Serve frontend build if exists
const distPath = path.join(_dirname, "frontend", "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
