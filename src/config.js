const {config} = require("dotenv");

config();

module.exports = {
    _db:{
        user: process.env.db_user,
        password: process.env.db_pass,
        host: process.env.db_host,
        port: process.env.db_port,
        database: process.env.db_database        

    }
}