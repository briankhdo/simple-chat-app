import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useApi<T>(url: string, onCompleted: Function = null) {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [refreshIndex, setRefreshIndex] = useState<number>(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  const fetchData = useCallback(
    (params) => {
      axios
        .get<T>(url, { params })
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
    },
    [onCompleted, url]
  );

  useEffect(() => {
    setLoading(true);
    fetchData({});
  }, [url, refreshIndex, fetchData]);

  return { result, loading, loaded, fetchData, setResult, error, refresh };
}
