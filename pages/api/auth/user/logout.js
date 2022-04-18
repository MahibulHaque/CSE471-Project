import { removeCookies } from "cookies-next";

export default async function handler(req, res){
  removeCookies("user-token", { req, res });
  res.statusCode = 200;
  res.json({ success: true });
};
