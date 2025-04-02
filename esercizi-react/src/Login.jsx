import useLogin from "./useLogin";

export function Login({ onSubmit }) {
  const {
    username,
    password,
    remember,
    setUsername,
    setPassword,
    setRemember,
    handleReset,
  } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ username, password, remember });
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
          onChange={(rmbr) => setRemember(rmbr.target.checked)}
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
