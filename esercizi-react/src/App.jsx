import { useEffect, useState } from "react"; // Importa gli hook useEffect e useState da React
import TaskForm from "./components/TaskForm"; // Importa il componente TaskForm
import TaskList from "./components/TaskList"; // Importa il componente TaskList
import "./App.css"; // Importa il file di stile CSS
function App() {
  const [tasks, setTasks] = useState([]); // Stato per memorizzare l'elenco dei task
  // Funzione per aggiungere un nuovo task
  const handleSubmit = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { name: newTask, completed: false }, // Aggiunge un nuovo task con stato 'completed' impostato su false
    ]);
  };
  // Funzione per segnare un task come completato
  const handleComplete = (taskToComplete) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task === taskToComplete ? { ...task, completed: true } : task // Segna il task come completato
      )
    );
  };
  // Funzione per rimuovere un task
  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete)); // Rimuove il task selezionato
  };
  // Caricamento dei task da localStorage all'avvio
  useEffect(() => {
    const salvati = localStorage.getItem("tasks"); // Recupera i task salvati nel localStorage
    if (salvati) {
      setTasks(JSON.parse(salvati)); // Imposta i task recuperati nello stato
    }
  }, []);
  // Salvataggio dei task su localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Salva i task attuali nel localStorage
  }, [tasks]);
  return (
    <div>
      <TaskForm handleSubmit={handleSubmit} />{" "}
      {/*Renderizza il componente TaskForm e passa la funzione handleSubmit*/}
      <TaskList
        tasks={tasks} // Passa l'elenco dei task al componente TaskList
        handleComplete={handleComplete} // Passa la funzione handleComplete
        handleDelete={handleDelete} // Passa la funzione handleDelete
      />
    </div>
  );
}
export default App; // Esporta il componente App
