import React from "react";
import TaskItem from "./TaskItem"; // Importa TaskItem

function TaskList({ tasks, onComplete, onDelete }) {
  if (tasks.length === 0) {
    return <p>Nessun task presente</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
