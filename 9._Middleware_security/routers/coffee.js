import { Router } from "express";
//const router = require("express").Router()
const router = Router();


router.get("/fillcoffee",(req,res) => { 
     req.session.coffeeAmount = 100;
     res.send({});
 });

router.get("/drinkCoffee",(req,res)=>{
    req.session.coffeeAmount -= 40;
    res.send({message: `Slurp! There is this much coffee left: ${req.session.coffeeAmount}`});
});

router.get("/checkCoffee",(req,res)=>{
    res.send({message:""});
});

export default router;