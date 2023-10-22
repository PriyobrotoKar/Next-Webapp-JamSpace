import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.spotify.com/v1/";

export const fetchDataFromApi = async (
  url: string,
  token?: string,
  params?: { [key: string]: string | number },
) => {
  if (!url) {
    const response = new Promise((resolve) => resolve(null));
    return response;
  }
  const response = await axios.get(BASE_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
    },
    params,
  });
  return response.data;
};
export const putDataFromApi = async (
  url: string,
  body?: { [key: string]: string[] | number | { [key: string]: number } },
  token?: string,
) => {
  if (!url) {
    const response = new Promise((resolve) => resolve(null));
    return response;
  }
  const response = await axios.put(BASE_URL + url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
    },
  });
  return response.data;
};
export const postDataFromApi = async (
  url: string,
  body?: { [key: string]: string[] | number | { [key: string]: number } },
  token?: string,
) => {
  if (!url) {
    const response = new Promise((resolve) => resolve(null));
    return response;
  }
  const response = await axios.post(BASE_URL + url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
    },
  });
  return response.data;
};

const useFetch = (
  url: string,
  token?: string,
  params?: { [key: string]: string | number },
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (token) {
      fetchDataFromApi(url, token, params).then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [url, token]);

  return { data, loading };
};

export default useFetch;
