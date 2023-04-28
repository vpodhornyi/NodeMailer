import nodemailer from "nodemailer";

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
  }

  send(mailOptions) {
    return this.transporter.sendMail(mailOptions);
  }
}

export default Mailer;
