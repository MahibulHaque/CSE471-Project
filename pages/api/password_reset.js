const nodemailer = require("nodemailer");
const { v4: uuid } = require("uuid");
import User from "../../models/User";
import PasswordReset from "../../models/PasswordReset";

export default async function handler(req, res) {
  const { email } = req.body;
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      let id = uuid();
      const newPasswordResetDetail = new PasswordReset({
        id: id,
        email: email,
      });
      newPasswordResetDetail.save().then(() => {
        const mailData = {
          from: "support@openrobotics.com",
          to: email,
          subject: "Password Recovery",
          html: `<body>
                    <p>Click to set a new password : <a href="http://localhost:3000/password/reset/${id}">Reset password</a></p>
                    </body>`,
        };
        transporter.sendMail(mailData, function (err, info) {
          if (err) console.log(err);
          else {
            console.log(info);
            return res
              .status(200)
              .send("Please check your email for the next step");
          }
        });
      });
    } else {
      return res.status(404).send("email does not exist in our records");
    }
  } catch (error) {
    res.send(error.message);
  }
}
