const express = require('express');
const { database } = require("./database/db"); 
const { port } = require('./config.js');
const app = express();

app.listen(port, async () => {
    console.log("Starting server...");
    console.log(`Server running on port ${port}`);
    await database.connect();
    console.log("Database connected");
});
