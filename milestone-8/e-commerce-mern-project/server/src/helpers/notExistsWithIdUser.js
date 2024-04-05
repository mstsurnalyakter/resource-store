const createError = require('http-errors');
const notExistsWithIdUser = async (user) =>{
    if (!user) {
        throw createError(404,`${user} with this id does not exist. Please sign up first.`)
    }
}

module.exports = notExistsWithIdUser;