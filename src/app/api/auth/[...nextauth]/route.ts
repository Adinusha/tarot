// filepath: d:\VSCode\Tarot\tarot\src\app\api\auth\[...nextauth]\route.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // Add this line
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };