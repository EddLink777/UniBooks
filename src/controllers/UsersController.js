const getAllUsers = async (req, res) => {
    res.send("retrieving a single User detail")
};

const getUser = async (req, res) => {
    res.send("retrieving a single User detail");
};

const createUser = async (req, res) => {
    res.send("creating a User");
};

const deleteUser = async (req, res) => {
    res.send("deleting a User");
};

const updateUser = async (req, res) => {
    res.send("updating a User");
};

module.exports = {
    getAllUsers,
    getUser, 
    createUser,
    deleteUser,
    updateUser
}