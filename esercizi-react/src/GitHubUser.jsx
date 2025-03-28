import { useEffect, useState } from "react";

export default function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(json));
  }, [username]);
  return (
    <div>
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
