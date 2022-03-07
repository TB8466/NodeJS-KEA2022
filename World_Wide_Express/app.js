const express = require("express");
const app = express();

const animalsUtils = require("./animals/animalsUtils.js");
console.log("app js",animalsUtils.calculateFavAnimals())


//IMPORTANT! : This allows the client to access specific files or files within a certain directory
//Without this line, the client can't access CSS files, JS files, IMG files, etc.
app.use(express.static("public")) //<-- Here it's specified that the client can access files in the directory "public"

const animalrouter = require("./routers/animalrouter.js");
app.use(animalrouter);


app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/frontpage.html");
});

//__dirname: autocompletes the root path
app.get("/weather", (req, res) => {
    res.sendFile(__dirname+"/public/weather.html");
});


const PORT = process.env.PORT || 6000; //process.env.port looks at the dependencies

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

console.log(process.env.port)