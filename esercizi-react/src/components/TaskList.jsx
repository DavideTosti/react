import TaskItem from "./TaskItem"; // Importa il componente TaskItem
export default function TaskList({ tasks, handleComplete, handleDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index} // Chiave unica per ogni elemento della lista
          task={task} // Passa il task al componente TaskItem
          handleComplete={handleComplete} // Passa la funzione handleComplete
          handleDelete={handleDelete} // Passa la funzione handleDelete
        />
      ))}
    </ul>
  );
}
