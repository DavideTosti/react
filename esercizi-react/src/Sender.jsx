export default function Sender({ onClick, label }) {
  return (
    <button
      style={{
        backgroundColor: label === "User1" ? "red" : "green",
        color: "white",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
