import useGitHubUser from "./usegitHubUser";

export default function GitHubUser({ username }) {
  const { data, loading, error, refetchUser } = useGitHubUser(username);

  return (
    <div>
      <button onClick={refetchUser}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error loading data</h1>}
      {data && (
        <div>
          <img src={data.avatar_url} width={150} />
          <h1>{data.login}</h1>
          <p>{data.name}</p>
        </div>
      )}
    </div>
  );
}
