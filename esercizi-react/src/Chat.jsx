export default function Chat({ messages }) {
  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "15px",
        border: "solid 2px black",
        height: "400px",
        width: "300px",
        overflow: "scroll",
        fontSize: "20px",
      }}
    >
      {messages.map((message, index) => (
        <p
          key={index}
          style={{
            color: message.sender === "User1" ? "red" : "green",
            textAlign: message.sender === "User1" ? "left" : "right",
          }}
        >
          <p>{message.text}</p>
        </p>
      ))}
    </div>
  );
}
