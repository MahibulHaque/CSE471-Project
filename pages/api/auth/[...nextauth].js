import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import connect from "../../../lib/database";
import User from "../../../models/User";

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
              });
              await newUser.save();
            }

          } catch (error) {
            console.log(error);
          }
        }
      },
      // updateUser({ user })
    },
  });
