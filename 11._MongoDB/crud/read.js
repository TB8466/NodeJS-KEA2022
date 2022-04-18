import db from "../createConnection.js"

const allActors = await db.actors.find().toArray();
console.log(allActors);