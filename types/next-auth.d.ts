// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
 export interface Session {
    user: {
      _id?: string;
      id?:string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

 export interface User {
    _id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}
