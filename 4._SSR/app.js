const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/frontpage.html");
});

app.get("/cheese", (req, res) => {
    res.sendFile(__dirname+"/public/cheese/cheese.html");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});