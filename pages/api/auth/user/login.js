import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../../../../models/User";
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
            res.status(201).json({
              token,
              user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
              },
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
