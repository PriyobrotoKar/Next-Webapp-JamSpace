import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.spotify.com/v1/";

const fetchDataFromApi = async (
  url: string,
  token: string,
  params?: { [key: string]: string | number }
) => {
  const response = await axios.get(BASE_URL + url, {
    headers: { Authorization: `Bearer ${token}` },
    params,
  });
  return response.data;
};

const useFetch = (
  url: string,
  token?: string,
  params?: { [key: string]: string | number }
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
