import { useState } from "react";
import Sender from "./Sender";

export default function Message({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend(sender) {
    onSend(message, sender);
    setMessage("");
  }

  return (
    <div>
      <Sender onClick={() => handleSend("User1")} label="User1" />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />

      <Sender onClick={() => handleSend("User2")} label="User2" />
    </div>
  );
}
