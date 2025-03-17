import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export function App() {
  function handleLogin(data) {
    console.log("User data:", data);
  }

  return (
    <div>
      <h1>Interactive Welcome</h1>
      <InteractiveWelcome />
      <h1>Login Form</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}
