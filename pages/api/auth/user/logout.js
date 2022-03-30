import { removeCookies } from "cookies-next";

export default (req, res) => {
  removeCookies("user-token", { req, res });
  res.statusCode = 200;
  res.json({ success: true });
};
