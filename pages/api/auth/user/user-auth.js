import User from "../../../../models/User";
import jwt from "jsonwebtoken";
import {
  checkCookies,
  getCookie,
  getCookies,
  removeCookies,
} from "cookies-next";

export default async function handler(req, res){
  const token = getCookie("user-token", { req, res });
  if (token) {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });
    if (obj) {
      return res
        .status(200)
        .json({
          name: obj.name,
          email: obj.email,
          username: obj.username,
          image: obj.imageUrl,
        });
    } else {
      return res.status(400).send({ error: "User does not exist" });
    }
  } else {
    res.status(400);
    res.end("Token not found");
  }
};
