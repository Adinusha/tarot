import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
    ],
};

export default NextAuth(authOptions);