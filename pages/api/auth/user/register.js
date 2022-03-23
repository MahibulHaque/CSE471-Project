import User from "../../../../models/User";
import validator from "validator";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
  const { Username, Email, name, password } = req.body;
  try {
    const obj = await User.findOne({ email: Email });

    if (!obj) {
      //New User
      const obj2 = await User.findOne({ username: Username });
      if (!obj2) {
        if (validator.isEmail(Email)) {
          const salt = 10;
          bcryptjs.hash(password, salt, (err, hash) => {
            if (err) {
              console.log(err);
            } else {
              const newUser = new User({
                name: name,
                password: hash,
                email: Email,
                username: Username,
              });
              newUser.save();
              return res
                .status(201)
                .json({ message: "Successful account creation" });
            }
          });
        } else {
          return res.status(200).json({ message: "Provide a valid email" });
        }
      } else {
        return res.status(200).json({ message: "Username already in use" });
      }
    } else {
      return res.json({ message: "Email already in use" });
    }
  } catch (error) {
    console.log(error);
  }
}
