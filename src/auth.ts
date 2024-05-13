import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const credentialsConfig = CredentialsProvider({
  name: "Username",
  credentials: {
    username: {
      label: "Username",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (credentials.username === "admin" && credentials.password === "admin123") {
      return {
        name: "admin",
      };
    } else {
      return null;
    }
  },
});

const config = {
  // providers: [Github, credentialsConfig],
  providers: [credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log(request.nextUrl, "request.nextUrl");

      // Protect specific static routes
      const protectedStaticRoutes = [
        "/dashboard",
        "/sales",
        "/sales/invoice",
        "/sales/invoice/add",
        "/sales/invoice/edit",
        "/purchases/invoice",
        "/purchases/invoice/add",
        "/inventory",
        "/parties",
        "/settings",
      ];

    //   if (pathname === '/dashboard') {
      if (protectedStaticRoutes.includes(pathname)) {
        console.log(auth, "auth ******");
        return !!auth;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

/**
 * sales
 * /sales/invoice
 * purchases/
 * inventory
 * parties
 * settings
 */
