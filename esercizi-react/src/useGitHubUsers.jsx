import useSWR from "swr";

export default function useGitHubUsers() {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: mutate, // Funzione per aggiornare la lista
  };
}
