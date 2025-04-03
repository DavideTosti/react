import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import { Counter } from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGitHubUser from "./ShowGithubUser";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
          <Link to="/users">Users</Link>
        </div>

        <Routes>
          <Route path="/" element={<Welcome name="Guest" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Add user</p>} />
            <Route path=":username" element={<ShowGitHubUser />} />
          </Route>
          <Route path="*" element={<p>User not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
