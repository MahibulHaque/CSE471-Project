import User from "../../../../models/User";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";

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
              newUser
                .save()
                .then((savedUser) => {
                  const token = jwt.sign(
                    { id: savedUser._id },
                    process.env.JWT_SECRET,
                    {
                      expiresIn: 3600 * 24,
                    }
                  );
                  setCookies("user-token", token, {
                    req,
                    res,
                    maxAge: 3600 * 24,
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    sameSite: "strict",
                    path:"/"
                  });
                  return res.status(201).json({
                    token,
                    user: {
                      id: savedUser.id,
                      name: savedUser.name,
                      email: savedUser.email,
                      username: savedUser.username,
                    },
                    message: "Account created successfully",
                  });
                })
                .catch((err) => {
                  throw err;
                });
            }
          });
        } else {
          return res.status(200).json({ message: "Provide a valid email" });
        }
      } else {
        return res.status(200).json({ message: "Username already in use" });
      }
    } else {
      return res.status(200).json({ message: "Email already in use" });
    }
  } catch (error) {
    console.log(error);
  }
}
