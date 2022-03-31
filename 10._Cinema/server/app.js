import express from "express"
const app = express();


app.use(express.json());
/* import cors from "cors"
app.use(cors()); */

app.use(express.static("public"))

import movies from "./routers/movies.js";
app.use(movies)

import path from "path"
app.use(express.static(path.resolve('../client/public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port:",PORT);
});