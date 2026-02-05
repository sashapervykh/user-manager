import { useState } from "react";
type Callback = () => Promise<void>;

export function useApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestAPI = async (
    callback: Callback,
    handleError,
    successNotification: [],
    failureNotification: [],
    redirect: true,
  ) => {
    setIsLoading(true);
    try {
      await callback();
      successNotification.map((elem) => elem);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
  };
}
