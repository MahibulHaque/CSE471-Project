import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../../../../models/User";
import { setCookies } from "cookies-next";
export default async function handler(req, res) {
  const { Email, password } = req.body;
  if (!Email || !password) {
    return res.status(200).json({ message: "Email not provided" });
  } else {
    try {
      const user = await User.findOne({ email: Email });
      if (user) {
        bcryptjs.compare(password, user.password, function (err, result) {
          if (err) {
            res.json(err);
            res.status(405).end();
          }
          if (result) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
              expiresIn: 3600 * 24,
            });
            setCookies("user-token", token, {
              req,
              res,
              maxAge: 3600,
              httpOnly: true,
              sameSite:"Lax"
            });
            res.status(202).json({
              message: "Login Successful",
            });
          } else {
            res.status(200).json({ message: "Incorrect Password Provided" });
          }
        });
      } else {
        res.status(200).json({ message: "User not found" });
      }
    } catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
}
