import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { mongooseConnect } from "./lib/db";
export const { handlers, auth } = NextAuth({
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
          console.log(profile, "profile is this");
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
