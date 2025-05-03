/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useFetch.tsx
import { useState, useEffect } from "react";

type FetchResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

function useFetch<T>(
  url: string,
  method: string = "GET",
  body: any = null
): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
          signal: abortController.signal,
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url, method, body]);

  return { data, error, loading };
}

export default useFetch;
