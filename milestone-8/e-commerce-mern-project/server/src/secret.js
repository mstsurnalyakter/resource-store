require('dotenv').config();

const port = process.env.PORT || 3000;
const mongodbURL = process.env.MONGODB_ALTAS_URL || "mongodb://localhost:27017/ecommerceDB";
const defaultImagePath = process.env.DEFAULT_IMAGE_PATH || 'public/images/users/default.png'
const jwtActivateKey =
  process.env.JWT_ACTIVATE_KEY ||
  "JWT_ACTIVATE_KEYJWT_ACTIVATE_KEYJWT_ACTIVATE_KEYJWT_ACTIVATE_KEY";

const cliendURL = process.env.CLIEND_URL ||'http://127.0.0.1'
const smtpUserName = process.env.SMTPUSERNAME ||'djiodddddddUDYJDJDOKDJ';
const smtpUserPassword = process.env.SMTPUSERPASSWORD ||'hdjkdjhdiuu*&^%$#JHHHHHHHHHHHHHHHHHHHD';
module.exports = {
    port,
    mongodbURL,
    defaultImagePath,
    jwtActivateKey,
    cliendURL,
    smtpUserName,
    smtpUserPassword
}