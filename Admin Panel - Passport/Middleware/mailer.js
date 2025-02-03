const nodemailer  = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'marviyatrushit0@gmail.com',
        pass:"fpmuidhmwieugsjf",
    }
});
module.exports.sendOtp = (to,otp)=>{
    let mailoptions = {
        from:'marviyatrushit0@gmail.com',
        to:to,
        subject:'Your Reset Password OTP',
        text:`Your OTP is ${otp}`
    }
    transport.sendMail(mailoptions,(err)=>{
        err ? console.log(err):console.log("OTP Send Succcessfully");  
    })
}