import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const credentialsConfig = CredentialsProvider({
    name: "Email",
    credentials: {
        username: {
            label: "Username"
        },
        password: {
            label: "Password",
            type: 'password'
        }
    },
    async authorize(credentials) {
        if (credentials.username === 'admin' && credentials.password === '12345') {
            return {
                name: 'admin'
            }
        } else {
            return null;
        }
    }
})

const config = {
    providers: [Github, credentialsConfig],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            console.log(request.nextUrl, "request.nextUrl");
            if (pathname === '/middlewareProtected') {
                console.log(auth, "auth ******")
                return !!auth
            }
            return true;
        }
    }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
