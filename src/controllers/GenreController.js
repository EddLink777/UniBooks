const db = require("../db");

const getAllGenres = async (req, res, next) => {
    try { 
        const genres = await db.query("SELECT * FROM genres");
   
        res.json(genres.rows)
    } 
    catch (error) {
        next(error);
    }
};

const getGenre = async (req, res, next) => {
    try {
        const { id } = req.params;

        const genre = await db.query("SELECT * FROM genres WHERE id = $1", [id]);
        if (genre.rows.length === 0) 
        return res.status(404).json({
            message: "Genre not found" 
        });
           
       
        res.json(genre.rows)
    } 
    catch (error) {
        next(error);
    }
};

const createGenre = async (req, res, next) => {
    const {genre}  = req.body;

    try{
        const result = await db.query(
            "INSERT INTO genres (genre) VALUES ($1) RETURNING *",
            [genre]);
            
        res.json(result.rows[0]);
    }
    catch (error){
        
        next(error);
    }
};

const deleteGenre = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await db.query("SELECT * FROM books WHERE genre = $1", [id]);
        if (result.rows.length != 0) {
            throw new Error("Is in use and can't be delete it");
        }
        
        const genre = await db.query("DELETE FROM genres WHERE id = $1", [id]);
        if (genre.rowCount === 0) 
        return res.status(404).json({
            message: "Genre not found" 
        });
       
        res.sendStatus(204);
    } 
    catch (error) {
        next(error);
    }
};

const updateGenre = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { genre} = req.body;
        
        const result = await db.query(
            "UPDATE genres SET genre = $1 WHERE id = $2 RETURNING *", 
            [genre,id]);
        
        if (result.rows.length === 0) 
        return res.status(404).json({
            message: "Genre not found" 
        });
        
       
        res.json(result.rows[0]);
    } 
    catch (error) {
        next(error);
    }
};

module.exports = {
    getAllGenres,
    getGenre, 
    createGenre,
    deleteGenre,
    updateGenre
}