const fetch = require("node-fetch")

const router = require("express").Router();



router.get("/proxy", async(req,res) => {
    const response = await fetch('https://google.com/');
    const body = await response.text();

    res.send(body);
});

module.exports = router;