export function Message({ age }) {
  return (
    <p>{age > 18 ? `You are ${age} years old!` : "You are very young!"}</p>
  );
}
