import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input name="name" type="text" value={name} onChange={handleChange} />
      <Welcome name={name} />
    </div>
  );
}
