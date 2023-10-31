import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const BASE_URL = "https://api.spotify.com/v1/";

const fetchApi = async (url: string, token?: string, params?: any) => {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    BASE_URL +
      url +
      (params ? `?${new URLSearchParams(params).toString()}` : ""),
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session!.accessToken}`,
        "Accept-Language": "en",
      },
    },
  );
  return response.status === 200 ? await response.json() : null;
};
export const fetchPostApi = async (url: string, body: any, token?: string) => {
  const session = await getServerSession(authOptions);
  const response = await fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session!.accessToken}`,
      "Accept-Language": "en",
    },
    body,
  });
  return response.status === 200 ? await response.json() : null;
};

export default fetchApi;
