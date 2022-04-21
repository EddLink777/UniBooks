const db = require("../db");

const getAllUsersBooks = async (req, res, next) => {
    try { 
        const usersbooks = await db.query(
            "SELECT * FROM usersxbooks JOIN books ON usersxbooks.book = books.id");
      
        res.json(usersbooks.rows)
    } 
    catch (error) {
        next(error);
    }
};

const getUserBooks = async (req, res, next) => {
    try {
        const { id } = req.params;

        const usersbook = await db.query(
            "SELECT * FROM usersxbooks JOIN books ON usersxbooks.book = books.id WHERE users.id = $1", 
            [id]);
        if (usersbook.rows.length === 0) 
        return res.status(404).json({
            message: "Books not found" 
        });
           
       
        res.json(usersbook.rows)
    } 
    catch (error) {
        next(error);
    }
};

const createUserBooks = async (req, res, next) => {
    const {returned, user, book}  = req.body;
     
    try{
        
        const userdb = await db.query("SELECT * FROM users WHERE id = $1",[user]);
        const bookdb = await db.query("SELECT * FROM books WHERE id = $1",[book]);
        if (userdb.rows.length === 0) {
            throw new Error("We need a valid user");
        }
        
        if (bookdb.rows.length === 0) {
            throw new Error("We need a valid book");
        }
    
        const result = await db.query(
            "INSERT INTO usersxbooks (returned, user, book) VALUES ($1, $2, $3) RETURNING *",
            [returned, user, book]);
            
        res.json(result.rows[0]);
    }
    catch (error){
        
        next(error);
    };
};

const deleteUserBooks = async (req, res, next) => {
    try {
        var { id } = req.params;
        
        const user = await db.query("DELETE FROM usersxbooks WHERE id = $1", [id]);
        if (user.rowCount === 0) 
        return res.status(404).json({
            message: "User not found" 
        });
         
       
        res.sendStatus(204);
    } 
    catch (error) {
        next(error);
    }
};

const updateUserBooks = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {returned, user, book}  = req.body;
        
        const result = await db.query(
            "UPDATE usersxbooks SET returned = $1, user = $2, book = $3 WHERE id = $4 RETURNING *", 
            [returned, user, book, id]);
        
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
    getAllUsersBooks,
    getUserBooks, 
    createUserBooks,
    deleteUserBooks,
    updateUserBooks
}