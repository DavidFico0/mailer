const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "001cdf428bcc79",
//       pass: "50101c0c934809"
//     }
//   });
//https://mailtrap.io/inboxes/885675/messages/1651435909/raw

const transport = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "001cdf428bcc79",
        pass: "50101c0c934809"
    }
}

const mailController = {
    enviar:(req, res) => {
        // res.send('Tentando enviar email...');
        const transporter = nodemailer.createTransport(transport);
        const email =  {
            from: 'davidfico22@gmail.com',
            to: req.body.dest,
            subject: req.body.subj,
            //text: req.body.msg,
            html: '<h1></h1>'
        }

        //enviando via transporter
        transporter.sendMail(email, (error, info)=> {
            if(error){
                console.log(error);
                console.log(info);
                res.send("Erro ao enviar e-mail", error.message)
            } else {
                res.send("Enviado com sucesso!");
            }
        });
    }
}

module.exports = mailController;