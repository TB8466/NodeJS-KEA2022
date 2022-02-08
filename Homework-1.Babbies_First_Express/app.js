//Homework for monday 14/01/2022
//Movie API's
const express = require("express");
const app = express();

app.use(express.json());

const movieArr = [
    {id:1, name: "007"},
    {id:2, name: "Avengers"},
    {id:3, name: "Dune"}
]

app.get("/", (req,res) => {
    res.send({
        movies: movieArr
    });
});

app.get("/:id", (req,res) => {
    res.send({
        movies: movieArr[req.params.id-1]
    });
});
let id = 4;
app.post("/", (req, res) => { 
    movieArr.push({id: id, name : req.body.name})
    id++;
});

app.put(("/:id") , (req, res) => {
    movieArr[req.params.id-1].name = req.body.name;
});

app.delete(("/:id") , (req, res) => {
    movieArr.splice([req.params.id-1], 1);
});

app.listen(8080);