export default function TaskItem({ task, handleComplete, handleDelete }) {
  return (
    <div>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.name}{" "}
        {/* Visualizza il nome del task con una linea se completato*/}
      </p>
      <button onClick={() => handleComplete(task)}>Completato</button>{" "}
      {/*Bottone per segnare il task come completato*/}
      <button onClick={() => handleDelete(task)}>Rimuovi</button>{" "}
      {/*Bottone per rimuovere il task*/}
    </div>
  );
}
