const { Router } = require("express");
const { getAllBooks, getBook, createBook, deleteBook, updateBook } = require("../controllers/BooksController")
const { getAllGenres, getGenre, createGenre, deleteGenre, updateGenre } = require("../controllers/GenreController")
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/UsersController")

const router = Router();

//Genre routes
router.get("/genre", getAllGenres);

router.get("/genre/10", getGenre);

router.post("/genre", createGenre);

router.delete("/genre", deleteGenre);

router.put("/genre", updateGenre);

//Books routes
router.get("/book", getAllBooks);

router.get("/book/10", getBook);

router.post("/book", createBook);

router.delete("/book", deleteBook);

router.put("/book", updateBook);

//Users routes
router.get("/user", getAllUsers);

router.get("/user/10", getUser);

router.post("/user", createUser);

router.delete("/user", deleteUser);

router.put("/user", updateUser);



module.exports = router;