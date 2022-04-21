const { Pool } = require("pg");
const { database } = require("pg/lib/defaults");
const { _db } = require("./config")



const db = new Pool ({
    user: _db.user,
    password: _db.password,
    host: _db.host,
    port: _db.port,
    database: _db.database
});

module.exports = db;
