import { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          ID: {item.id} - Name: {item.name} - Age: {item.age}
        </li>
      ))}
    </ul>
  );
}
