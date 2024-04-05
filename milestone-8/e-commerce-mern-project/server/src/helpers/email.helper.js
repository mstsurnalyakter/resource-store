const nodemailer = require('nodemailer');
const { smtpUserName, smtpUserPassword } = require('../secret');

const transporter = nodemailer.createTransporter({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:smtpUserName,
        pass:smtpUserPassword
    }
})

const emailWithNodemailer = async (emailData) =>{
    try {
        const {email,subject,html} = emailData;
        const mailOptions = {
            from:smtpUserName,
            to:email,
            subject,
            html
        }
        await transporter.seedMail(mailOptions);
    } catch (error) {
        throw error;
    }
}

module.exports = {emailWithNodemailer}