const {Schema,model} = require('mongoose');
const bctypt = require('bcrypt');
const { defaultImagePath } = require('../secret');


const userSchema = new Schema({
    name:{
        type:String,
        require:[true,'Name is required. Please enter your fullname.'],
        trim:true,
        lowercase:true,
        minlength:[3,'The minimum length of user name should be at least 3 characters longs.'],
        maxlength:[30,'The maximum length of user name should be at least 30 character long.']
    },
    email:{
        type:String,
        require:[true,'Email is required. Please enter your email.'],
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator: v =>,
            message:'Please enter a valid email'
        }
    },
    password:{
        type:String,
        trim:true,
        require:[true,'Password is require.Please enter a password.'],
        validate:{
            validator:v =>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*7&])[A-Za-z\d@$!%*7&]*$/,
            message:' "Password should contain at least one uppercase letter,one lowercase letter,one number and one special character."'
        },
        set:v=> bctypt.hashSync(v,bctypt.genSaltSync(10))
    },
    phone:{
        type:String,
        require:[true,'Phone is require. Please enter a phone.'],
        trim:true,
    },
    address:{
        type:String,
        trim:true,
        require:[true,'Address is require. Please enter your address.']
    },
    image:{
        type:Buffer,
        constentType:String,
        require:[true,'Image is require. Please enter a image.'],

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

const User = model('users',userSchema);

module.exports = User;