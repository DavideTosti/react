import useSWR from "swr";

// Recupera il fetcher dal contesto di SWRConfig
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useGitHubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    data,
    error,
    loading: !data && !error,
    refetchUser: mutate, // Funzione per ricaricare i dati manualmente
  };
}
