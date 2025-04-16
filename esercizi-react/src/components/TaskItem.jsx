import React from "react";

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div>
      <p style={{ opacity: task.completato ? 0.6 : 1 }}>{task.titolo}</p>

      <button onClick={() => onComplete(task.id)}>Completato</button>

      <button onClick={() => onDelete(task.id)}>Cancella</button>
    </div>
  );
}

export default TaskItem;
