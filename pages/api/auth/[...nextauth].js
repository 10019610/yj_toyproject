import { connectDB } from "@/util/database";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        let db = (await connectDB).db("yjproject");
        let user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없습니다.");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("올바른 비밀번호가 아닙니다.");
          return null;
        }
        console.log(user);
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
        token.user.memberType = user.memberType;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },

  secret: "qwer1234",
};
export default NextAuth(authOptions);
