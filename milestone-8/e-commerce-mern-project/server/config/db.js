const mongoose = require('mongoose');
const { mongodbURL } = require('../src/secret');


const connectDB = async (options={}) =>{
    try {
        mongoose.connect(mongodbURL,options);
        console.log(`Mongodb connect successfully establish.`)
        mongoose.connection.on('error',error=>{
            console.error(`Connection error = ${error}`)
        })
    } catch (error) {
        throw error;
    }
}

module.exports = connectDB;