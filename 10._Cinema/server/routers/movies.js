import { Router } from "express";
const router = Router();
import{db} from "../database/createConnection.js"

router.get("/api/movies", async (req,res) => {
    const movies = await db.all(`SELECT * FROM movies;`);
    console.log(movies);
    res.send({data: movies})
})


router.post("/api/movies", async (req,res) => {
   // db.run(`INSERT INTO (${req.body}) VALUES (${req.body})`)
    const { title } = req.body;
    const { changes}  = await db.run(`INSERT INTO movies (title) VALUES (?)`,[title]);
    res.send({rowsAffected: changes})
});

export default router;