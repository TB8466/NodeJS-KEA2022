const express = require("express");
const app = express();
const port = 8080;

//IMPORTANT! : This allows the client to access specific files or files within a certain directory
//Without this line, the client can't access CSS files, JS files, IMG files, etc.
app.use(express.static("public")) //<-- Here it's specified that the client can access files in the directory "public"

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/frontpage.html");
});

//__dirname: autocompletes the root path
app.get("/weather", (req, res) => {
    res.sendFile(__dirname+"/public/weather.html");
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});