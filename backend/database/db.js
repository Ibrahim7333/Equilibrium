require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const { db } = require("../config");

function database() {
    let pool = null;

    const connect = async () => {
        if (pool) {
            return pool;
        }

        try {
            pool = new Pool({
                host: db.host,
                port: db.port,
                user: db.user,
                password: db.password,
                database: db.name,
            });

            // Test the connection
            await pool.query("SELECT NOW()");
            console.log("PostgreSQL connected successfully");

            return pool;
        } catch (error) {
            console.error("PostgreSQL connection error:", error);
            throw error;
        }
    };

    const disconnect = async () => {
        if (pool) {
            await pool.end();
            console.log("PostgreSQL disconnected");
        }
    };

    return {
        connect,
        disconnect,
    };
}

module.exports = { database: database() };
