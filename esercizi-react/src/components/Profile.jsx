import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function Profile() {
  const { data, error, load } = useSWR(
    "https://api.github.com/users/DavideTosti",
    fetcher
  );

  if (error) {
    return <p>Errore nel caricamento</p>;
  }
  if (load) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>I tuoi dati</h1>
      <p>Nome: {data.login}</p>
      <p>Bio: {data.bio}</p>
      <img src={data.avatar_url} />
    </div>
  );
}
