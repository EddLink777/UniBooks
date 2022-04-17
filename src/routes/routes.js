const { Router } = require("express");

const router = Router();

router.get("/book", (req, res) => {
    res.send("retrieving a book list");
});

router.get("/book/10", (req, res) => {
    res.send("retrieving a single book detail");
});

router.post("/book", (req, res) => {
    res.send("creating a book");
});

router.delete("/book", (req, res) => {
    res.send("deleting a book");
});

router.put("/book", (req, res) => {
    res.send("updating a book");
});



module.exports = router;