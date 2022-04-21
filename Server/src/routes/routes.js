const { Router } = require("express");
const { getAllBooks, getBook, createBook, deleteBook, updateBook } = require("../controllers/BooksController")
const { getAllGenres, getGenre, createGenre, deleteGenre, updateGenre } = require("../controllers/GenreController")
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/UsersController")
const { getAllUsersBooks, getUserBooks, createUserBooks, deleteUserBooks, updateUserBooks } = require("../controllers/UsersxBooksController")

const router = Router();

//Genre routes
router.get("/genre", getAllGenres);

router.get("/genre/:id", getGenre);

router.post("/genre", createGenre);

router.delete("/genre/:id", deleteGenre);

router.put("/genre/:id", updateGenre);

//Books routes
router.get("/book", getAllBooks);

router.get("/book/:id", getBook);

router.post("/book", createBook);

router.delete("/book/:id", deleteBook);

router.put("/book/:id", updateBook);

//Users routes
router.get("/user", getAllUsers);

router.get("/user/:id", getUser);

router.post("/user", createUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);

//UsersxBooks routes
router.get("/userbook", getAllUsersBooks);

router.get("/userbook/:id", getUserBooks);

router.post("/userbook", createUserBooks);

router.delete("/userbook/:id", deleteUserBooks);

router.put("/userbook/:id", updateUserBooks);



module.exports = router;