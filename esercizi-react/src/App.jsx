import { useState } from "react";
import ChatBot from "./ChatBot";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (userMessage) => {
    setMessages([...messages, { sender: "user", text: userMessage }]); //aggiunge i messaggi dell'utente
  };

  return (
    <div>
      <h1>Chatbot App</h1>
      <ChatBot messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
