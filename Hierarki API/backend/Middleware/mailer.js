const mailer = require("nodemailer");
const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "marviyatrushit0@gmail.com",
    pass: "kcjxzkqsapxrbihl",
  },
});

module.sendOtp = async (to, otp) => {
  let mailoption = {
    from: "marviyatrushit0@gmail.com",
    to: to,
    subject: "Password Reset OTP",
    trxt: `Your OTP is ${otp}`,
  };
  transporter.sendMail(mailoption, (err) => {
    err ? console.log(err) : console.log(`OTP send Successfully`);
  });
};