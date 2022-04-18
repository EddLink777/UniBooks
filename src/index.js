const express = require("express");
const res = require("express/lib/response");
const morgan = require("morgan");

const routes = require("./routes/routes")

const app = express();

app.use(morgan("dev")) 
app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

app.listen(4000)
console.log("Server on Port 4000")
