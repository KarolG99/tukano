import { useEffect, useState } from "react";
import { ISingleRecipe } from "../types";

export const useApi = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ISingleRecipe[]>();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        setErrorMessage("Coś poszło nie tak, spróbuj odświeżyć stronę");
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, errorMessage };
};
