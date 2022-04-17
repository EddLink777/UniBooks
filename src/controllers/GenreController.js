const getAllGenres = async (req, res) => {
    res.send("retrieving a single Genre detail")
};

const getGenre = async (req, res) => {
    res.send("retrieving a single Genre detail");
};

const createGenre = async (req, res) => {
    res.send("creating a Genre");
};

const deleteGenre = async (req, res) => {
    res.send("deleting a Genre");
};

const updateGenre = async (req, res) => {
    res.send("updating a Genre");
};

module.exports = {
    getAllGenres,
    getGenre, 
    createGenre,
    deleteGenre,
    updateGenre
}