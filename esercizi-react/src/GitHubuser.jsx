import useGitHubUser from "./usegitHubUser";

export default function GitHubUser({ username }) {
  const { data, loading, error } = useGitHubUser(username);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      {error && <h1>ERROR</h1>}
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
