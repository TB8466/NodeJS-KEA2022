import db from "./createMySQLConnection.js"

db.query(`
    CREATE TABLE IF NOT EXISTS movies(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(50)
    )
`)

db.end();