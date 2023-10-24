const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'tre46@ethereal.email',
        pass: 'MashVGA6WcfbtSwtFa'
    },
  });

  let info = await transporter.sendMail({
    from: '"Soham Dalal 👻" <barson0habra@gmail.com>', // sender address
    to: "sdjack2826@gmail.com,soham.dalal.21@aot.edu.in", // list of receivers
    subject: "This is your OTP", // Subject line
    text: "OTP: 3030", // plain text body
    html: "<b>Hello Soham</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;