const data = require("../data");
const User = require("../models/users.model");
const { successResponse } = require("./response.controller");

const seedUser = async (req,res,next) =>{
    try {
        /** delete exist users */
        await User.deleteMany({});
        /** insert new users */
        const users = await User.insertMany(data.users);
        return successResponse(res,{
            statusCode:200,
            message:'Seed user were return successfully.',
            payload:{users}
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = {seedUser}