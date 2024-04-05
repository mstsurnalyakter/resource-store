const User = require("../models/users.model");
const mongoose = require('mongoose');
const notExistsWithIdUser = require("./notExistsWithIdUser");
const notExistsWithEmailUser = require("./notExistsWithEmailUser");

const findUserWithEmail = async (email) =>{
    try {
        const user = await User.findById(email);
        notExistsWithEmailUser(user);
    } catch (error) {
       throw error;
    }
}

module.exports = findUserWithEmail;