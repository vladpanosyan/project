const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    tls:{
        rejectUnauthorized: false
    },
    // service: 'gmail',
    auth: {
        user: process.env.SENDER_MAIL_ADRESS,
        pass: process.env.SENDER_MAIL_PASSWORD
    }
});

module.exports = (email, portalURL) => {
    console.log(process.env.SENDER_MAIL_ADRESS, process.env.SENDER_MAIL_PASSWORD,141414)
    console.log(portalURL, 1313313)
    const mailOptions = {
        from: process.env.SENDER_MAIL_ADRESS,
        to: [...email],
        subject: 'Invite to Event',
        text: portalURL,
        html: `<a style="color:red" href='${portalURL}/'>portalURL-${portalURL}</a>`
    };

    return transporter.sendMail(mailOptions)
}