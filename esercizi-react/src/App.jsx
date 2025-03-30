import { Counter } from "./Counter";
import FilteredList from "./FilteredList";

const persons = [
  { id: 1, name: "Mario", age: 25 },
  { id: 2, name: "Luca", age: 17 },
  { id: 3, name: "Giulia", age: 30 },
  { id: 4, name: "Luigi", age: 44 },
  { id: 5, name: "Massimo", age: 33 },
  { id: 6, name: "Carlo", age: 16 },
  { id: 7, name: "Giorgio", age: 63 },
  { id: 8, name: "Nicola", age: 27 },
];

function App() {
  return (
    <div>
      <Counter />
      <FilteredList list={persons} />
    </div>
  );
}

export default App;
