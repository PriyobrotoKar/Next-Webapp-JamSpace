const BASE_URL = "https://api.spotify.com/v1/";

const fetchApi = async (url: string, token: string, params?: any) => {
  const response = await fetch(
    BASE_URL +
      url +
      (params ? `?${new URLSearchParams(params).toString()}` : ""),
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": "en",
      },
    },
  );
  return response.status === 200 ? await response.json() : null;
};
export default fetchApi;
