import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowGitHubUser() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [username]);

  return (
    <div>
      {data && (
        <div>
          <img src={data.avatar_url} width={150} alt={data.login} />
          <h1>{data.login}</h1>
          <p>{data.name}</p>
        </div>
      )}
    </div>
  );
}
