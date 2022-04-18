const getAllUsers = async (req, res, next) => {
    res.send("retrieving a single User detail")
};

const getUser = async (req, res, next) => {
    res.send("retrieving a single User detail");
};

const createUser = async (req, res, next) => {
    const {first_name, last_name, email, role, book}  = req.body;
     
    try{
        
        const roledb = await db.query("SELECT * FROM roles WHERE id = $1",[role]);
        if (roledb.rows.length === 0) {
            throw new Error("We need a valid role");
        }
    
        const result = await db.query(
            "INSERT INTO users (first_name, last_name, email, role, book) VALUES ($1, $2, $3, $4, $5 ) RETURNING *",
            [title, author, published_year, genre]);
            
        res.json(result.rows[0]);
    }
    catch (error){
        
        next(error);
    };
};

const deleteUser = async (req, res, next) => {
    res.send("deleting a User");
};

const updateUser = async (req, res, next) => {
    res.send("updating a User");
};

module.exports = {
    getAllUsers,
    getUser, 
    createUser,
    deleteUser,
    updateUser
}