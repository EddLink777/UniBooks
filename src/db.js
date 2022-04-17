const { Pool } = require("pg");
const { database } = require("pg/lib/defaults");

const db = new Pool ({
    user: "postgres",
    password: "postgrespass",
    host: "localhost",
    port: 5432,
    database: "unibook"
});

module.exports = db;
