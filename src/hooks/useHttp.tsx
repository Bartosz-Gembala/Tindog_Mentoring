import { useState } from "react";

export const useHttp = <T,>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = (
    url: string,
    requestData: RequestInit
  ): Promise<T | undefined> => {
    setIsLoading(true);

    return fetch(url, requestData)
      .then((response) => {
        if (!response.ok) {
          setError(new Error("Something went wrong!"));
        }
        return response.json();
      })
      .then((responseData) => {
        return responseData as T;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { sendRequest, error, isLoading };
};
