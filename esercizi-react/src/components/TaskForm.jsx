import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [testo, setTesto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(testo);
    setTesto("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
      />
      <button type="submit">Salva Task</button>
    </form>
  );
}

export default TaskForm;
