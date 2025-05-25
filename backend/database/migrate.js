// database/migrate.js
const fs = require("fs");
const path = require("path");
const { database } = require("./db");

(async () => {
    const pool = await database.connect();
    const sql = fs.readFileSync(path.join(__dirname, "init.sql")).toString();

    try {
        await pool.query(sql);
        console.log("Database tables created.");
    } catch (err) {
        console.error("Migration error:", err);
    } finally {
        await database.disconnect();
    }
})();
