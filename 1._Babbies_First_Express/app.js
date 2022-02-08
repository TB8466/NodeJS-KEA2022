//require === import

const express = require("express");
const app = express();//Instatiate the method

//Alternate way
//const app = require("express")(); //Instatiate the method immediately

//console.log(app);

//Use the express libary to parse JSON
app.use(express.json());

//Give the app a HTTP endpoint
//app.get("/");

//endpoint with and empty callback-function
//app.get("/", () => {});

//endpoint with callback-function
app.get("/", (req, res) => {
    //now we can give the app a response
    res.send({message : "Welcome to my first route"});
});
//Note that the JS object is converted to JSON format

app.post("/", (req, res) => {
    //This method can be checked in postman
    res.send(req.body);
});


//task create a GET route called about that sends some info about the server
//task implement a POST request handler on the endpoint /opinion based on the client data
//the server sends a response that contains an opinion

//Tasks:
app.get("/about", (req, res) => {
    res.send({portname: "8080"});
});

app.post("/opinion", (req, res) => {
    res.send(req.body);
});

//To make the app into a server, it needs to listen to a port
app.listen(8080);