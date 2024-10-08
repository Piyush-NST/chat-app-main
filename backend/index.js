// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./api/config/database.js";
import userRoute from "./api/routes/userRoute.js";
import messageRoute from "./api/routes/messageRoute.js";
import cookieParser from "cookie-parser";
// import cors from "cors";
import { app,server } from "./api/socket/socket.js";
dotenv.config({});

 
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
// const corsOption={
//     origin:'https://chat-app-nq0.pages.dev',
//     credentials:true
// };
// app.use(cors(corsOption)); 


// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);
 

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

