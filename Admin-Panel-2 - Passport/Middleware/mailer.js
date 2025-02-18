const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "marviyatrushit0@gmail.com",
        pass: "zgnmqcxscsblhhyk"
    }
});
module.exports.sendOtp = (to,otp)=>{
    let mailoption = {
        from :"marviyatrushit0@gmail.com",
        to: to,
        subject: "OTP for Reset Password",
        text: `Your OTP is ${otp}`
    }
    transport.sendMail(mailoption,(err)=>{
        err ? console.log(err) : console.log("OTP Send Successfully");
    })
}