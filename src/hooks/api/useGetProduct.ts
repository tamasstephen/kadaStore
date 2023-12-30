import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useGetProduct = <T>(productId: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setLoading(false);
      setData(response.data);
    } catch (err) {
      setError("Unable to fetch products");
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      fetchData();
    } else {
      setError("Unable to fetch product");
    }
  }, [fetchData, productId]);

  return {
    data,
    error,
    loading,
  };
};
