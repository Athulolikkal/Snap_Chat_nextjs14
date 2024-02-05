import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { mongooseConnect } from "./lib/db";
import User from "@/model/userModel";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await mongooseConnect();

        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = await User.create({
              username: profile?.login,
              email: profile?.email,
              fullName: profile?.name,
              avatar: profile?.avatar_url,
            });
            await newUser.save();
          }

          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return false;
    },
  },
});
