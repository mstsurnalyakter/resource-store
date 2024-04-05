const createError = require('http-errors')
const findUserWithId = require("../helpers/findUserWithId");
const notExistsWithIdUser = require("../helpers/notExistsWithIdUser");
const User = require("../models/users.model")
const { successResponse } = require("./response.controller");
const notExistsWithEmailUser = require('../helpers/notExistsWithEmailUser');
const findUserWithEmail = require('../helpers/findUserWithEmail');
const createJSONWebToken = require('../helpers/jsonwebtoken');
const { jwtActivateKey, cliendURL } = require('../secret');

const handleGetUsers = async (req,res,next) =>{
    try {

        const search = req.query.search || '';
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 1;

        const searchRegExp = new RegExp('.*' + search + '.*','i');
        const filter = {
            isAdmin:{$ne:true},
            $or:[
                {name:{$regex:searchRegExp}},
                {email:{$regex:searchRegExp}},
                {phone:{$regex:searchRegExp}}
            ]
        }

        const user = await User.find(filter).skip((page - 1)*limit).limit(limit).select('-password');
        const count = await User.find(filter).countDocuments();

        return successResponse(res,{
            statusCode:200,
            message:'All users returned successfully.',
            payload:{
                user,
                pagination:{
                    totalPage:Math.ceil(count/limit),
                    currentPage:page,
                    previoustPage:page - 1 > 0 ? page -1:null,
                    nextPage: page + 1 >= Math.ceil(count/limit) ? page + 1:null,
                    totalUser:count
                }
            }
        })
    } catch (error) {
        return next(error)
    }
}


const handleGetUser = async (req,res,next) =>{
    try {
        const {id} = req.params;
        const user = await findUserWithId(id);
        notExistsWithIdUser(user);

        return successResponse(res,{
            statusCode:200,
            message:'User was return successfully.',
            payload:{user}
        })
    } catch (error) {
        return next(error)
    }
}


const handleDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findUserWithId(id);
    notExistsWithIdUser(user);

    await User.deleteOne({_id:id,isAdmin:false});

    return successResponse(res, {
      statusCode: 200,
      message: "User was delete successfully.",
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * take data from request body
 * image
 * isExist(email)
 * token
 * email prepare
 * eamil send with nodemailer
 */
const handleUserRegistration = async (req, res, next) => {
  try {

    const {
        name,
        email,
        password,
        phone,
        address
    } = req.body;

    const image = req.file;
    if (!image) {
        throw createError(404,'File not found')
    }

    if (image) {
        if (image.size > 2 * 1024 * 1024) {
            throw createError(400,'File too large.It must be less than 2 MB.')
        }
    }

    const imageBufferString = image.buffer.toString('base64');
    const userExist = await User.findOne({email});
    if (userExist) {
        throw createError(409,'User with this email alreay exist. Please sign in.');
    }

    // create activate token
    const activateToken = createJSONWebToken({
      name,
      email,
      password,
      phone,
      address,
      image:imageBufferString
    },
        jwtActivateKey,'10m'
    );

    // email prepare
    const emailData = {
        email,
        subject:`Activate Account Email.`,
        html:`
            <h1>Hello ${email}</h1>
            <p>Please click here to <a href='${cliendURL}/api/users/activate/${activateToken}' target='_blank'>activate your account.</a> </p>
        `
    }

    //email send with nodemailer
    

    return successResponse(res, {
      statusCode: 200,
      message: "User was delete successfully.",
    });
  } catch (error) {
    return next(error);
  }
};


module.exports = {
  handleGetUsers,
  handleGetUser,
  handleDeleteUser,
  handleUserRegistration,
};