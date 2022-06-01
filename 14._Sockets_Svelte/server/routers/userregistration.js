import { Router } from "express";
const router = Router();

router.get("/api/fetchuser", (req,res) => {
    res.send({data: req.session.username});
});

router.get("/api/logout",(req,res) =>{
    req.session.destroy(() =>{
        res.redirect("/");
    })
});

router.post("/api/registeruser",(req,res) => {
    req.session.username = req.body.username;
    console.log(req.body);
    res.redirect("/");
});



export default router;