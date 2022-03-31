import { db } from "./createConnection.js"

const deleteMode = true;

if(deleteMode){
db.exec("DROP TABLE IF EXISTS movies;");
}

db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(50)
)`);

//Seeding
db.run(`INSERT INTO movies (title) VALUES ('Black Hawk Down')`);
db.run(`INSERT INTO movies (title) VALUES ('Black Hawk Up')`);
db.run(`INSERT INTO movies (title) VALUES ('Black Hawk Ahead')`);