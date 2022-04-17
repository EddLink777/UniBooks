const getAllBooks = async (req, res) => {
    res.send("retrieving a single book detail")
};

const getBook = async (req, res) => {
    res.send("retrieving a single book detail");
};

const createBook = async (req, res) => {
    res.send("creating a book");
};

const deleteBook = async (req, res) => {
    res.send("deleting a book");
};

const updateBook = async (req, res) => {
    res.send("updating a book");
};

module.exports = {
    getAllBooks,
    getBook, 
    createBook,
    deleteBook,
    updateBook
}