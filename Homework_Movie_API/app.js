//Homework for monday 14/01/2022
//Movie API
const express = require("express");
const app = express();

app.use(express.json());

const movieArr = [
    {id:1, name: "007"},
    {id:2, name: "Avengers"},
    {id:3, name: "Dune"}
]

//Getmapping
app.get("/", (req,res) => {
    res.send({
        movies: movieArr
    });
});
//Getmapping specific id
app.get("/:id", (req,res) => {
    res.send({
        movies: movieArr[req.params.id-1]
    });
});
//Postmapping
let id = 4;//<-- this is very manual, I know. Would work better with auto_increment
app.post("/", (req, res) => { 
    //POST request only accepts "name"
    movieArr.push({id: id, name : req.body.name})
    id++;
});
//Putmapping
app.put(("/:id") , (req, res) => {
    movieArr[req.params.id-1].name = req.body.name;
});
//Deletemapping
app.delete(("/:id") , (req, res) => {
    movieArr.splice([req.params.id-1], 1);
});

app.listen(8080);