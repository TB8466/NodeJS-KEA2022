import express from "express"
/* const express = require("express"); */
const app = express();

import _ from "./password.js"

app.use(express.static("public"));

import helmet from "helmet";
app.use(helmet());

import rateLimit from "express-rate-limit";

//Limits the amount of request the page can receive
const baseLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(baseLimiter)

const authLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use("/auth",authLimiter)

app.get("/auth",(req,res)=>{
    res.send({
        message:"You are trying to log in"
    });
});
/* app.get("/computer", (req,res) =>{
    res.sendFile(__dirname+"/public/computer.html")
}) */

app.use(ipLogger);

function ipLogger(req,res,next){
    console.log(req.ip);
    next();
}

function guardHouse(req, res ,next){
    const username = "Bob";
    if(username === "Bob"){
        req.username = "Bob"
        next();
    }
    else{
        res.send({message: "Stop right there criminal scum"})
    }
}

app.get("/frontdoor", guardHouse, (req,res) => {
    res.send({
        doorbell: `You have permission to enter ${req.username}`
    });
});

function greeter(req, res, next){
    console.log("Welcome")
    next();
}

app.get("/room", greeter, (req,res, next) => {
    /* res.send({
        message: "You are in room 1"
    }); */
    console.log("Room 1 but omw to room 2")
    next();
});
app.get("/room", greeter, (req,res) => {
    res.send({
        message: "You are in room 2"
    });
});

app.get("*", greeter, (req,res) => {
    res.send({
        message: "You are in room 2"
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log("Server started on PORT:",PORT);
})