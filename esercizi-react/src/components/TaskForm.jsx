import { useState } from "react"; // Importa l'hook useState da React
export default function TaskForm({ handleSubmit }) {
  const [inputValue, setInputValue] = useState(""); // Stato per memorizzare il valore dell'input
  // Gestisce l'input nel campo di testo
  function handleChange(event) {
    setInputValue(event.target.value); // Aggiorna lo stato con il valore dell'input
  }
  // Gestisce la sottomissione del task
  function onSubmit(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form
    handleSubmit(inputValue); // Passa il valore dell'input alla funzione handleSubmit
    setInputValue(""); // Resetta il campo di testo
  }
  return (
    <form onSubmit={onSubmit}>
      {/*Gestisce la sottomissione del form */}
      <h3>Inserisci Task</h3>
      <input
        type="text"
        placeholder="Cosa farai oggi?"
        value={inputValue} // Valore controllato dell'input
        onChange={handleChange} // Gestisce il cambiamento dell'input
      />
      <button type="submit">Salva Task</button>{" "}
      {/*Bottone per salvare il task*/}
    </form>
  );
}
