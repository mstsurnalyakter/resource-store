const User = require("../models/users.model");
const mongoose = require('mongoose');
const notExistsWithIdUser = require("./notExistsWithIdUser");

const findUserWithId = async (id) =>{
    try {
        const user = await User.findById(id);
        notExistsWithIdUser(user);
    } catch (error) {
        if (error instanceof mongoose.Error) {
            throw new Error('Invalid user id.')
        }
       throw error;
    }
}

module.exports = findUserWithId;