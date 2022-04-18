import db from "../createConnection.js"

const createActor = await db.actors.insertOne({name: "Bob", wife:{age:88}})
console.log(createActor);