import useGitHubUsers from "./useGitHubUsers";

export default function GitHubUsers() {
  const { users, error, isLoading, onRefresh } = useGitHubUsers();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error loading users</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
