/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null, // Only attach body for POST/PUT requests
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, error, loading };
}

export default useFetch;
