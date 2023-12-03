import { useState } from "react";

export const useHttp = <T,>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = async (
    url: string,
    requestData: RequestInit
  ): Promise<T | undefined> => {
    setIsLoading(true);

    const response = await fetch(url, requestData);
    const responseData = await response.json();
    if (!response.ok) {
      setError(new Error(responseData.message));
      return;
    }
    if (requestData) {
      return responseData as T;
    }
    setIsLoading(false);
  };

  return { sendRequest, error, isLoading };
};
