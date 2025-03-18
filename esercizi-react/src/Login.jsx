import { useState } from "react";

export function Login({ onChange }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); //

  function handleSubmit(event) {
    event.preventDefault(); // Evita il refresh della pagina
    onChange({ username, password, remember }); // Stampa lo stato
    handleLogin();
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setRemember(false); //
  }

  function handleLogin() {
    alert(`You logged in. Username: ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(usrnm) => setUsername(usrnm.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(psswrd) => setPassword(psswrd.target.value)}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(rmbr) => setRemember(rmbr.target.checked)} //
        />
        Remember me
      </label>
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
