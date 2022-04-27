import { useState, useEffect } from "react";
import axios from "axios";

export function useApi<T>(url: string, skip: boolean = false) {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [refreshIndex, setRefreshIndex] = useState<number>(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  useEffect(() => {
    let cancelled = false;
    if (skip) {
      setResult(null);
      setLoading(false);
      setLoaded(false);
    } else {
      setLoading(true);
      axios
        .get<T>(url)
        .then((r) => {
          if (!cancelled) {
            setResult(r.data);
            setLoading(false);
            setLoaded(true);
          }
        })
        .catch((error) => {
          setLoading(false);
          if (error.response) {
            setError(error.response.data);
          } else {
            setError(error.message);
          }
        });
    }
    return () => {
      cancelled = true;
    };
  }, [url, refreshIndex, skip]);

  return [result, loading, loaded, error, refresh, setResult];
}
