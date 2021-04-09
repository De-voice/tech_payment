import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host:"smtp.googleemail.com",
    port:465,
    auth: {
        user:process.env.GMAIL_USERNAME,
        pass:process.env.GMAIL_PASSWORD
    }
});



const sendMail = async({ receiver, subject, text }) => {
    const message = {
        from: process.env.GAMIL_ADDRESS, // sender address
        to:receiver, //receiver address
        subject,
        text
    }

    await transporter.sendMail(message)
}

export default sendMail;