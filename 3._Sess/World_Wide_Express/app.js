const express = require("express");
const app = express();
const port = 8080;

//__dirname: autocompletes the root path
app.get("/weather", (req, res) => {
    res.sendFile(__dirname+"/public/weather.html")
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})