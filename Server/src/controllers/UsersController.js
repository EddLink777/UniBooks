const db = require("../db");

const getAllUsers = async (req, res, next) => {
    try { 
        const users = await db.query(
            "SELECT * FROM users JOIN roles ON users.role = roles.id");
      
        res.json(users.rows)
    } 
    catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await db.query(
            "SELECT * FROM users JOIN roles ON users.role = roles.id WHERE users.id = $1", 
            [id]);
        if (user.rows.length === 0) 
        return res.status(404).json({
            message: "Book not found" 
        });
           
       
        res.json(user.rows)
    } 
    catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    const {first_name, last_name, email, role}  = req.body;
     
    try{
        
        const roledb = await db.query("SELECT * FROM roles WHERE id = $1",[role]);
        if (roledb.rows.length === 0) {
            throw new Error("We need a valid role");
        }
    
        const result = await db.query(
            "INSERT INTO users (first_name, last_name, email, role) VALUES ($1, $2, $3, $4) RETURNING *",
            [first_name, last_name, email, role]);
            
        res.json(result.rows[0]);
    }
    catch (error){
        
        next(error);
    };
};

const deleteUser = async (req, res, next) => {
    try {
        var { id } = req.params;
        
        const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
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

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {first_name, last_name, email, role}  = req.body;
        
        const result = await db.query(
            "UPDATE books SET first_name = $1, last_name = $2, email = $3, role = $4 WHERE id = $5 RETURNING *", 
            [first_name, last_name, email, role, id]);
        
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
    getAllUsers,
    getUser, 
    createUser,
    deleteUser,
    updateUser
}