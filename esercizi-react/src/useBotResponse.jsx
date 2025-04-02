import { useState, useEffect } from "react";
import useSWR from "swr";

export default function useBotResponse() {
  const { data, error } = useSWR(
    "https://mocki.io/v1/591bd68c-5afe-4864-9997-5e03dc4d3980",
    fetcher
  );

  const [index, setIndex] = useState(0); //indice risposta bot
  const [botResponse, setBotResponse] = useState(null); //ultima risposta bot

  useEffect(() => {
    setBotResponse(data.responses[index]); //risposta bot in base all'indice
    setIndex((prevIndex) => (prevIndex + 1) % data.responses.length); //riporta indice a 0 se l'indice raggiunto è uguale alla lunghezza dell'array
  }, [data, userMessage]);

  return {
    response: botResponse,
    isLoading: !data && !error,
    isError: error,
  };
}
