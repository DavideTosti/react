export function Messaggio() {
  const [input, setInput] = useState(""); // Stato per l'input

  function handleChange(event) {
    setInput(event.target.value); // Aggiorna lo stato con il valore scritto
    return (
      <div>
        <button name="sx" onClick={handleClick}>
          Sx
        </button>
        <input
          type="text"
          placeholder="messaggio"
          value={input}
          onChange={handleChange}
        />
        <button name="dx" onClick={handleClick}>
          Dx
        </button>
      </div>
    );
  }
}
