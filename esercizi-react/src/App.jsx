import { Counter } from "./Counter";
import CurrentLocation from "./CurrentLocation";
import GitHubUser from "./GitHubUser";
import GitHubUsers from "./GitHubUsers";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <Counter />
      <GitHubUsers />
      <GitHubUser />
      <CurrentLocation />
      <Login />
    </div>
  );
}

export default App;
