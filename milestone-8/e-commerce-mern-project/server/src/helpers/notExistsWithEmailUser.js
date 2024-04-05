const createError = require('http-errors');
const notExistsWithEmailUser = async (user) =>{
    if (!user) {
        throw createError(404,`${user} with this email does not exist.Please sign up first.`)
    }
}

module.exports = notExistsWithEmailUser;