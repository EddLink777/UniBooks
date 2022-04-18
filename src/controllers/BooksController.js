const db = require("../db");

const getAllBooks = async (req, res, next) => {
    try { 
        const books = await db.query(
            "SELECT * FROM books JOIN genres ON books.genre = genres.id");
      
        res.json(books.rows)
    } 
    catch (error) {
        next(error);
    }
};

const getBook = async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await db.query(
            "SELECT * FROM books JOIN genres ON books.genre = genres.id WHERE books.id = $1", 
            [id]);
        if (book.rows.length === 0) 
        return res.status(404).json({
            message: "Book not found" 
        });
           
       
        res.json(book.rows)
    } 
    catch (error) {
        next(error);
    }
};

const createBook = async (req, res, next) => {
    const {title, author, published_year, genre}  = req.body;
     
    try{
        const genredb = await db.query("SELECT * FROM genres WHERE id = $1",[genre]);
                
        if (genredb.rows.length === 0) {
            throw new Error("We need a valid genre");
        }
    
        const result = await db.query(
            "INSERT INTO books (title, author, published_year, genre) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, author, published_year, genre]);
            
        res.json(result.rows[0]);
    }
    catch (error){
        
        next(error);
    }
};

const deleteBook = async (req, res, next) => {
    try {
        var { id } = req.params;
        
        const book = await db.query("DELETE FROM books WHERE id = $1", [id]);
        if (book.rowCount === 0) 
        return res.status(404).json({
            message: "Book not found" 
        });
         
       
        res.sendStatus(204);
    } 
    catch (error) {
        next(error);
    }
};

const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {title, author, published_year, genre}  = req.body;
        
        const result = await db.query(
            "UPDATE books SET title = $1, author = $2, published_year = $3, genre = $4 WHERE id = $5 RETURNING *", 
            [title, author, published_year, genre, id]);
        
        if (result.rows.length === 0) 
        return res.status(404).json({
            message: "Book not found" 
        });
        
       
        res.json(result.rows[0]);
    } 
    catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBooks,
    getBook, 
    createBook,
    deleteBook,
    updateBook
}