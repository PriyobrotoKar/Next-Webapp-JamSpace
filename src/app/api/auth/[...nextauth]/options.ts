import { NextAuthOptions } from "next-auth";
import axios from "axios";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = ["user-read-playback-state"].join(",");

const params = {
  scopes,
};

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams(params).toString();

const refreshAccessToken = async (token: any) => {
  // const params = new URLSearchParams({
  //   grant_type: "refresh_token",
  //   refresh_token: token.refreshToken,
  // });
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken);

  const response: any = await axios.post(
    "https://accounts.spotify.com/api/token",
    params,
    {
      headers: {
        Authorization:
          "Basic " +
          new (Buffer as any).from(
            process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET
          ).toString("base64"),
      },
    }
  );

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
    expiresIn: Date.now() + response.data.expires_in * 1000,
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresIn = account.expires_at;
        return token;
      }
      if (Date.now() < token.expiresIn * 1000) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
