const express = require("express");
const app = express();
const port = 8080;

app.get("/time", (req, res) => {
    res.sendFile(__dirname+"/public/time.html")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});