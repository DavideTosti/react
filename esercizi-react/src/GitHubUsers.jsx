import { useState } from "react";
import GitHubUser from "./GitHubUser";

export default function GitHubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(sub) {
    sub.preventDefault();
    if (username) {
      setUsers([...users, username]);
      setUsername("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Search username"
          onChange={(x) => setUsername(x.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {users.map((user, index) => (
          <GitHubUser key={index} username={user} />
        ))}
      </div>
    </div>
  );
}
