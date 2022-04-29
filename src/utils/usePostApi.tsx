import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function usePostApi<T>(url: string, data: {}, onCompleted: Function) {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [refreshIndex, setRefreshIndex] = useState<number>(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  const postData = useCallback(() => {
    axios
      .post<T>(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        setResult(r.data);
        setLoading(false);
        setLoaded(true);
        if (onCompleted) onCompleted();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setError(error.response.data);
        } else {
          setError(error.message);
        }
      });
  }, [data, onCompleted, url]);

  useEffect(() => {
    setLoading(true);
    postData();
  }, [url, refreshIndex, data, onCompleted, postData]);

  return { result, loading, loaded, postData, error, refresh, setResult };
}
