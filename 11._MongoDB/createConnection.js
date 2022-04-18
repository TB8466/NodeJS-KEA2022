import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const dbName = "cinema";

const connection = await MongoClient.connect(url);

const db = connection.db(dbName);

export default{
    actors: db.collection("actors")
}