import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useGetProducts = <T>(url: string, limit: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<T[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}`);
      setLoading(false);
      setData(response.data);
    } catch (err) {
      setError("Unable to fetch products");
      setLoading(false);
    }
  }, [url, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    loading,
  };
};
