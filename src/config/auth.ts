// Configuration for Google Auth using next-auth
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { backendUrl } from "./backendUrl";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl);

      return `${baseUrl}/chat`;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      const data = {
        email: profile.email,
        firstName: profile.given_name,
        lastName: profile.family_name,
      };

      try {
        const res = await axios.post(`${backendUrl}/user/signin`, data);
        console.log(res.data);

        if (res.data.hasProjects) {
          // navigate to chat page
          return true;
        } else {
          return true;
        }
      } catch (error) {
        return false;
      }
      // return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
