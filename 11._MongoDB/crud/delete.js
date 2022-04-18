import db from "../createConnection.js"


const deleteActor = await db.actors.deleteOne();
const deleteAllActors = await db.actors.deleteMany();

console.log(deleteActor);