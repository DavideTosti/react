export function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const remember = event.target.remember.checked;
    console.log(username, password, remember);
  }
  function loginFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";
    console.log({ username, password, remember });
  }
  return (
    <form onSubmit={onLogin}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input type="checkbox" name="remember" />
      <button type="submit">Login</button>
      <button type="button" onClick={loginFormData}>
        FormData Login
      </button>
    </form>
  );
}
