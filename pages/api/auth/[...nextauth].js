import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import connect from "../../../lib/database";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";

connect();
export default async (req, res) =>
  NextAuth(req, res, {
    providers: [
      // OAuth authentication providers...
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
    session: { jwt: true, maxAge: 30 * 24 * 60 * 60, updateAge: 24 * 60 * 60 },
    jwt: {
      secret: process.env.NEXTAUTH_SECRET,
      encryption: true,
    },

    events: {
      signIn: async ({ user, profile }) => {
        if (user) {
          try {
            const obj = await User.findOne({ email: profile.email });
            if (!obj) {
              //create new User

              const newUser = new User({
                email: profile.email,
                name: profile.name,
                username: profile.email.split("@")[0],
                imageUrl:profile.image
              });
              console.log("cookie start");
              const savedUser = await newUser.save();
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
                maxAge: 3600,
                httpOnly: true,
                sameSite: "Lax",
              });
              console.log("end");
            } else {
              const token = jwt.sign({ id: obj._id }, process.env.JWT_SECRET, {
                expiresIn: 3600 * 24,
              });
              setCookies("user-token", token, {
                req,
                res,
                maxAge: 3600,
                httpOnly: true,
                sameSite: "Lax",
              });
            }
          } catch (error) {
            console.log(error);
          }
        }
      },
      // updateUser({ user })
    },
  });
