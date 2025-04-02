import { Routes, Route, Link, useParams } from "react-router-dom";
import GitHubUsers from "./GitHubUsers";
import GitHubUser from "./GitHubUser";

function App() {
  return (
    <div>
      <nav>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="users" element={<GitHubUsers />} />

        <Route path="users/:username" element={<GitHubUserWrapper />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

// Wrapper per passare il parametro `username` a GitHubUser
function GitHubUserWrapper() {
  let { username } = useParams();
  return <GitHubUser username={username} />;
}

export default App;

/*import { Routes, Route, Link } from "react-router-dom";
import GitHubUsers from "./GitHubUsers";
import GitHubUser from "./GitHubUser";

function App() {
  return (
    <div>
      <nav>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="users" element={<GitHubUsers />} />

        <Route path="users/" element={<GitHubUser username={username} />}>
          <Link to={":username"}></Link>
        </Route>

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;*/
