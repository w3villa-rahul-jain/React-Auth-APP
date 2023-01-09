// Username	reuben52@ethereal.email
// Password	e7BVhxBmf3e5Jfu3qn

import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

import ENV from '../router/config.js'

// http://ethereal.email/create

let nodeConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: ENV.EMAIL, // generated ethereal user
      pass: ENV.PASSWORD, // generated ethereal password
    },
}

let transporter = nodemailer.createTransport(nodeConfig);


let MailGenerater  = new  Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: "https://mailgen.js/"
    }
})


// post : http://localhost:8080/api/registerMail
// parans{
// ""


export const registerMail = async (req, res) =>{
    const { username, userEmail, text, subject } = req.body;

    // body of the email
    var email = {
        body: {
            name: username,
            intro: text || "Welcome to the Application",
            outro: "Need help",
        }
    }
    var emailBody = MailGenerater.generate(email);

    let message = {
        from : ENV.EMAIL,
        to: userEmail,
        subject : subject || "signup succesfully",
        html: emailBody
    }

    // send Mail
    transporter.sendMail(message)
        .then(()=>{
            return res.status(200).send({msg : "You should recieve an Email from us"})
        })
        .catch(err => res.status(500).send({err}))
}


