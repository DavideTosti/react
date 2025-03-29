import { useState } from "react";

export default function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleReset() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return {
    username,
    password,
    remember,
    setUsername,
    setPassword,
    setRemember,
    handleReset,
  };
}
