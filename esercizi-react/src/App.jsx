import { useState } from "react";
import Chat from "./Chat";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage(text, sender) {
    if (!text.trim()) return; //evita messaggi vuoti o con solo lo spazio
    setMessages([...messages, { text, sender }]);
  }

  return (
    <div>
      <h1>CHAT</h1>
      <Chat messages={messages} />
      <Message onSend={sendMessage} />
    </div>
  );
}

export default App;
