import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // Stato per gestire la lista dei todo
  const [inputValue, setInputValue] = useState("");

  
  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); 
    }
  };

 
  const handleResetTodos = () => {
    setTodos([]);
  };

  // Rimuove un todo specifico dall'array
  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove)); // Rimuove l'elemento corrispondente
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleResetTodos}>Reset</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
