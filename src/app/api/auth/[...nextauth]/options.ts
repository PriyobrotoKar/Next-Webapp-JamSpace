import { NextAuthOptions } from "next-auth";
import axios from "axios";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-follow-read",
  "user-library-read",
].join(",");

// const params = {
//   scopes,
// };

// const LOGIN_URL =
//   "https://accounts.spotify.com/authorize?" +
//   new URLSearchParams(params).toString();

const refreshAccessToken = async (token: any) => {
  // const params = new URLSearchParams({
  //   grant_type: "refresh_token",
  //   refresh_token: token.refreshToken,
  // });
  // console.log("refreshtoken", token.refreshToken);
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
  console.log(response.data);

  return {
    ...token,
    accessToken: response.data.access_token,
    refreshToken: token.refreshToken,
    expiresIn: Date.now() + response.data.expires_in * 1000,
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: { scope: scopes },
      },
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
        token.providerAccountId = account.providerAccountId;
        // console.log("account", account);
        // console.log("token", token);
        return token;
      }
      if (Date.now() < token.expiresIn && !account) {
        // console.log("Access token valid");

        return token;
      }
      if (Date.now() > token.expiresIn && !account) {
        // console.log("Refreshing access token");

        return refreshAccessToken(token);
      }
    },
    async session({ session, token }: any) {
      // console.log("token", token);
      session.accessToken = token.accessToken;
      session.providerAccountId = token.providerAccountId;
      // console.log("session", session);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
